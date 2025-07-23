"use client";

import React, { useState, useEffect, useRef } from "react";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";
import location from './styles/AddBooking/location.module.css';
import { useBooking } from "@/context/BookingContext";
import { GoogleMap, Marker, useLoadScript, Autocomplete } from '@react-google-maps/api';
import { FaSearch, FaTimes } from 'react-icons/fa';
import type { LatestLocation } from "@/context/BookingContext";

countries.registerLocale(enLocale);

const Location: React.FC = () => {
  const [selected, setSelected] = useState<"Home" | "Office" | "Other">("Home");
  const [answer, setAnswer] = useState("");
  const [accessOption, setAccessOption] = useState("");
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
  const { bookingData, updateBillingData, updateLatestLocation } = useBooking();
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
    if (autocompleteRef.current) {
      const place = autocompleteRef.current.getPlace();
      if (place.geometry?.location) {
        const lat = place.geometry.location.lat();
        const lng = place.geometry.location.lng();
        const address = place.formatted_address || place.name || "";

        setSelectedMarker({ lat, lng });
        setMapCenter({ lat, lng });
        setSearchInput(address);

        if (place.address_components) {
          fillAddressFields(place.address_components);
        }
      }
    }
  };

  const clearSearch = () => setSearchInput("");

  return (
    <div className={location.main}>
      <h2 className={location.title}>Location</h2>

      <div className={location.description}>
        <p>WHERE DO YOU NEED THE SERVICE?</p>
        <p>HELP OUR TEAMS GET TO YOUR PLACE ON TIME BY LOCATING IT ON THE MAP BELOW.</p>
      </div>

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
            <div style={{ position: 'absolute', top: '10px', left: '10px', right: '10px', zIndex: 1000 }}>
              <Autocomplete
                onLoad={(autocomplete) => (autocompleteRef.current = autocomplete)}
                onPlaceChanged={onPlaceChanged}
              >
                <div style={{ position: 'relative', width: '100%' }}>
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
