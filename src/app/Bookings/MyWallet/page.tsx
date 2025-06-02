'use client';

import HeaderBar from '@/components/navbar/HeaderBar';
import MyWallet from '@/components/Booking/myWallets';

export default function RequestPage() {
  return (
    <>
      <HeaderBar title="My Wallet" />
      <MyWallet />
    </>
  );
}