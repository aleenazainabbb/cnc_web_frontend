"use client"; // Client Component for form interactivity

import React, { useState, FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Newsletter subscription:", email);
    // Add API call here if needed
  };

  return (
    <footer className="footer_main text-white">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-4 col-md-4">
            <div className="subscribe_section position-relative">
              <h4 className="be-vietnam-pro-regular">
                Subscribe to our newsletter
              </h4>
              <form onSubmit={handleSubmit} className="newslatter_form">
                <div className="input-group position-relative">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="your@email.ru"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <i className="fa-solid fa-arrow-right"></i>
                </div>
              </form>
            </div>
            <div className="footer_logo my-5">
              <Image
                src="/images/footer-logo.png"
                alt="Footer Logo"
                className="img-fluid"
                width={150} // Adjust based on your image size
                height={50}
              />
            </div>
            <div className="footer_social_media align-items-center flex-wrap gap-3 d-none d-lg-flex d-md-flex">
              <div className="push_to_top">
                <a
                  href="#top"
                  className="d-flex align-items-center justify-content-center"
                >
                  <i className="fa-solid fa-arrow-up"></i>
                </a>
              </div>
              <div className="social_media_icons">
                <a
                  href="https://facebook.com"
                  className="d-flex align-items-center justify-content-center mb-2"
                >
                  <i className="fa-brands fa-square-facebook"></i>
                </a>
                <a
                  href="https://youtube.com"
                  className="d-flex align-items-center justify-content-center"
                >
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 offset-lg-1 offset-md-1 col-lg-7 col-md-7">
            <div className="row footer_right_section position-relative">
              <div className="col-12 col-lg-6 col-md-6 ps-lg-0 ps-md-0">
                <h5 className="text_green be-vietnam-pro-semibold pb-3">
                  HOME SERVICES
                </h5>
                <ul className="footer_links ps-4">
                  <li>
                    <Link href="/services/plumbing" className="text-white">
                      PLUMBING SERVICES
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/electrical" className="text-white">
                      ELECTRICAL SERVICES
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/handyman" className="text-white">
                      HANDYMAN SERVICES
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/grease-trap" className="text-white">
                      GREASE TRAP
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/duct-cleaning" className="text-white">
                      DUCT CLEANING
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/general-cleaning"
                      className="text-white"
                    >
                      GENERAL CLEANING
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-lg-6 col-md-6 mt-4 mt-lg-0 mt-md-0">
                <h5 className="text_green be-vietnam-pro-semibold pb-3">
                  QUICK LINKS
                </h5>
                <ul className="footer_links ps-4">
                  <li>
                    <Link href="/services/maid" className="text-white">
                      Maid Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/pest-control" className="text-white">
                      Pest Control
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/moving" className="text-white">
                      Local Moving
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/maintenance" className="text-white">
                      Maintenance Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/deep-cleaning" className="text-white">
                      Deep Cleaning
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy" className="text-white">
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-12 my-lg-5 my-md-5 my-3  ">
                <div className="footer_call_btn ">
                  <Link
                    href="/contact"
                    className="bg_green text-black text-[12px] about_btn mt-3 radius-6 rounded-[6px] be-vietnam-pro-semibold"
                  >
                    CALL ME BACK
                  </Link>
                </div>
              </div>
              <div className="col-md-4">
                <h6 className="be-vietnam-pro-regular">MOBILE</h6>
                <a
                  href="tel:+971525280307"
                  className="text-white be-vietnam-pro-regular footer_info"
                >
                  +(971) 52 528 0307
                </a>
              </div>
              <div className="col-md-4">
                <h6 className="be-vietnam-pro-regular">WHATSAPP</h6>
                <a
                  href="tel:+971525280307"
                  className="text-white be-vietnam-pro-regular footer_info"
                >
                  +(971) 52 528 0307
                </a>
              </div>
              <div className="col-md-4">
                <h6 className="be-vietnam-pro-regular">EMAIL</h6>
                <a
                  href="mailto:info@carencleanss.com"
                  className="text-white be-vietnam-pro-regular footer_info"
                >
                  info@carencleanss.com
                </a>
              </div>
            </div>
            <div className="mt-3">
              <h6 className="be-vietnam-pro-regular">ADDRESS</h6>
              <p className="text-white be-vietnam-pro-regular">
                DAMAC XL Tower
                <br />
                DAMAC XL Tower - Business Bay Dubai - United Arab Emirates
              </p>
            </div>
            <p className="mt-3 text-white be-vietnam-pro-regular">
              World-class cleaning services in Dubai and surrounding areas.
            </p>
            <div className="footer_social_media align-items-center justify-content-between gap-3 d-flex d-lg-none d-md-none">
              <div className="social_media_icons d-flex gap-3">
                <a
                  href="https://facebook.com"
                  className="d-flex align-items-center justify-content-center mb-2"
                >
                  <i className="fa-brands fa-square-facebook"></i>
                </a>
                <a
                  href="https://youtube.com"
                  className="d-flex align-items-center justify-content-center"
                >
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </div>
              <div className="push_to_top">
                <a
                  href="#top"
                  className="d-flex align-items-center justify-content-center"
                >
                  <i className="fa-solid fa-arrow-up"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
