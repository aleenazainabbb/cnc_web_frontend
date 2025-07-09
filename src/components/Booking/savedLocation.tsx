'use client';

import React, { useState, useRef } from 'react';
import { GoogleMap, Marker, useLoadScript, Autocomplete } from '@react-google-maps/api';
import location from './styles/savedlocation.module.css';
import { FaSearch, FaTimes } from 'react-icons/fa';

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

const libraries: ('places')[] = ['places'];

const SavedLocation: React.FC = () => {
  const [label, setLabel] = useState('');
  const [selected, setSelected] = useState<{ lat: number; lng: number } | null>(null);
  const [mapCenter, setMapCenter] = useState(defaultCenter);
  const [searchInput, setSearchInput] = useState('');
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
    libraries: ['places'],
  });

  const handleMapClick = (e: google.maps.MapMouseEvent) => {
    if (e.latLng) {
      const lat = e.latLng.lat();
      const lng = e.latLng.lng();
      setSelected({ lat, lng });
      reverseGeocode(lat, lng);
    }
  };

  const onPlaceChanged = () => {
    if (autocompleteRef.current) {
      const place = autocompleteRef.current.getPlace();
      if (place.geometry && place.geometry.location) {
        const lat = place.geometry.location.lat();
        const lng = place.geometry.location.lng();
        setSelected({ lat, lng });
        setMapCenter({ lat, lng });
        setLabel(place.formatted_address || place.name || '');
      }
    }
  };

  const reverseGeocode = (lat: number, lng: number) => {
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ location: { lat, lng } }, (results, status) => {
      if (status === 'OK' && results && results.length > 0) {
        setLabel(results[0].formatted_address);
      }
    });
  };

  const clearSearch = () => {
    setSearchInput('');
  };

  if (loadError) return <div>Map failed to load</div>;
  if (!isLoaded) return <div>Loading map...</div>;

  return (
    <div className={location.main}>
      <div className={location.container}>
        <label className={location.label}>Add New Location</label>

        <input
          type="text"
          placeholder="Enter location name e.g. Home, Office etc"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          className={location.input}
        />

        <div style={{ marginTop: '20px', position: 'relative' }}>
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={13}
            center={mapCenter}
            onClick={handleMapClick}
            options={{
              disableDefaultUI: true, // ✅ Remove built-in buttons
              zoomControl: true,
            }}
          >
            {/* Custom search bar overlay */}
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
                <div style={{ position: 'relative', width: '100%' }}>
                  <FaSearch
                    style={{
                      position: 'absolute',
                      left: '12px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      color: '#9CA3AF',
                      fontSize: '14px',
                      zIndex: 1001,
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Search for your building or area"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    style={{
                      width: '100%',
                      height: '36px',
                      padding: '0 36px 0 36px',
                      borderRadius: '8px',
                      border: '2px solid #D3D8DD',
                      fontSize: '14px',
                      outline: 'none',
                    }}
                  />
                  {searchInput && (
                    <FaTimes
                      onClick={clearSearch}
                      style={{
                        position: 'absolute',
                        right: '12px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        color: '#6B7280',
                        cursor: 'pointer',
                        fontSize: '14px',
                        zIndex: 1001,
                      }}
                    />
                  )}
                </div>
              </Autocomplete>
            </div>

            {selected && <Marker position={selected} />}
          </GoogleMap>
        </div>

        <div className={location.buttonContainer}>
          <button className={location.button}>Save Location</button>
        </div>
      </div>
    </div>
  );
};

export default SavedLocation;
