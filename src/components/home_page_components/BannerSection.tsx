"use client";

import React, { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import LinkWithLoader from "@/components/Loader/Link";

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

  const [formData, setFormData] = useState({
    cleaningType: "",
    noOfStaff: "",
    time: "",
    date: "",
    noOfHours: "",
    coupon: "",
  });

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

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
    console.log("Form submitted:", formData);
    router.push("/BookAservicePage");
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
                  {/* Service Selection */}
                  <div className="col-md-6">
                    <select
                      name="cleaningType"
                      className="form-select"
                      value={formData.cleaningType}
                      onChange={handleChange}
                    >
                      <option value="" disabled>
                        Choose Service
                      </option>
                      <option value="Cleaning">Cleaning</option>
                      <option value="Plumbing">Plumbing</option>
                      <option value="Electrician">Electrician</option>
                    </select>
                  </div>

                  {/* Staff Selection */}
                  <div className="col-md-6">
                    <select
                      name="noOfStaff"
                      className="form-select"
                      value={formData.noOfStaff}
                      onChange={handleChange}
                    >
                      <option value="" disabled>
                        No of Staff
                      </option>
                      {[1, 2, 3, 4, 5].map((n) => (
                        <option key={n} value={n}>
                          {n}
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
                      />
                    </div>
                  </div>

                  {/* Hours Selection */}
                  <div className="col-md-6">
                    <select
                      name="noOfHours"
                      className="form-select"
                      value={formData.noOfHours}
                      onChange={handleChange}
                    >
                      <option value="" disabled>
                        No of Hour
                      </option>
                      {Array.from({ length: 12 }, (_, i) => i + 1).map(
                        (hour) => (
                          <option key={hour} value={hour}>
                            {hour}
                          </option>
                        )
                      )}
                    </select>
                  </div>

                  {/* Coupon Field */}
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="coupon"
                      className="form-control"
                      placeholder="Enter Coupon*"
                      value={formData.coupon}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="col-12 mt-4">
                    <LinkWithLoader href="/BookAservicePage">
                      <button
                        type="submit"
                        className="be-vietnam-pro-semibold btn banner-booking-btn text-white"
                      >
                        Book A Service
                      </button>
                    </LinkWithLoader>
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
