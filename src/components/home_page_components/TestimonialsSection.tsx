"use client"; // Client Component for slider

import React from "react";
import Image from "next/image";
import Slider from "react-slick";

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      text: "We've been using their services for over a year now, and we're consistently impressed with the attention to detail and the friendly, professional team. Our home has never been cleaner.",
      author: "Randy Septimus",
      img: "/images/TestimonialSection/1.png",
    },
    {
      text: "These guys have been a lifesaver for our busy office. Their reliability and trustworthiness in maintaining a clean workspace are unparalleled. Highly recommended.",
      author: "Dulce Passaquindici Arcand",
      img: "/images/TestimonialSection/2.png",
    },
    {
      text: "The deep cleaning they did before our family reunion was exceptional. They went above and beyond our expectations, leaving our home spotless and ready to welcome guests.",
      author: "Cooper Septimus",
      img: "/images/TestimonialSection/3.png",
    },
    {
      
      text: "We love the customized cleaning package they offer. It's great to choose the specific services we need, and the team always delivers a thorough and detailed cleaning. Couldn't be happier!",
      author: "Randy Septimus",
      img: "/images/about-us.jpg",
    },
    // {
    //   text: "We've been using their services for over a year now, and we're consistently impressed with the attention to detail and the friendly, professional team. Our home has never been cleaner.",
    //   author: "Randy Septimus",
    //   img: "/images/about-us.jpg",
    // },
  ];

  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="container lg-4 pt-md-4 w-[1180px] h-[448px]" >
      <div className="row">
        <div className="testimonials_head w-75 m-auto text-center">
          <h2 className="be-vietnam-pro-medium-custom mt-4">
            Hear What Our Satisfied Customers
             Have to Say
          </h2>
        </div>
        <div className="slider-container">
          <Slider {...settings} className="testimonials_slider">
            {testimonials.map((testimonial, index) => (
              <div key={index}>
                <div className="testimonials_card text-center">
                  <Image
                    src={testimonial.img}
                    alt="Service Image"
                    className="img-fluid-testimonial"
                    width={150} 
                    height={150}
                  />
                  <p className="be-vietnam-pro-regular text-muted my-3">
                    {testimonial.text}
                  </p>
                  <p className="be-vietnam-pro-bold">{testimonial.author}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
