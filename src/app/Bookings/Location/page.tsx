'use client';

import HeaderBar from '@/components/navbar/HeaderBar';
import SavedLocation from '@/components/Booking/savedLocation';

export default function RequestPage() {
  return (
    <>
      <HeaderBar title="Saved Locations" />
      <SavedLocation />
    </>
  );
}