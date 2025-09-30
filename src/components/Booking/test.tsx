"use client";
import React, { useState, useRef, useEffect } from "react";

const suggestionsMock = [
  "Downtown",
  "Business Bay",
  "Dubai Marina",
  "Jumeirah",
];

export default function SearchWithDropdown() {
  const [query, setQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim() === "") {
      setShowSuggestions(false);
      return;
    }

    // Filter your suggestions
    const filtered = suggestionsMock.filter((s) =>
      s.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredSuggestions(filtered);
    setShowSuggestions(true);
  };

  const handleSelect = (value: string) => {
    setQuery(value);
    setShowSuggestions(false);
  };

  return (
    <div
      ref={wrapperRef}
      style={{
        position: "relative",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <input
        type="text"
        value={query}
        onChange={handleChange}
        onFocus={() => query && setShowSuggestions(true)}
        placeholder="Search for location"
        style={{
          width: "100%",
          padding: "12px",
          borderRadius: "6px",
          border: "1px solid #ccc",
          fontSize: "16px",
        }}
      />

      {showSuggestions && filteredSuggestions.length > 0 && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            backgroundColor: "white",
            border: "1px solid #ccc",
            borderTop: "none",
            borderRadius: "0 0 6px 6px",
            zIndex: 1000,
            maxHeight: "200px",
            overflowY: "auto",
          }}
        >
          {filteredSuggestions.map((item, index) => (
            <div
              key={index}
              onClick={() => handleSelect(item)}
              style={{
                padding: "10px 12px",
                cursor: "pointer",
                borderBottom:
                  index < filteredSuggestions.length - 1
                    ? "1px solid #eee"
                    : "none",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
