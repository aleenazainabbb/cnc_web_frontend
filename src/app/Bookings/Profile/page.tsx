'use client';

import HeaderBar from '@/components/navbar/HeaderBar';
import Profile from '@/components/Booking/profile';
import SavedLocation from '@/components/Booking/savedLocation';

export default function RequestPage() {
  return (
    <>
      <HeaderBar title="Profile" />
      <Profile />
      <SavedLocation />
    </>
  );
}
