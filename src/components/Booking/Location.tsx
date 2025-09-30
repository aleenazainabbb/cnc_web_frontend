"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";
import locationStyles from "./styles/AddBooking/location.module.css";
import { useBooking } from "@/context/BookingContext";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { FaSearch, FaTimes, FaChevronDown } from "react-icons/fa";
import { useLocation } from "@/context/Location";

countries.registerLocale(enLocale);

const libraries: "places"[] = ["places"];
const DEFAULT_CENTER = { lat: 24.8607, lng: 67.0011 };

// Validate coordinates utility
const isValidCoordinate = (coord: any): boolean =>
  coord &&
  typeof coord === "object" &&
  typeof coord.lat === "number" &&
  typeof coord.lng === "number" &&
  !isNaN(coord.lat) &&
  !isNaN(coord.lng) &&
  Math.abs(coord.lat) <= 90 &&
  Math.abs(coord.lng) <= 180;

// Safe marker component to prevent errors
const SafeMarker: React.FC<{ position: any }> = ({ position }) => {
  if (!isValidCoordinate(position)) {
    return null;
  }

  return (
    <Marker
      position={position}
      icon={{
        url: `data:image/svg+xml;base64,${btoa(`
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" fill="#EA4335" stroke="#FFFFFF" stroke-width="3"/>
            <circle cx="12" cy="12" r="4" fill="#FFFFFF"/>
          </svg>
        `)}`,
        scaledSize: new google.maps.Size(24, 24),
        anchor: new google.maps.Point(12, 12),
      }}
    />
  );
};

const Location: React.FC = () => {
  const { savedLocations } = useLocation();
  const { bookingData, updateBillingData, updateLatestLocation, formErrors } =
    useBooking();

  // Form and map states
  const [selectedSavedLocationId, setSelectedSavedLocationId] = useState<
    number | null
  >(null);
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

  const [selectedMarker, setSelectedMarker] =
    useState<google.maps.LatLngLiteral | null>(null);
  const [mapCenter, setMapCenter] = useState(DEFAULT_CENTER);
  const inputRef = useRef<HTMLInputElement>(null);
  const selectRef = useRef<HTMLSelectElement>(null);

  // Load Google Maps API
  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
    libraries,
  });

  // Initialize countries
  useEffect(() => {
    setCountryList(countries.getNames("en", { select: "official" }) || {});
  }, []);

  // Separate dropdown styling function
  const styleGooglePlacesDropdown = () => {
    const pac = document.querySelector(".pac-container") as HTMLElement;
    if (!pac) return;

    pac.style.background = "#fff";
    pac.style.border = "1px solid #d1d5db";
    pac.style.borderRadius = "0 0 8px 8px";
    pac.style.boxShadow = "0 4px 20px rgba(0,0,0,0.15)";
    pac.style.overflow = "hidden";
    pac.style.maxHeight = "280px";
    pac.style.zIndex = "2147483647";

    // Remove any transforms or transitions
    pac.style.transform = "none";
    pac.style.transition = "none";

    const items = pac.querySelectorAll(".pac-item") as NodeListOf<HTMLElement>;
    items.forEach((item, i) => {
      item.style.padding = "10px 16px";
      item.style.cursor = "pointer";
      item.style.borderBottom =
        i === items.length - 1 ? "none" : "1px solid #f3f4f6";
      item.style.transition = "none";

      item.addEventListener(
        "mouseenter",
        () => (item.style.background = "#f8fafc")
      );
      item.addEventListener(
        "mouseleave",
        () => (item.style.background = "transparent")
      );
    });
  };

  // Separate dropdown positioning function
  const positionGooglePlacesDropdown = () => {
    const pac = document.querySelector(".pac-container") as HTMLElement;
    if (!pac || !inputRef.current) return;

    const rect = inputRef.current.getBoundingClientRect();
    const scrollX = window.pageXOffset || document.documentElement.scrollLeft;
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;

    // Calculate absolute position relative to document
    const absoluteTop = rect.bottom + scrollY;
    const absoluteLeft = rect.left + scrollX;

    pac.style.position = "absolute";
    pac.style.top = `${absoluteTop}px`;
    pac.style.left = `${absoluteLeft}px`;
    pac.style.width = `${rect.width}px`;
  };

  // Combined fix function
  const fixGooglePlacesDropdown = () => {
    styleGooglePlacesDropdown();
    positionGooglePlacesDropdown();
  };

  // Google Places Autocomplete - ONLY ONE DROPDOWN
  useEffect(() => {
    if (!isLoaded || !inputRef.current) return;

    const autocomplete = new google.maps.places.Autocomplete(inputRef.current, {
      fields: ["geometry", "formatted_address", "address_components", "name"],
      types: ["address"],
    });

    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();
      if (!place.geometry?.location) return;

      const lat = place.geometry.location.lat();
      const lng = place.geometry.location.lng();
      const newMarker = { lat, lng };

      if (isValidCoordinate(newMarker)) {
        setSelectedMarker(newMarker);
        setMapCenter(newMarker);
      }

      setSearchInput(place.formatted_address || place.name || "");

      if (place.address_components) fillAddressFields(place.address_components);
    });

    let positionUpdateInterval: NodeJS.Timeout;

    // MutationObserver to detect when Google creates the dropdown
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (
            node.nodeType === 1 &&
            (node as Element).classList?.contains("pac-container")
          ) {
            fixGooglePlacesDropdown();

            // Continuously update position to prevent movement
            positionUpdateInterval = setInterval(
              positionGooglePlacesDropdown,
              100
            );

            // Also update position on scroll and resize
            const updatePosition = () => positionGooglePlacesDropdown();
            window.addEventListener("scroll", updatePosition);
            window.addEventListener("resize", updatePosition);

            // Cleanup when dropdown is removed
            const cleanupObserver = new MutationObserver((cleanupMutations) => {
              cleanupMutations.forEach((cleanupMutation) => {
                cleanupMutation.removedNodes.forEach((removedNode) => {
                  if (removedNode === node) {
                    clearInterval(positionUpdateInterval);
                    window.removeEventListener("scroll", updatePosition);
                    window.removeEventListener("resize", updatePosition);
                    cleanupObserver.disconnect();
                  }
                });
              });
            });

            cleanupObserver.observe(document.body, {
              childList: true,
              subtree: true,
            });
          }
        });
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    // Initial fix
    setTimeout(fixGooglePlacesDropdown, 100);

    return () => {
      observer.disconnect();
      if (positionUpdateInterval) {
        clearInterval(positionUpdateInterval);
      }
    };
  }, [isLoaded]);

  // Fill form fields from Google Place
  const fillAddressFields = (
    components: google.maps.GeocoderAddressComponent[]
  ) => {
    let city = "",
      street = "",
      apt = "",
      countryCode = "";

    for (const comp of components) {
      if (comp.types.includes("locality")) city = comp.long_name;
      if (comp.types.includes("route") || comp.types.includes("street_address"))
        street = comp.long_name;
      if (comp.types.includes("subpremise")) apt = comp.long_name;
      if (comp.types.includes("country")) countryCode = comp.short_name;
      if (comp.types.includes("administrative_area_level_1") && !city)
        city = comp.long_name;
      if (comp.types.includes("neighborhood") && !street)
        street = comp.long_name;
    }

    if (city) setCity(city);
    if (street) setStreet(street);
    if (apt) setApt(apt);
    if (countryCode) setSelectedCountry(countryCode);
  };

  // Update latest location whenever address changes
  useEffect(() => {
    const countryName = countries.getName(selectedCountry, "en") || "";
    const fullAddress = `${street ? street + ", " : ""}${
      apt ? "Apt " + apt + ", " : ""
    }${city ? city + ", " : ""}${countryName}`;

    if (fullAddress.trim()) {
      const locationData = {
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
  }, [
    selected,
    street,
    apt,
    city,
    selectedCountry,
    accessOption,
    answer,
    petDetails,
    additionalNotes,
  ]);

  // Safe function to set marker
  const setSafeMarker = (marker: google.maps.LatLngLiteral | null) => {
    if (marker && isValidCoordinate(marker)) {
      setSelectedMarker(marker);
    } else {
      setSelectedMarker(null);
    }
  };

  // Safe function to set map center
  const setSafeMapCenter = (center: google.maps.LatLngLiteral) => {
    if (isValidCoordinate(center)) {
      setMapCenter(center);
    }
  };

  // Handle map click → sets marker and updates address fields
  const handleMapClick = (e: google.maps.MapMouseEvent) => {
    if (!e.latLng) return;
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    const newMarker = { lat, lng };

    if (isValidCoordinate(newMarker)) {
      setSafeMarker(newMarker);
      setSafeMapCenter(newMarker);
    }

    // Reverse geocode for address - get the nearest address
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode(
      {
        location: newMarker,
      },
      (results, status) => {
        if (status === "OK" && results?.length) {
          let bestResult = results[0];

          for (const result of results) {
            const types = result.types;
            if (types.includes("street_address") || types.includes("premise")) {
              bestResult = result;
              break;
            }
            if (
              types.includes("route") &&
              !bestResult.types.includes("street_address")
            ) {
              bestResult = result;
            }
          }

          const address = bestResult.formatted_address;
          setSearchInput(address || "");

          if (bestResult.address_components) {
            fillAddressFields(bestResult.address_components);
          }

          if (bestResult.geometry?.location) {
            const exactLat = bestResult.geometry.location.lat();
            const exactLng = bestResult.geometry.location.lng();
            setSafeMarker({ lat: exactLat, lng: exactLng });
          }
        } else {
          setSearchInput(`${lat.toFixed(6)}, ${lng.toFixed(6)}`);
          setCity("");
          setStreet("");
          setApt("");
          setSelectedCountry("");
        }
      }
    );
  };

  const clearSearch = () => {
    setSearchInput("");
    setSelectedMarker(null);
    setCity("");
    setStreet("");
    setApt("");
    setSelectedCountry("");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchInput(e.target.value);

  if (loadError)
    return (
      <div className={locationStyles.main}>
        Error loading maps: {loadError.message}
      </div>
    );
  if (!isLoaded)
    return <div className={locationStyles.main}>Loading maps...</div>;

  return (
    <div className={locationStyles.main}>
      <h2 className={locationStyles.title}>Location</h2>

      <div className={locationStyles.description}>
        <p>WHERE DO YOU NEED THE SERVICE?</p>
        <p>
          HELP OUR TEAMS GET TO YOUR PLACE ON TIME BY LOCATING IT ON THE MAP
          BELOW.
        </p>
      </div>

      {/* Saved Locations */}
      {savedLocations.length > 0 ? (
        (() => {
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
              <div className={locationStyles.subheading}>
                <p>SAVED LOCATION</p>
              </div>
              <div className={locationStyles.scrollWrapper}>
                <div className={locationStyles.buttoncontainer}>
                  {processedLocations.map((loc) => (
                    <button
                      key={loc.id}
                      className={`${locationStyles.button} ${
                        selectedSavedLocationId === loc.id
                          ? locationStyles.selectedButton
                          : ""
                      }`}
                      onClick={() => {
                        setSelectedSavedLocationId(loc.id);
                        setSearchInput(loc.formattedAddress);
                        const newMarker = { lat: loc.lat, lng: loc.lng };
                        setSafeMarker(newMarker);
                        setSafeMapCenter(newMarker);

                        const geocoder = new window.google.maps.Geocoder();
                        geocoder.geocode(
                          { placeId: loc.placeId },
                          (results, status) => {
                            if (status === "OK" && results?.[0])
                              fillAddressFields(results[0].address_components);
                          }
                        );
                      }}
                    >
                      {loc.displayLabel}
                    </button>
                  ))}
                </div>
              </div>
            </>
          );
        })()
      ) : (
        <div className={locationStyles.buttoncontainer}>
          {["Home", "Office", "Other"].map((label) => (
            <button
              key={label}
              className={`${locationStyles.button} ${
                selected === label ? locationStyles.active : ""
              }`}
              onClick={() => setSelected(label as "Home" | "Office" | "Other")}
            >
              {label}
            </button>
          ))}
        </div>
      )}

      {formErrors.fullAddress && (
        <p className="errorText">{formErrors.fullAddress}</p>
      )}

      <div>
        {/* Custom styled select to prevent browser dropdown */}
        <div style={{ position: "relative" }}>
          <select
            ref={selectRef}
            id="country"
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
            className={locationStyles.forminput}
            style={{
              appearance: "none",
              WebkitAppearance: "none",
              MozAppearance: "none",
            }}
          >
            <option value="" disabled hidden>
              -- Choose a country --
            </option>
            {Object.entries(countryList).map(([code, name]) => (
              <option key={code} value={code}>
                {name}
              </option>
            ))}
          </select>
          <FaChevronDown
            style={{
              position: "absolute",
              right: "12px",
              top: "50%",
              transform: "translateY(-50%)",
              color: "#6B7280",
              fontSize: "12px",
              pointerEvents: "none",
            }}
          />
        </div>

        <input
          type="text"
          placeholder="City"
          className={locationStyles.forminput}
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <div className={locationStyles.row}>
          <input
            type="text"
            placeholder="Building or street no"
            className={locationStyles.forminput}
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          />
          <input
            type="text"
            placeholder="Apt no"
            className={locationStyles.forminput}
            value={apt}
            onChange={(e) => setApt(e.target.value)}
          />
        </div>
      </div>

      {/* Google Map */}
      <div style={{ position: "relative", marginTop: "16px" }}>
        <GoogleMap
          mapContainerStyle={{
            width: "100%",
            height: "300px",
            border: "1px solid #A1A1A1",
            borderRadius: "9px",
          }}
          zoom={13}
          center={mapCenter}
          onClick={handleMapClick}
          options={{ disableDefaultUI: true, zoomControl: true }}
        >
          {selectedMarker && (
            <Marker
              position={selectedMarker}
              icon={{
                url: `data:image/svg+xml;base64,${btoa(`
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="48" viewBox="0 0 36 48">
          <!-- Shadow -->
          <ellipse cx="18" cy="46" rx="10" ry="3" fill="rgba(0,0,0,0.3)"/>
          <!-- Teardrop pin -->
          <path d="M18 0C9 0 2 7 2 16c0 11 16 29 16 29s16-18 16-29C34 7 27 0 18 0z" fill="#EA4335"/>
          <!-- Inner circle -->
          <circle cx="18" cy="16" r="6" fill="#fff"/>
        </svg>
      `)}`,
                scaledSize: new google.maps.Size(36, 48),
                anchor: new google.maps.Point(18, 48), // bottom tip of pin
              }}
            />
          )}
        </GoogleMap>

        {/* Search Input - ONLY THIS HAS GOOGLE PLACES DROPDOWN */}
        <div
          style={{
            position: "absolute",
            top: 5,
            left: 10,
            right: 10,
            zIndex: 1000,
          }}
        >
          <div style={{ position: "relative" }}>
            <FaSearch
              style={{
                position: "absolute",
                left: "12px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "#9CA3AF",
                fontSize: "14px",
              }}
            />
            <input
              ref={inputRef}
              type="text"
              placeholder="Search for your building or area"
              value={searchInput}
              onChange={handleInputChange}
              style={{
                width: "100%",
                height: "36px",
                padding: "0 36px",
                borderRadius: "8px",
                border: "2px solid #D3D8DD",
                fontSize: "14px",
                outline: "none",
                zIndex: 1001,
              }}
            />
            {searchInput && (
              <FaTimes
                onClick={clearSearch}
                style={{
                  position: "absolute",
                  right: "12px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#6B7280",
                  cursor: "pointer",
                  fontSize: "14px",
                }}
              />
            )}
          </div>
        </div>
      </div>

      {/* Access Options */}
      <div className={locationStyles.subheading}>
        <p>HOW DO WE GET IN?</p>
      </div>
      <div className={locationStyles.options}>
        {["Someone is Home", "Doorman"].map((label) => (
          <button
            key={label}
            className={`${locationStyles.locbuttons} ${
              accessOption === label ? locationStyles.active : ""
            }`}
            onClick={() => setAccessOption(label)}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Pets */}
      <div className={locationStyles.subheading}>
        <p>ANY PETS?</p>
      </div>
      <div className={locationStyles.rowyesno}>
        {["Yes", "No"].map((label) => (
          <button
            key={label}
            className={`${locationStyles.yesnobuttons} ${
              answer === label ? locationStyles.active : ""
            }`}
            onClick={() => setAnswer(label)}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Notes */}
      <div className={locationStyles.box}>
        <textarea
          className={locationStyles.forminput}
          placeholder="What types of pets? Some of our cleaners have pet allergies."
          value={petDetails}
          onChange={(e) => setPetDetails(e.target.value)}
        />
        <div className={locationStyles.subheading}>
          <p>ADDITIONAL NOTES</p>
        </div>
        <textarea
          className={`${locationStyles.forminput} ${locationStyles.textbox}`}
          placeholder="I would like Sophie to be my cleaner. Please change my sheets and empty the dishwasher."
          value={additionalNotes}
          onChange={(e) => setAdditionalNotes(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Location;
