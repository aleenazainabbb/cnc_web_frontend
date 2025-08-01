'use client';

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';

type SavedLocation = {
  id: number;
  label: string;
  placeId: string;
  formattedAddress: string;
  lat: number;
  lng: number;
};

type SaveLocationResponse = {
  message: string;
  type: 'success' | 'error';
};

type LocationContextType = {
  savedLocation: SavedLocation | null;
  savedLocations: SavedLocation[];
  saveLocation: (data: {
    label: string;
    placeId: string;
    formattedAddress: string;
    lat: number;
    lng: number;
  }) => Promise<SaveLocationResponse>;
  updateLocation: (
    id: number,
    data: {
      label: string;
      placeId: string;
      formattedAddress: string;
      lat: number;
      lng: number;
    }
  ) => Promise<SaveLocationResponse>;
  fetchSavedLocations: () => void;
  deleteLocation: (id: number) => Promise<SaveLocationResponse>;
};

const LocationContext = createContext<LocationContextType | null>(null);
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const LocationProvider = ({ children }: { children: ReactNode }) => {
  const [savedLocations, setSavedLocations] = useState<SavedLocation[]>([]);
  const [savedLocation, setSavedLocation] = useState<SavedLocation | null>(null);

  const saveLocation = async (data: {
    label: string;
    placeId: string;
    formattedAddress: string;
    lat: number;
    lng: number;
  }): Promise<SaveLocationResponse> => {
    try {
      const token = localStorage.getItem('token');
      if (!token) throw new Error('No token found');

      const res = await fetch(`${apiUrl}/location`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.message || 'Failed to save location');

      setSavedLocations((prev) => [...prev, result.location]);
      setSavedLocation(result.location);

      return {
        message: result.message || 'Location saved!',
        type: 'success',
      };
    } catch (err: any) {
      console.error('Save location failed:', err.message);
      return {
        message: err.message || 'Something went wrong.',
        type: 'error',
      };
    }
  };

  const updateLocation = async (
    id: number,
    data: {
      label: string;
      placeId: string;
      formattedAddress: string;
      lat: number;
      lng: number;
    }
  ): Promise<SaveLocationResponse> => {
    try {
      const token = localStorage.getItem('token');
      if (!token) throw new Error('No token found');

      const res = await fetch(`${apiUrl}/location/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.message || 'Failed to update location');

      setSavedLocations((prev) =>
        prev.map((loc) => (loc.id === id ? result.location : loc))
      );

      setSavedLocation(result.location);

      return {
        message: result.message || 'Location updated successfully',
        type: 'success',
      };
    } catch (err: any) {
      console.error('Update location failed:', err.message);
      return {
        message: err.message || 'Something went wrong.',
        type: 'error',
      };
    }
  };

  const fetchSavedLocations = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) return;

      const res = await fetch(`${apiUrl}/location/get`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const result = await res.json();
      if (res.ok && Array.isArray(result.locations)) {
        setSavedLocations(result.locations);
        if (result.locations.length > 0) {
          setSavedLocation(result.locations[0]);
        }
      }
    } catch (err: any) {
      console.error('Fetch saved locations failed:', err.message);
    }
  };

  const deleteLocation = async (id: number): Promise<SaveLocationResponse> => {
    try {
      const token = localStorage.getItem('token');
      if (!token) throw new Error('No token found');

      const res = await fetch(`${apiUrl}/location/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.message || 'Failed to delete location');

      setSavedLocations((prev) => prev.filter((loc) => loc.id !== id));

      if (savedLocation?.id === id) {
        setSavedLocation(null);
      }

      return {
        message: result.message || 'Location deleted!',
        type: 'success',
      };
    } catch (err: any) {
      console.error('Delete location failed:', err.message);
      return {
        message: err.message || 'Something went wrong.',
        type: 'error',
      };
    }
  };

  useEffect(() => {
    fetchSavedLocations();
  }, []);

  return (
    <LocationContext.Provider
      value={{
        savedLocation,
        savedLocations,
        saveLocation,
        updateLocation,
        fetchSavedLocations,
        deleteLocation,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => {
  const context = useContext(LocationContext);
  if (!context) throw new Error('useLocation must be used inside LocationProvider');
  return context;
};
