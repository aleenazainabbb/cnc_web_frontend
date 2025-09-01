'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from '@/context/Location';
import type { SavedLocation } from '@/context/Location';
import Snackbar from '@/components/popups/Snackbar';
import { FaSearch, FaTimes, FaTrash, FaEdit } from 'react-icons/fa';

import {
  GoogleMap,
  Marker,
  useLoadScript,
  Autocomplete,
} from '@react-google-maps/api';

import location from './styles/savedlocation.module.css';

const mapContainerStyle = {
  width: '100%',
  height: '300px',
  border: '1px solid #A1A1A1',
  borderRadius: '9px',
  position: 'relative' as const,
  overflow: 'hidden',
};

const defaultCenter = {
  lat: 24.8607,
  lng: 67.0011,
};

type SavedLocationType = {
  id: number;
  label: string;
  formattedAddress: string;
  placeId: string;
  lat: number;
  lng: number;
};

const SavedLocation: React.FC = () => {
  const [label, setLabel] = useState('');
  const [formattedAddress, setFormattedAddress] = useState('');
  const [placeId, setPlaceId] = useState('');
  const [selected, setSelected] = useState<{ lat: number; lng: number } | null>(null);
  const [mapCenter, setMapCenter] = useState(defaultCenter);
  const [activeLocationId, setActiveLocationId] = useState<number | null>(null);
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const {
    savedLocation,
    saveLocation,
    deleteLocation,
    updateLocation,
    savedLocations,
    setSavedLocations
  } = useLocation();

  const [isInitialized, setIsInitialized] = useState(false);

  const [snackbarMsg, setSnackbarMsg] = useState('');
  const [snackbarType, setSnackbarType] = useState<'success' | 'error'>('success');
  const [showSnackbar, setShowSnackbar] = useState(false);

  const [isEditing, setIsEditing] = useState(false);
  const [editingLocation, setEditingLocation] = useState<SavedLocationType | null>(null);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
    libraries: ['places'],
  });

  const showToast = (msg: string, type: 'success' | 'error') => {
    setSnackbarMsg(msg);
    setSnackbarType(type);
    setShowSnackbar(true);
  };

  const handleSave = async () => {
    if (!label || !formattedAddress || !placeId || !selected) {
      showToast('Please complete the form', 'error');
      return;
    }

    const result = await saveLocation({
      label,
      formattedAddress,
      placeId,
      lat: selected.lat,
      lng: selected.lng,
    });

    if (result.type === 'success' && result.savedLocation !== undefined) {
      // const newLocation = result.savedLocation as SavedLocation;
      // setSavedLocations((prev) => [...prev, newLocation]);
      showToast('Location saved', 'success');
    } else {
      showToast(result.message || 'Failed to save location', 'error');
    }
  };

  const handleUpdate = async () => {
    if (!editingLocation) return;

    const updatedLabel = label || editingLocation.label;
    const updatedFormattedAddress = formattedAddress || editingLocation.formattedAddress;
    const updatedPlaceId = placeId || editingLocation.placeId;
    const updatedLat = selected?.lat ?? editingLocation.lat;
    const updatedLng = selected?.lng ?? editingLocation.lng;

    const result = await updateLocation(editingLocation.id, {
      label: updatedLabel,
      formattedAddress: updatedFormattedAddress,
      placeId: updatedPlaceId,
      lat: updatedLat,
      lng: updatedLng,
    });

    if (result.type === 'success') {
      showToast('Location updated', 'success');
    } else {
      showToast('Something went wrong while updating', 'error');
    }
  };

  const handleDelete = async (id: number) => {
    const res = await deleteLocation(id);
    showToast(res.message, res.type);
  };

  const handleEditLocation = (loc: SavedLocationType) => {
    setActiveLocationId(loc.id); 
    setIsEditing(true);
    setEditingLocation(loc);
    setLabel(loc.label);
    setFormattedAddress(loc.formattedAddress);
    setPlaceId(loc.placeId);
    setSelected({ lat: loc.lat, lng: loc.lng });
    setMapCenter({ lat: loc.lat, lng: loc.lng });

    if (inputRef.current) {
      inputRef.current.value = loc.formattedAddress;
    }
  };

  const handleMapClick = (e: google.maps.MapMouseEvent) => {
    if (e.latLng) {
      const lat = e.latLng.lat();
      const lng = e.latLng.lng();
      setSelected({ lat, lng });
      setMapCenter({ lat, lng });
      reverseGeocode(lat, lng);
    }
  };

  const reverseGeocode = (lat: number, lng: number) => {
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ location: { lat, lng } }, (results, status) => {
      if (status === 'OK' && results && results.length > 0) {
        setFormattedAddress(results[0].formatted_address);
        setPlaceId(results[0].place_id || '');
      }
    });
  };

const onPlaceChanged = () => {
  if (!autocompleteRef.current) return;

  const place = autocompleteRef.current.getPlace();
  if (!place.geometry?.location) return;

  const lat = place.geometry.location.lat();
  const lng = place.geometry.location.lng();

  setSelected({ lat, lng });
  setMapCenter({ lat, lng });
  setFormattedAddress(place.formatted_address || place.name || "");
  setPlaceId(place.place_id || "");
};


  const clearSearch = () => {
    if (inputRef.current) inputRef.current.value = '';
    autocompleteRef.current = null;
    setFormattedAddress('');
    setSelected(null);
    setMapCenter(defaultCenter);
  };

  if (loadError) return <div>Map failed to load</div>;
  if (!isLoaded) return <div>Loading map...</div>;

  return (
    <div className={location.main}>
    
      {showSnackbar && (
        <Snackbar
          message={snackbarMsg}
          type={snackbarType}
          onClose={() => setShowSnackbar(false)}
        />
      )}

      <div className={location.container}>
        <label className={location.label}>Add Label</label>
        <input
          type="text"
          placeholder="Home, Office etc"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          className={location.input}
        />

        <label className={location.label}>Selected Address</label>
        <input
          type="text"
          value={formattedAddress}
          className={location.input}
          disabled
        />

        <div className={location.mapWrapper}>
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={13}
            center={mapCenter}
            onClick={handleMapClick}
            options={{
              disableDefaultUI: true,
              zoomControl: true,
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '10px',
                left: '10px',
                right: '10px',
                zIndex: 1000,
              }}
            >
              <Autocomplete
                onLoad={(autocomplete) => (autocompleteRef.current = autocomplete)}
                onPlaceChanged={onPlaceChanged}
              >
                <div  style={{ position: 'relative', width: '100%' }}>
                  <FaSearch className={location.searchIcon} />
                  <input
                    ref={inputRef}
                    type="text"
                    placeholder="Search for your building or area"
                    style={{
                      width: '100%',
                      
                      height: '36px',
                      padding: '0 36px',
                      borderRadius: '8px',
                      border: '2px solid #D3D8DD',
                      fontSize: '14px',
                      outline: 'none',
                    }}
                  />
                  <FaTimes onClick={clearSearch} className={location.clearIcon} />
                </div>
              </Autocomplete>
            </div>
            {selected && <Marker position={selected} />}
          </GoogleMap>
        </div>

        <div className={location.buttonContainer}>
          <button className={location.button}
            onClick={isEditing ? handleUpdate : handleSave}>
            {isEditing ? 'Update Location' : 'Save Location'}
          </button>
        </div>
      </div>

      {savedLocations.length > 0 && (
        <div className={location.savedList}>
          <h3 className={location.savedListHeading}>Saved Locations</h3>
          <div className={location.savedListScroll}>
            {savedLocations.map((loc) => (
              <div
                key={loc.id}
                className={`${location.savedCard} ${activeLocationId === loc.id ? location.activeCard : ''}`}
                onClick={() => handleEditLocation(loc)}
              >
                <div className={location.savedLabel}>{loc.label}</div>
                <div className={location.savedAddress}>{loc.formattedAddress}</div>
                <div className={location.iconRow}>
                  <FaEdit
                    className={location.icon}
                    onClick={(e) => {
                      e.stopPropagation(); // prevent triggering card click
                      handleEditLocation(loc);
                    }}
                  />
                  <FaTrash
                    className={location.trashIcon}
                    onClick={(e) => {
                      e.stopPropagation(); // prevent triggering card click
                      handleDelete(loc.id);
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SavedLocation;
