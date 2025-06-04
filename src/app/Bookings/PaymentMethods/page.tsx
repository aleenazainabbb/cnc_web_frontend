'use client';

import HeaderBar from '@/components/navbar/HeaderBar';
import PaymentMethod from '@/components/Booking/paymentmethod';

export default function RequestPage() {
  return (
    <>
      <HeaderBar title="Payment Method" />
      <PaymentMethod />
    </>
  );
}