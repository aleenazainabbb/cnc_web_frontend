import React from "react";
import { CheckCircle } from "lucide-react";

export default function OrderPopup() {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="relative w-[574.56px] h-[713px] bg-white rounded-t-[20px] pt-[70px] px-6 pb-10 shadow-lg flex flex-col items-center justify-start font-[Poppins]">
        {/* Circle icon */}
        <div className="absolute top-[-46.63px] left-[239.82px] w-[93.26px] h-[93.26px] bg-green-500 rounded-full flex items-center justify-center border-4 border-white">
          <CheckCircle size={50} color="white" />
        </div>

        {/* Go to Home */}
        <div className="absolute top-4 right-6 text-green-600 cursor-pointer underline font-[Poppins] font-semibold text-[16px] leading-[25.6px]">
          Go to Home
        </div>

        {/* Title */}
        <div className="text-center mt-2">
          <h2 className="font-[Poppins] font-semibold text-[25px] leading-[25.6px] text-[#1E1E1E]">Order Booked</h2>
          <p className="font-[Poppins] font-normal text-[14px] leading-[4.6px] text-[#1E1E1E] mt-2">
            Your payment has been successfully done.
          </p>
        </div>

        {/* Ref number and Date */}
        <div className="mt-8 text-center text-sm text-[#1E1E1E]">
          <p>
            <strong>Ref No :</strong> 125664656654111200
          </p>
          <p className="text-green-600 font-medium mt-1">
            Tuesday, July17, 2018 at 2.30pm
          </p>
          <p className="mt-1">114 Broadway Newyork, NY 10005</p>
        </div>

        {/* Payment Section */}
        <div className="mt-10">
          <h3 className="text-center text-lg font-semibold text-[#1E1E1E]">Total Payment</h3>
          <p className="text-center text-2xl font-bold text-green-600 mt-1">AED 610</p>
        </div>

        {/* Payment breakdown */}
        <div className="mt-6 space-y-3 text-sm px-4 text-[#1E1E1E]">
          <div className="flex justify-between">
            <span>Appointment Value - <span className="text-green-600">Details</span></span>
            <span>125.99</span>
          </div>
          <div className="flex justify-between">
            <span>Discounts - <span className="text-green-600">Details</span></span>
            <span>15.89</span>
          </div>
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>110.01</span>
          </div>
          <div className="flex justify-between">
            <span>Tax</span>
            <span>5.20</span>
          </div>
          <hr className="border-gray-300 my-2" />
          <div className="flex justify-between font-bold">
            <span>Total</span>
            <span>610.00</span>
          </div>
        </div>

        {/* Get PDF Receipt button */}
        <div className="mt-10 flex justify-center">
          <button
            className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold shadow-md"
          >
            Get PDF Receipt
          </button>
        </div>

        {/* Zigzag bottom border */}
        <div className="absolute bottom-[-10px] left-0 w-full overflow-hidden">
          <svg
            viewBox="0 0 600 20"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="w-full h-[20px]"
          >
            <path
              d="M0 10 Q 10 0, 20 10 T 40 10 T 60 10 T 80 10 T 100 10 T 120 10 T 140 10 T 160 10 T 180 10 T 200 10 T 220 10 T 240 10 T 260 10 T 280 10 T 300 10 T 320 10 T 340 10 T 360 10 T 380 10 T 400 10 T 420 10 T 440 10 T 460 10 T 480 10 T 500 10 T 520 10 T 540 10 T 560 10 T 580 10 T 600 10 V20 H0 Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
