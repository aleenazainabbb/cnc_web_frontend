"use client";

import React, { useState, useEffect, useRef } from "react";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";
import location from './styles/AddBooking/location.module.css';
import { useBooking } from "@/context/BookingContext";
import { GoogleMap, Marker, useLoadScript, Autocomplete } from '@react-google-maps/api';
import { FaSearch, FaTimes } from 'react-icons/fa';
import type { LatestLocation } from "@/context/BookingContext";
import { useLocation } from "@/context/Location";

countries.registerLocale(enLocale);

const Location: React.FC = () => {
  const { savedLocations } = useLocation();
  const [selectedSavedLocationId, setSelectedSavedLocationId] = useState<number | null>(null);
  const [selected, setSelected] = useState<"Home" | "Office" | "Other">("Home");
  const [answer, setAnswer] = useState("No");
  const [accessOption, setAccessOption] = useState("Someone is Home");
  const [countryList, setCountryList] = useState<{ [key: string]: string }>({});
  const [selectedCountry, setSelectedCountry] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [apt, setApt] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [petDetails, setPetDetails] = useState("");
  const [additionalNotes, setAdditionalNotes] = useState("");
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);
  const [selectedMarker, setSelectedMarker] = useState<{ lat: number; lng: number } | null>(null);
  const [mapCenter, setMapCenter] = useState({ lat: 24.8607, lng: 67.0011 });
  const { bookingData, updateBillingData, updateLatestLocation, formErrors } = useBooking();
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
    libraries: ['places'],
    language: 'en',
  });

  useEffect(() => {
    const countriesObj = countries.getNames("en", { select: "official" });
    setCountryList(countriesObj);
  }, []);

  useEffect(() => {
    // Add styles for pac-container when component mounts
    const style = document.createElement('style');
    style.textContent = `
      .pac-container {
        font-family: inherit;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
        border-radius: 8px;
        border: none;
        margin-top: -1395px;
        margin-left:-288px;
        z-index: 10000;
        overflow:hidden;
           width: "100%",
      }
      
      .pac-item {
        padding: 2px;
        cursor: pointer;
        border-top: 1px solid #e6e6e6;
     
      }
      
      .pac-item:first-child {
        border-top: none;
      }
      
      .pac-item:hover {
        background-color: #f5f5f5;
      }
      
     .pac-icon {
  display: inline-block !important; /* restores Google's default icons */
  margin-right: 8px; /* optional spacing */
 color: red !important;  
                 /* adjust size if needed */
  
 filter: invert(28%) sepia(95%) saturate(7496%) hue-rotate(0deg) brightness(92%) contrast(114%);
  
}
      .pac-item-query {
        font-size: 14px;
        color: #333;
      }
        @media (max-width: 480px) {
  .pac-container {
    margin-top: -965px;
   margin-left:-308px;
    width: 100%;
    font-size: 14px;
    border-radius: 4px;

  }
}
@media (max-width: 1024px) {
  .pac-container {
    margin-top: -1737px;
   margin-left:-308px;
    width: 90%;
  }
}
  `;
    document.head.appendChild(style);

    // Clean up on unmount
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  useEffect(() => {
    const countryName = countries.getName(selectedCountry, 'en') || "";
    const fullAddress = `${street ? street + ', ' : ''}${apt ? 'Apt ' + apt + ', ' : ''}${city ? city + ', ' : ''}${countryName}`;

    if (fullAddress.trim()) {
      const locationData: LatestLocation = {
        type: selected,
        street,
        apt,
        city,
        country: countryName,
        fullAddress,
        access: accessOption,
        pets: answer,
        petDetails,
        additionalNotes,
      };

      updateBillingData({ appointmentLocation: fullAddress });
      updateLatestLocation(locationData);
    }
  }, [selected, street, apt, city, selectedCountry, accessOption, answer, petDetails, additionalNotes]);

  useEffect(() => {
    if (selectedCountry && window.google && window.google.maps) {
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ address: countries.getName(selectedCountry, "en") }, (results, status) => {
        if (status === "OK" && results && results.length > 0) {
          const location = results[0].geometry.location;
          setMapCenter({ lat: location.lat(), lng: location.lng() });
        }
      });
    }
  }, [selectedCountry]);
const place = autocompleteRef.current?.getPlace();
          

  useEffect(() => {
    console.log("Live Booking Data:", bookingData);
  }, [bookingData]);

  const fillAddressFields = (components: google.maps.GeocoderAddressComponent[]) => {
    let city = "", street = "", apt = "", countryCode = "";
    for (const comp of components) {
      if (comp.types.includes("locality")) city = comp.long_name;
      if (comp.types.includes("route") || comp.types.includes("street_address")) street = comp.long_name;
      if (comp.types.includes("subpremise")) apt = comp.long_name;
      if (comp.types.includes("country")) countryCode = comp.short_name;
    }
    if (city) setCity(city);
    if (street) setStreet(street);
    if (apt) setApt(apt);
    if (countryCode) setSelectedCountry(countryCode);
  };

  const handleMapClick = (e: google.maps.MapMouseEvent) => {
    if (e.latLng) {
      const lat = e.latLng.lat();
      const lng = e.latLng.lng();
      setSelectedMarker({ lat, lng });
      setMapCenter({ lat, lng });

      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ location: { lat, lng } }, (results, status) => {
        if (status === "OK" && results?.length) {
          const result = results[0];
          setSearchInput(result.formatted_address || "");
          fillAddressFields(result.address_components);
        }
      });
    }
  };

const onPlaceChanged = () => {
  const autocomplete = autocompleteRef.current;
  if (!autocomplete || typeof autocomplete.getPlace !== "function") {
    console.warn("Autocomplete is not ready yet");
    return;
  }

  const place = autocomplete.getPlace();

  if (!place) {
    console.warn("No place selected");
    return;
  }

  if (!place.geometry || !place.geometry.location) {
    console.warn("Selected place has no geometry", place);
    return;
  }

  const lat = place.geometry.location.lat();
  const lng = place.geometry.location.lng();
  const address = place.formatted_address || place.name || "";

  setSelectedMarker({ lat, lng });
  setMapCenter({ lat, lng });
  setSearchInput(address);

  if (place.address_components) {
    fillAddressFields(place.address_components);
  }
};



  const clearSearch = () => setSearchInput("");
  const labelOccurrences: Record<string, number> = {};

  const processedLocations = savedLocations.map((loc) => {
    const label = loc.label.toLowerCase();
    if (!labelOccurrences[label]) {
      labelOccurrences[label] = 1;
      return { ...loc, displayLabel: loc.label };
    } else {
      const count = labelOccurrences[label]++;
      return { ...loc, displayLabel: `${loc.label} ${count}` };
    }
  });

  return (
    <div className={location.main}>
      <h2 className={location.title}>Location</h2>

      <div className={location.description}>
        <p>WHERE DO YOU NEED THE SERVICE?</p>
        <p>HELP OUR TEAMS GET TO YOUR PLACE ON TIME BY LOCATING IT ON THE MAP BELOW.</p>
      </div>

      {savedLocations.length > 0 ? (() => {
        const labelOccurrences: Record<string, number> = {};

        const processedLocations = savedLocations.map((loc) => {
          const label = loc.label.toLowerCase();
          if (!labelOccurrences[label]) {
            labelOccurrences[label] = 1;
            return { ...loc, displayLabel: loc.label };
          } else {
            const count = labelOccurrences[label]++;
            return { ...loc, displayLabel: `${loc.label} ${count}` };
          }
        });

        return (
          <>
            <div className={location.subheading}>
              <p>SAVED LOCATION</p>
            </div>
            <div className={location.scrollWrapper}>
              <div className={location.buttoncontainer}>
                {processedLocations.map((loc) => (
                  <button
                    key={loc.id}
                    className={`${location.button} ${selectedSavedLocationId === loc.id ? location.selectedButton : ""
                      }`}
                    onClick={() => {
                      setSelectedSavedLocationId(loc.id);
                      setSearchInput(loc.formattedAddress);
                      setSelectedMarker({ lat: loc.lat, lng: loc.lng });
                      setMapCenter({ lat: loc.lat, lng: loc.lng });

                      const geocoder = new window.google.maps.Geocoder();
                      geocoder.geocode({ placeId: loc.placeId }, (results, status) => {
                        if (status === "OK" && results?.[0]) {
                          fillAddressFields(results[0].address_components);
                        }
                      });
                    }}
                  >
                    {loc.displayLabel}
                  </button>
                ))}
              </div>
            </div>
          </>
        );
      })() : (
        <>
          <div className={location.subheading}>
            <p>SAVE YOUR ADDRESS DETAILS</p>
          </div>

          <div className={location.buttoncontainer}>
            {["Home", "Office", "Other"].map((label) => (
              <button
                key={label}
                className={`${location.button} ${selected === label ? location.active : ""}`}
                onClick={() => setSelected(label as "Home" | "Office" | "Other")}
              >
                {label}
              </button>
            ))}
          </div>
        </>
      )}
      {formErrors.fullAddress && (
        <p className="errorText">{formErrors.fullAddress}</p>
      )}
      <div>
        <select
          id="country"
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
          className={location.forminput}
        >
          <option value="" disabled hidden>-- Choose a country --</option>
          {Object.entries(countryList).map(([code, name]) => (
            <option key={code} value={code}>{name}</option>
          ))}
        </select>

        <input
          type="text"
          placeholder="City"
          className={location.forminput}
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <div className={location.row}>
          <input
            type="text"
            placeholder="Building or street no"
            className={location.forminput}
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          />
          <input
            type="text"
            placeholder="Apt no"
            className={location.forminput}
            value={apt}
            onChange={(e) => setApt(e.target.value)}
          />
        </div>
      </div>

      {loadError ? (
        <div>Map failed to load</div>
      ) : !isLoaded ? (
        <div>Loading map...</div>
      ) : (
        <div style={{ position: "relative" }}>
          <GoogleMap
            mapContainerStyle={{
              width: '100%',
              height: '300px',
              border: '1px solid #A1A1A1',
              borderRadius: '9px',
              overflow: 'visible',
              zIndex: 1,
            }}
            zoom={13}
            center={mapCenter}
            onClick={handleMapClick}
            options={{ disableDefaultUI: true, zoomControl: true }}
          >
            <div style={{ 
          position:'relative',
              top: '20px', 
              left: '10px', 
              right: '10px', 
              zIndex: 1000,
            }}>
              <Autocomplete
                onLoad={(autocomplete) => (autocompleteRef.current = autocomplete)}
                onPlaceChanged={onPlaceChanged}
              >
                <div style={{ position: 'relative', width: '95%' }}>
                  <FaSearch style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#9CA3AF', fontSize: '14px' }} />
                  <input
                    type="text"
                    placeholder="Search for your building or area"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    style={{ width: '100%', height: '36px', padding: '0 36px', borderRadius: '8px', border: '2px solid #D3D8DD', fontSize: '14px', outline: 'none' }}
                  />
                  {searchInput && (
                    <FaTimes
                      onClick={clearSearch}
                      style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', color: '#6B7280', cursor: 'pointer', fontSize: '14px' }}
                    />
                  )}
                </div>
              </Autocomplete>
            </div>
            {selectedMarker && <Marker position={selectedMarker} />}
          </GoogleMap>
        </div>
      )}

      <div className={location.subheading}><p>HOW DO WE GET IN?</p></div>
      <div className={location.options}>
        {["Someone is Home", "Doorman"].map((label) => (
          <button
            key={label}
            className={`${location.locbuttons} ${accessOption === label ? location.active : ""}`}
            onClick={() => setAccessOption(label)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className={location.subheading}><p>ANY PETS?</p></div>
      <div className={location.rowyesno}>
        {["Yes", "No"].map((label) => (
          <button
            key={label}
            className={`${location.yesnobuttons} ${answer === label ? location.active : ""}`}
            onClick={() => setAnswer(label)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className={location.box}>
        <textarea
          className={location.forminput}
          placeholder="What types of pets? Some of our cleaners have pet allergies."
          value={petDetails}
          onChange={(e) => setPetDetails(e.target.value)}
        />
        <div className={location.subheading}><p>ADDITIONAL NOTES</p></div>
        <textarea
          className={`${location.forminput} ${location.textbox}`}
          placeholder="I would like Sophie to be my cleaner. Please change my sheets and empty the dishwasher."
          value={additionalNotes}
          onChange={(e) => setAdditionalNotes(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Location;