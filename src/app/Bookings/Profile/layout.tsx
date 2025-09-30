"use client";

import React from "react";

const ProfileLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="flex flex-col gap-20 p-6">
      <main className="flex-1 bg-white p-6 rounded-xl shadow">{children}</main>
    </div>
  );
};

export default ProfileLayout; 
