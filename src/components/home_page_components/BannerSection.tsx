"use client";

import React, { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import LinkWithLoader from "@/components/Loader/Link";
import { useService } from "@/context/allservices";
import ButtonLoader from "@/components/Loader/buttonLoader";
import { useBooking } from "@/context/BookingContext";

const banners = [
  {
    tagline: "Affordable, reliable, and fast!",
    title: "Book Your Cleaning Services Instantly!",
    description:
      "Easily book your cleaning service by selecting your date, time, and service type. Let our professionals handle the rest for a spotless space!",
    image: "/images/banners/Hero.png",
    textColor: "#ffffff",
  },
  {
    tagline: "Affordable, reliable, and fast!",
    title: "Book Your Maintenance Services Instantly!",
    description:
      "Easily book professional maintenance services by selecting your preferred date, time, and requirements. Let our experts handle the rest!",
    image: "/images/banners/maintenance.png",
    textColor: "#ffffff",
  },
  {
    tagline: "Affordable, reliable, and fast!",
    title: "Book Your Moving Services Instantly!",
    description:
      "Schedule your moving service in minutes. Choose your time and date, and let our trained team manage your move quickly and safely.",
    image: "/images/banners/Moving.png",
    textColor: "black",
  },
  {
    tagline: "Affordable, reliable, and fast!",
    title: "Book Your Pest Control Services Instantly!",
    description:
      "Select your pest control needs and let certified technicians handle insects and rodents with care and precision—at your convenience.",
    image: "/images/banners/Termites.png",
    textColor: "black",
  },
  {
    tagline: "Plumbing help when you need it!",
    title: "Book your Plumbing Services Instantly!",
    description:
      "Get fast, trusted plumbing solutions from certified experts. Book now to resolve leaks, clogs, and installations without hassle.",
    image: "/images/banners/handyman.png",
    textColor: "black",
  },
  {
    tagline: "Power problems solved swiftly!",
    title: "Book your Electrical Services Instantly!",
    description:
      "Book licensed electricians for safe, reliable wiring, repairs, or installations. Available when you need them, with zero complications.",
    image: "/images/banners/Electrical.png",
    textColor: "#ffffff",
  },
  {
    tagline: "Say goodbye to pests today!",
    title: "Book your Cockroach Control Services!",
    description:
      "Book experienced pest control professionals to eliminate cockroaches safely and effectively—fast, clean, and guaranteed.",
    image: "/images/banners/Cockroach.png",
    textColor: "black",
  },
  {
    tagline: "Stay cool, stay comfortable!",
    title: "Book your AC Maintenance Services!",
    description:
      "Schedule AC servicing, repairs, or tune-ups with expert technicians. Quick bookings for reliable and lasting comfort.",
    image: "/images/banners/AC.png",
    textColor: "black",
  },
];

const BannerSection: React.FC = () => {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { updateBookingData } = useBooking();
  const [formData, setFormData] = useState({
    serviceId: "",
    subServiceId: "",
    time: "",
    date: "",
  });

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const { services, subServices, fetchSubServices, loading, error } = useService();

  const generateTimeOptions = () => {
    const times: string[] = [];
    for (let hour = 8; hour <= 18; hour++) {
      const ampm = hour < 12 ? "AM" : "PM";
      const displayHour = hour % 12 === 0 ? 12 : hour % 12;
      times.push(`${String(displayHour).padStart(2, "0")}:00 ${ampm}`);
    }
    return times;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //  Validate all fields
    if (!formData.serviceId) {
      alert("Please select a Service.");
      return;
    }
    if (!formData.subServiceId) {
      alert("Please select a Sub-Service.");
      return;
    }
    if (!formData.time) {
      alert("Please select a Time.");
      return;
    }
    if (!formData.date) {
      alert("Please select a Date.");
      return;
    }

    // Get selected service and subservice objects
    const selectedService = services.find((s) => s.id === Number(formData.serviceId));
    const selectedSubService = subServices.find((sub) => sub.id === Number(formData.subServiceId));

    if (!selectedService || !selectedSubService) {
      alert("Invalid selection. Please try again.");
      return;
    }
    setIsSubmitting(true); // ✅ START LOADER

    //  Build URL with names (not IDs)
    const queryParams = new URLSearchParams({
      service: selectedService.name,
      subService: selectedSubService.name,
      time: formData.time,
      date: formData.date,
    }).toString();

     // small timeout to allow loader to render
  setTimeout(() => {
    router.push(`/BookAservicePage?${queryParams}`);
  }, 100); // 100ms is enough
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 400,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
    arrows: false,
    beforeChange: (_: any, next: number) => setActiveIndex(next),

  };

  return (
    <form onSubmit={handleSubmit}>
      <div
        className="banner_img d-flex align-items-center position-relative"
        style={{
          backgroundImage: `url(${banners[activeIndex].image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container position-relative">
          <div className="row align-items-center">
            {/* Left Sliding Banner Content */}
            <div className="col-12 col-lg-6">
              <Slider {...sliderSettings}>
                {banners.map((banner, idx) => (
                  <div key={idx}>
                    <div className="banner_content">
                      <p
                        className="be-vietnam-pro-regular"
                        style={{ fontSize: "20px", color: banner.textColor }}
                      >
                        {banner.tagline}
                      </p>
                      <h1
                        className="be-vietnam-pro-bold my-3"
                        style={{ fontSize: "33px", color: banner.textColor }}
                      >
                        {banner.title}
                      </h1>
                      <p
                        className="be-vietnam-pro-regular"
                        style={{ fontSize: "20px", color: banner.textColor }}
                      >
                        {banner.description}
                      </p>

                      <LinkWithLoader
                        href="/services"
                        className="be-vietnam-pro-bold service_banner_btn d-inline-block mt-2 mb-2"
                        style={{ color: banner.textColor }}
                      >
                        View all Services
                      </LinkWithLoader>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>

            {/* Right Form */}
            <div className="col-12 col-lg-6 col-md-6">
              <div className="booking-form bg_green rounded mt-4 mt-lg-0 mt-md-0">
                <div className="row custom_gutter poppins text-[14px]">

                  {/* Service */}
                  <div className="col-md-6">
                    <select
                      name="serviceId"
                      className="form-select"
                      value={formData.serviceId}
                      onChange={(e) => {
                        handleChange(e);
                        fetchSubServices(Number(e.target.value)); // fetch subservices dynamically
                        setFormData(prev => ({ ...prev, subServiceId: "" })); // reset subservice
                      }}
                    >
                      <option value="" disabled>
                        Choose Service
                      </option>
                      {services.map((service) => (
                        <option key={service.id} value={service.id}>
                          {service.name}
                        </option>
                      ))}

                    </select>
                  </div>

                  {/* Sub-Service  */}
                  <div className="col-md-6">
                    <select
                      name="subServiceId"
                      className="form-select"
                      value={formData.subServiceId}
                      onChange={handleChange}
                      disabled={!formData.serviceId} // disable until a service is selected
                    >
                      <option value="" disabled>
                        Choose Sub-Service
                      </option>
                      {subServices.map((sub) => (
                        <option key={sub.id} value={sub.id}>
                          {sub.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Time Picker */}
                  <div className="col-md-6">
                    <select
                      name="time"
                      className="form-select"
                      value={formData.time}
                      onChange={handleChange}
                    >
                      <option value="" disabled>
                        Choose Time
                      </option>
                      {generateTimeOptions().map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Date Picker */}
                  <div className="col-md-6">
                    <div className="position-relative">
                      <DatePicker
                        selected={selectedDate}
                        onChange={(date: Date | null) => {
                          setSelectedDate(date);
                          setFormData((prev) => ({
                            ...prev,
                            date: date
                              ? date.toISOString().split("T")[0]
                              : "",
                          }));
                        }}
                        placeholderText="Choose Date"
                        dateFormat="dd MMMM yyyy"
                        className="form-select"
                        calendarClassName="custom-calendar"
                        popperPlacement="bottom"
                        wrapperClassName="date-picker-wrapper"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="col-12 mt-4">

                    {/* Submit Button */}
                    <div className="col-12 mt-2">
                      <ButtonLoader
                        type="submit"
                        isLoading={isSubmitting}
                        disabled={
                          !formData.serviceId || !formData.subServiceId || !formData.time || !selectedDate
                        }
                        className="be-vietnam-pro-semibold btn banner-booking-btn text-white"
                      >
                        Book A Service
                      </ButtonLoader>

                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Icon */}
        <div className="round-icon d-flex align-items-center justify-content-center text-white position-absolute bg_green mb-2">
          <i className="fa-regular fa-comment-dots "></i>
        </div>
      </div>
    </form >
  );
};

export default BannerSection;
