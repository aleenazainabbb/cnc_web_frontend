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

export const RegisterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user] = useState(null);

    const registerUser = async (userData: RegisterData) => {
        try {
            const response = await axios.post('http://192.168.18.11:3000/api/users/register', {
                ...userData
            });
            console.log('User registered:', response.data);
            return response;  // Return full response for status/message inspection
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
