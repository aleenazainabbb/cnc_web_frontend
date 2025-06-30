"use client";

import React, { useState, FormEvent } from "react";
import QuoteForm from "../request_page_component/QuoteForm"; 

interface BookYourServiceProps {
  title?: string;
  description?: string;
  defaultService?: string;
}

const NeedHelp: React.FC<BookYourServiceProps> = ({
  title = "Get Your Personalized Service Instantly!",
 description = `Care N Clean makes it easy to book exactly the cleaning service you need. No calls, no hassle. Whether it’s Cleaning, Maintenance, Moving or Pest Control services,
  simply select your service, fill in your contact details, and we’ll take care of the rest. You can customize your request by choosing the subservice, preferred time to reach you,
   and even include special instructions. Our workers are well trained and experienced. We give in-house training to keep our workers proficient.
    Comfort and reliability are just a form away. So book now and let Care N Clean handle it for you. Customer’s satisfaction and trust on our organization is very important to us. We 
    ensure the quality of work. As our logo says “your happiness, our pride”
`,
defaultService=""
}) => {
  const [formData, setFormData] = useState({
    cleaningType: defaultService,
    noOfStaff: "",
    time: "",
    date: "",
    noOfHours: "",
    coupon: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="container">
      <div className="row my-lg-5 my-md-5 my-3 pb-lg-5 pb-md-5 align-items-start">
        <div className="col-12 col-lg-6 col-md-6 mb-4 mb-md-0">
          <div className="service_details_content">
            <h2
              className="font-semibold leading-[120%] tracking-[0%] mt-2 mb-4 heading"
              style={{ fontFamily: "Be Vietnam Pro", fontSize: "33px" }}
            >
              {title}
            </h2>
            <p
              className="text-justify leading-[30px] tracking-normal"
              style={{
                fontFamily: "Be Vietnam Pro",
                fontSize: "20px",
                color: "#666666",
              }}
            >
              {description}
            </p>
          </div>
        </div>

        {/* Right Side: Form */}
       <div className="col-12 col-lg-6 col-md-6 ps-lg-5 ps-md-4">

          <QuoteForm/>

        </div>
      </div>
    </div>

  );
};

export default NeedHelp;
