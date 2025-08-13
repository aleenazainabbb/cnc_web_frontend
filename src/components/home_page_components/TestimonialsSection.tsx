"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";

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
    {
      text: "We've been using their services for over a year now, and we're consistently impressed with the attention to detail and the friendly, professional team. Our home has never been cleaner.",
      author: "Randy Septimus",
      img: "/images/about-us.jpg",
    },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);
  let currentIndex = 0;

  useEffect(() => {
    const container = scrollRef.current;
    if (!container || testimonials.length <= 3) return;

    const interval = setInterval(() => {
      const cardWidth = container.scrollWidth / testimonials.length;
      currentIndex = (currentIndex + 1) % testimonials.length;
      container.scrollTo({
        left: cardWidth * currentIndex,
        behavior: "smooth",
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container lg-4 pt-md-4 w-[1180px] h-[448px]">
      <div className="row">
        <div className="testimonials_head w-75 m-auto text-center">
          <h2 className="customersReview be-vietnam-pro-medium-custom mt-4">
            Hear What Our Satisfied Customers Have to Say
          </h2>
        </div>
        <div
          className="testimonials_slider flex overflow-x-auto gap-4 px-2"
          ref={scrollRef}
          style={{
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {testimonials.map((testimonial, index) => (
            // <div
            //   key={index}
            //   className="flex-shrink-0 testimonials_card text-center"
            //   style={{
            //     width: "32.3333%",
            //     scrollSnapAlign: "start",
            //   }}
            // >
            <div
              key={index}
              className="flex-shrink-0 testimonials_card text-center"
            >
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
          ))}
        </div>


        <style jsx>{`
      .testimonials_slider::-webkit-scrollbar {
        display: none;
      }

      .testimonials_slider {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
    `}</style><style jsx>{`
  .testimonials_slider::-webkit-scrollbar {
    display: none;
  }

  .testimonials_slider {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  .testimonials_card {
    width: 32.3333%;
    scroll-snap-align: start;
  }

  @media (max-width: 1024px) {
    .testimonials_card {
      width: 48%;
    }
  }

  @media (max-width: 640px) {
    .testimonials_card {
      width: 100%;
      text-align: center;
      align-items: center;
    }
  }
`}</style>

      </div>
    </div>
  );
};

export default TestimonialsSection;
