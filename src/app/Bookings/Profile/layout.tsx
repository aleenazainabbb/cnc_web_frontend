"use client";

import React from "react";
import HeaderBar from '@/components/navbar/HeaderBar';

const ProfileLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    
    <div className="flex flex-col gap-20 p-6">
      <HeaderBar title="Profile" />
      <main className="flex-1 bg-white p-6 rounded-xl shadow">{children}</main>
      
    </div>
  );
};

export default ProfileLayout; 
