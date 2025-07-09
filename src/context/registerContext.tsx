'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import axios from 'axios';

interface RegisterData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
}

interface RegisterContextProps {
    registerUser: (userData: RegisterData) => Promise<any>;
    user: any;
}

const RegisterContext = createContext<RegisterContextProps | undefined>(undefined);
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const RegisterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user] = useState(null);

    const registerUser = async (userData: RegisterData) => {
        try {
            const response = await axios.post(`${apiUrl}/api/users/register`, {
                ...userData
            });
            console.log('User registered:', response.data);
            return response; 
        } catch (error: any) {
            const serverMessage =
                error?.response?.data?.error ||
                error?.response?.data?.message;
            // Throw only the server message or a generic fallback
            throw new Error(serverMessage || 'Registration failed. Please try again.');
        }
    };

    return (
        <RegisterContext.Provider value={{ registerUser, user }}>
            {children}
        </RegisterContext.Provider>
    );
};

export const useRegister = () => {
    const context = useContext(RegisterContext);
    if (!context) {
        throw new Error('useRegister must be used within a RegisterProvider');
    }
    return context;
};
