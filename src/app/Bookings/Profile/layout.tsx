"use client";

import React from "react";
import SavedLocation from "@/components/Booking/savedLocation";
import Profile from "@/components/Booking/profile";
import HeaderBar from "@/components/navbar/HeaderBar";

const ProfileLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="flex flex-col gap-6 p-6">
      <HeaderBar title="Profile" />

      <Profile />

      {/* ✅ Profile Content (whatever page content comes as children) */}
      <main className="flex-1 bg-white p-6 rounded-xl shadow">{children}</main>

      {/* ✅ Saved Location comes directly under profile content */}
      <SavedLocation />
    </div>
  );
};

export default ProfileLayout;
