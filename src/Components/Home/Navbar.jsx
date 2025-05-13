import React from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const Navbar = () => {
    return (
        <div className="top-[63px] left-0 right-0 bg-white shadow-md z-50 md:px-4">
            <div className="mx-auto max-w-[1440px] h-[72px] flex items-center justify-between px-4 sm:px-6 lg:px-8">

                {/* Logo */}
                <div className="text-xl font-bold text-gray-800">
                    <img src="/public/logo.svg" alt="Logo" className="flex w-[73px] h-[57px] top-[7px] left-[46px]" />
                </div>

                {/* Navigation Links */}
                <div className="flex space-x-6 relative">
                    {/* HOME */}
                    <div className="group relative font-[700] text-[14px] leading-[100%] tracking-[0] text-[#36B864] font-[Be_Vietnam_Pro]">
                        <a className="cursor-pointer px-4 py-2 rounded-md  "
                        >HOME</a>
                    </div>

                    {/* MAINTENANCE SERVICES */}

                    <div className="group relative">
                        <a href="#" className="flex items-center text-gray-700 hover:text-green-600 cursor-pointer font-[Be_Vietnam_Pro] font-[400] text-[14px] leading-[100%] tracking-[0] text-[#4D4D4D]">
                            MAINTENANCE SERVICES
                            <ChevronDownIcon className="ml-1 w-4 h-4" />
                        </a>
                        <div className="absolute top-[72px] left-0 bg-white shadow-md w-[200px] rounded-md p-4 hidden group-hover:block z-40">
                            <a href="#" className="block text-gray-700 hover:text-blue-600 mb-2">Cleaning</a>
                            <a href="#" className="block text-gray-700 hover:text-blue-600 mb-2">Landscaping</a>
                            <a href="#" className="block text-gray-700 hover:text-blue-600 mb-2">Repairs</a>
                        </div>
                    </div>
                    {/* CLEANING SERVICES */}
                    <div className="group relative">
                        <a href="#" className="flex items-center text-gray-700 hover:text-green-600 cursor-pointer font-[Be_Vietnam_Pro] font-[400] text-[14px] leading-[100%] tracking-[0] text-[#4D4D4D]">
                            CLEANING SERVICES
                            <ChevronDownIcon className="ml-1 w-4 h-4" />
                        </a>
                        <div className="absolute top-[72px] left-0 bg-white shadow-md w-[200px] rounded-md p-4 hidden group-hover:block z-40">
                            <a href="#" className="block text-gray-700 hover:text-blue-600 mb-2">Residential Cleaning</a>
                            <a href="#" className="block text-gray-700 hover:text-blue-600 mb-2">Commercial Cleaning</a>
                            <a href="#" className="block text-gray-700 hover:text-blue-600">Deep Cleaning</a>
                        </div>
                    </div>

                    {/* MOVING SERVICES */}
                    <div className="group relative">
                        <a href="#" className="flex items-center text-gray-700 hover:text-green-600 cursor-pointer  font-[Be_Vietnam_Pro] font-[400] text-[14px] leading-[100%] tracking-[0] text-[#4D4D4D]">
                            MOVING SERVICES
                            <ChevronDownIcon className="ml-1 w-4 h-4" />
                        </a>
                        <div className="absolute top-[72px] left-0 bg-white shadow-md w-[200px] rounded-md p-4 hidden group-hover:block z-40">
                            <a href="#" className="block text-gray-700 hover:text-blue-600 mb-2">Residential Moving</a>
                            <a href="#" className="block text-gray-700 hover:text-blue-600 mb-2">Commercial Moving</a>
                            <a href="#" className="block text-gray-700 hover:text-blue-600 mb-2">Packing Services</a>
                        </div>
                    </div>

                    {/* PEST CONTROL */}
                    <div className="group relative">
                        <a href="#" className="flex items-center text-gray-700 hover:text-green-600 cursor-pointer  font-[Be_Vietnam_Pro] font-[400] text-[14px] leading-[100%] tracking-[0] text-[#4D4D4D]">
                            PEST CONTROL
                            <ChevronDownIcon className="ml-1 w-4 h-4" />
                        </a>
                        <div className="absolute top-[72px] left-0 bg-white shadow-md w-[200px] rounded-md p-4 hidden group-hover:block z-40">
                            <a href="#" className="block text-gray-700 hover:text-blue-600 mb-2">Residential Pest Control</a>
                            <a href="#" className="block text-gray-700 hover:text-blue-600 mb-2">Commercial Pest Control</a>
                            <a href="#" className="block text-gray-700 hover:text-blue-600 mb-2">Eco-Friendly Solutions</a>
                        </div>
                    </div>

                    {/* DISINFECTION SERVICE */}
                    <div className="group relative">
                        <a href="#" className="flex items-center text-gray-700 hover:text-green-600 cursor-pointer  font-[Be_Vietnam_Pro] font-[400] text-[14px] leading-[100%] tracking-[0] text-[#4D4D4D]">
                            DISINFECTION SERVICE
                            <ChevronDownIcon className="ml-1 w-4 h-4" />
                        </a>
                        <div className="absolute top-[72px] left-0 bg-white shadow-md w-[200px] rounded-md p-4 hidden group-hover:block z-40">
                            <a href="#" className="block text-gray-700 hover:text-blue-600 mb-2">Residential Disinfection</a>
                            <a href="#" className="block text-gray-700 hover:text-blue-600 mb-2">Commercial Disinfection</a>
                            <a href="#" className="block text-gray-700 hover:text-blue-600 mb-2">COVID-19 Disinfection</a>
                        </div>
                    </div>
                </div>

                {/* Right Side Button */}
                <button className="w-[159px] h-[48px] bg-[#36B864] text-white rounded-[6px] font-[500] text-[16px] leading-[100%] tracking-[0] font-poppins">
                    Get a quote
                </button>
            </div>
        </div>
    );
};

export default Navbar;
