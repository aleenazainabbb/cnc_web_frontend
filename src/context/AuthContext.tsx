'use client';

import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from 'react';

// Define the user interface
interface User {
  name: string;
  email: string;
}

// Define the context type
interface AuthContextType {
  loginUser: (email: string, password: string) => Promise<void>;
  logoutUser: () => void;
  user: User | null;
  loading: boolean; // ✅ NEW
}

// Create the context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Provider component
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const [loading, setLoading] = useState(true); // ✅ NEW
  console.log("API URL:", apiUrl);

  // Restore session from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  //   else {
  //   // :white_check_mark: DEV ONLY: Set a dummy user
  //   const dummyUser = { name: "Test User", email: "test@example.com" ,token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJoYXNzYW50YWxoYTgwN0BnbWFpbC5jb20iLCJyb2xlIjoidXNlciIsImlhdCI6MTc1NDAyOTg0MCwiZXhwIjoxNzU0NjM0NjQwfQ.DAsquqRTGTnwNV7EU2JxM1c10sBh7FkFObre8i8fgI0"};
  //   setUser(dummyUser);
  //   localStorage.setItem('user', JSON.stringify(dummyUser));
  // }
    setLoading(false); // ✅ SET loading to false AFTER checking localStorage
  }, []);

  // Login function
  const loginUser = async (email: string, password: string) => {
    const response = await fetch(`${apiUrl}/api/users/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Login failed');
    }

    setUser(data.user);
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(data.user));
    console.log('Stored user:', data.user);
    console.log('Stored token:', data.token);
    window.dispatchEvent(new Event('storage'));

  };
  const logoutUser = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  localStorage.clear();
  window.location.href = '/Login'; // Or use router.push if you're using Next Router
};

  return (
    <AuthContext.Provider value={{ loginUser, logoutUser, user ,loading }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
