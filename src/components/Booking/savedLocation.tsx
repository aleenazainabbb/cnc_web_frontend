"use client";

import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "@/context/Location";
import Snackbar from "@/components/popups/Snackbar";
import { FaSearch, FaTimes, FaTrash, FaEdit } from "react-icons/fa";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import location from "./styles/savedlocation.module.css";

const mapContainerStyle = {
  width: "100%",
  height: "300px",
  border: "1px solid #A1A1A1",
  borderRadius: "9px",
};

const defaultCenter = { lat: 24.8607, lng: 67.0011 };

type SavedLocationType = {
  id: number;
  label: string;
  formattedAddress: string;
  placeId: string;
  lat: number;
  lng: number;
};

const SavedLocation: React.FC = () => {
  const [label, setLabel] = useState("");
  const [formattedAddress, setFormattedAddress] = useState("");
  const [placeId, setPlaceId] = useState("");
  const [selected, setSelected] = useState<{ lat: number; lng: number } | null>(
    null
  );
  const [mapCenter, setMapCenter] = useState(defaultCenter);
  const [activeLocationId, setActiveLocationId] = useState<number | null>(null);

  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const { saveLocation, deleteLocation, updateLocation, savedLocations } =
    useLocation();

  const [snackbarMsg, setSnackbarMsg] = useState("");
  const [snackbarType, setSnackbarType] = useState<"success" | "error">(
    "success"
  );
  const [showSnackbar, setShowSnackbar] = useState(false);

  const [isEditing, setIsEditing] = useState(false);
  const [editingLocation, setEditingLocation] =
    useState<SavedLocationType | null>(null);

  // ✅ Only one loader (production-safe)
  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script", // ensures unique loader
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
    libraries: ["places"],
  });

  const showToast = (msg: string, type: "success" | "error") => {
    setSnackbarMsg(msg);
    setSnackbarType(type);
    setShowSnackbar(true);
  };

  // ✅ Attach Autocomplete once
  useEffect(() => {
    if (!isLoaded || !inputRef.current || autocompleteRef.current) return;

    const autocomplete = new google.maps.places.Autocomplete(inputRef.current, {
      fields: ["geometry", "formatted_address", "place_id", "name"],
      types: ["address"],
    });

    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();
      if (!place.geometry?.location) return;

      const lat = place.geometry.location.lat();
      const lng = place.geometry.location.lng();

      setSelected({ lat, lng });
      setMapCenter({ lat, lng });
      setFormattedAddress(place.formatted_address || place.name || "");
      setPlaceId(place.place_id || "");
    });

    autocompleteRef.current = autocomplete;
  }, [isLoaded]);

  // ✅ Fix dropdown styling and remove duplicates
  useEffect(() => {
    if (!isLoaded) return;

    const updatePacPosition = () => {
      const pac = document.querySelector<HTMLElement>(".pac-container");
      const input = inputRef.current;
      if (!pac || !input) return;

      const rect = input.getBoundingClientRect();
      pac.style.position = "fixed";
      pac.style.top = `${rect.bottom}px`;
      pac.style.left = `${rect.left}px`;
      pac.style.width = `${rect.width}px`;
      pac.style.zIndex = "2147483647";
    };

    const observer = new MutationObserver(() => {
      const pacs = document.querySelectorAll(".pac-container");
      if (pacs.length > 1) {
        pacs.forEach((p, i) => {
          if (i > 0) p.remove(); // ✅ remove duplicates
        });
      }
      updatePacPosition();
    });

    observer.observe(document.body, { childList: true, subtree: true });
    window.addEventListener("scroll", updatePacPosition, true);
    window.addEventListener("resize", updatePacPosition);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updatePacPosition, true);
      window.removeEventListener("resize", updatePacPosition);
    };
  }, [isLoaded]);

  // ✅ Save location
  const [isLoading, setIsLoading] = useState(false);

  const handleSave = async () => {
    if (!label || !formattedAddress || !placeId || !selected) {
      showToast("Please complete the form", "error");
      return;
    }

    setIsLoading(true); // ✅ Start loader
    try {
      const result = await saveLocation({
        label,
        formattedAddress,
        placeId,
        lat: selected.lat,
        lng: selected.lng,
      });

      if (result.type === "success") {
        showToast("Location saved", "success");
        setLabel("");
        setFormattedAddress("");
        setPlaceId("");
        setSelected(null);
        if (inputRef.current) inputRef.current.value = "";
      } else {
        showToast(result.message || "Failed to save location", "error");
      }
    } finally {
      setIsLoading(false); // ✅ Stop loader
    }
  };

  // Update location
  const handleUpdate = async () => {
    if (!editingLocation) return;

    setIsLoading(true);
    try {
      const updatedLabel = label || editingLocation.label;
      const updatedFormattedAddress =
        formattedAddress || editingLocation.formattedAddress;
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

      if (result.type === "success") {
        showToast("Location updated", "success");
        setIsEditing(false);
        setEditingLocation(null);
      } else {
        showToast("Something went wrong while updating", "error");
      }
    } finally {
      setIsLoading(false);
    }
  };

  // ✅ Delete location
  const handleDelete = async (id: number) => {
    const res = await deleteLocation(id);
    showToast(res.message, res.type);
  };

  // ✅ Edit location
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

  // ✅ Map click → reverse geocode
  const handleMapClick = (e: google.maps.MapMouseEvent) => {
    if (e.latLng) {
      const lat = e.latLng.lat();
      const lng = e.latLng.lng();
      setSelected({ lat, lng });
      setMapCenter({ lat, lng });
      reverseGeocode(lat, lng);
    }
  };

  const clearSearch = () => {
    if (inputRef.current) inputRef.current.value = "";
    setFormattedAddress("");
    setSelected(null);
    setMapCenter(defaultCenter);
    setPlaceId("");
  };

  const reverseGeocode = (lat: number, lng: number) => {
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ location: { lat, lng } }, (results, status) => {
      if (status === "OK" && results && results.length > 0) {
        setFormattedAddress(results[0].formatted_address);
        setPlaceId(results[0].place_id || "");
      }
    });
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

        {/* ✅ Single Search Input (Autocomplete) */}
        <label className={location.label}>Search Address</label>
        <div className={location.searchInputWrapper}>
          <FaSearch className={location.searchIcon} />
          <input
            ref={inputRef}
            type="text"
            value={formattedAddress}
            onChange={(e) => setFormattedAddress(e.target.value)}
            placeholder="Search for your building or area"
            className={location.searchInput}
          />
          {formattedAddress && (
            <FaTimes onClick={clearSearch} className={location.clearIcon} />
          )}
        </div>

        <div className={location.mapWrapper}>
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={13}
            center={mapCenter}
            onClick={handleMapClick}
            options={{ disableDefaultUI: true, zoomControl: true }}
          >
            {selected && <Marker position={selected} />}
          </GoogleMap>
        </div>

        <div className={location.buttonContainer}>
          <button
            onClick={isEditing ? handleUpdate : handleSave}
            disabled={isLoading}
            style={{
              padding: "10px 20px",
              backgroundColor: "#3498db",
              color: "#fff",
              fontWeight: 500,
              borderRadius: "6px",
              border: "none",
              cursor: isLoading ? "not-allowed" : "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
            }}
          >
            {isLoading && (
              <span
                style={{
                  width: "16px",
                  height: "16px",
                  border: "2px solid #f3f3f3",
                  borderTop: "2px solid #fff",
                  borderRadius: "50%",
                  display: "inline-block",
                  animation: "spin 1s linear infinite",
                }}
              />
            )}
            {isEditing ? "Update Location" : "Save Location"}
          </button>

          <style>
            {`
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}
          </style>
        </div>
      </div>

      {savedLocations.length > 0 && (
        <div className={location.savedList}>
          <h3 className={location.savedListHeading}>Saved Locations</h3>
          <div className={location.savedListScroll}>
            {savedLocations.map((loc) => (
              <div
                key={loc.id}
                className={`${location.savedCard} ${
                  activeLocationId === loc.id ? location.activeCard : ""
                }`}
                onClick={() => handleEditLocation(loc)}
              >
                <div className={location.savedLabel}>{loc.label}</div>
                <div className={location.savedAddress}>
                  {loc.formattedAddress}
                </div>
                <div className={location.iconRow}>
                  <FaEdit
                    className={location.icon}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleEditLocation(loc);
                    }}
                  />
                  <FaTrash
                    className={location.trashIcon}
                    onClick={(e) => {
                      e.stopPropagation();
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