
'use client';

import React from 'react';
import confirm from './styles/BookingConfirmation.module.css';
import { useRouter } from 'next/navigation';

const BookingConfirmation: React.FC = () => {
  const router = useRouter();
  const goToHome = () => {
    router.push('/'); // Navigate to home page
  };
  return (

    <div className={confirm.container}>
      <div className={confirm.main} >

        {/* Go to Home link */}
        <div className={confirm.home} onClick={goToHome} > Go to Home</div>

        {/* heading */}
        <h2 className={confirm.titletext}> Order Booked</h2>
        <p className={confirm.paragraph}>Your payment has been successfully done.</p>
        <p className={confirm.content}>Ref No :
          <span style={{ color: "#36B864" }}>
            1256646566544111200
          </span>
        </p>

        {/* line */}
        <hr className={confirm.line} />

        {/* date and time */}
        <div className={confirm.content} >
          <div style={{ display: 'flex' }}>
            <div style={{ width: "108px" }}>
              <p>Every 2 weeks</p>
            </div>

            <p style={{ color: "#36B864" }}>
              Tuesday, July17, 2018 at 2.30pm
            </p>
          </div>

          <p>114 Broadway Newyork, NY 10005</p>

        </div>

        {/* line */}
        <hr className={confirm.line} />

        {/* payment calculation */}

        <p className={confirm.paragraph}>Total Payment</p>
        <h2 className={confirm.titletext}> AED 610</h2>

        <div className={confirm.content}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p >
                Appointment Value <span style={{ color: "#36B864" }}>- Details</span>
              </p>
              <p>125.99</p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p style={{ margin: 0 }}>
                Discounts <span style={{ color: "#36B864" }}>- Details</span>
              </p>
              <p >15.89</p>
            </div>

          </div>

          {/* line */}
          <hr className={confirm.line} style={{ width: "100%" }} />

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <p style={{ color: "#88939D" }}>Subtotal</p>
            <p style={{ color: "black" }}>110.01</p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <p style={{ color: "#88939D" }}>Tax</p>
            <p style={{ color: "black" }}>5.20</p>
          </div>

          <hr className={confirm.line}style={{ width: "100%" }} />

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <p >Total</p>
            <p style={{ fontWeight: 700 }}>610.00</p>
          </div>
        </div>
      </div>
    </div >
  );
}
export default BookingConfirmation;