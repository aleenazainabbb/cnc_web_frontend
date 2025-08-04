'use client';

import HeaderBar from '@/components/navbar/HeaderBar';
import PaymentMethod from '@/components/Booking/payment/paymentmethod';

export default function RequestPage() {
  return (
    <>
      <HeaderBar title="Payment Methods" />
      <PaymentMethod />
    </>
  );
}