// context/AuthContext.tsx
'use client';

import React, { createContext, useState, useContext } from 'react';

interface AuthContextType {
  loginUser: (email: string, password: string) => Promise<void>;
  user: any;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState(null);

 const loginUser = async (email: string, password: string) => {
  const response = await fetch('http://192.168.18.11:3000/api/users/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Invalid credentials');
  }

  setUser(data.user);
  localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(data.user));
    const storedUser = localStorage.getItem('user');
    const storedtoken = localStorage.getItem('token');
console.log('Stored user:', storedUser);
console.log('Stored token:', storedtoken);
};


  return (
    <AuthContext.Provider value={{ loginUser, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};
