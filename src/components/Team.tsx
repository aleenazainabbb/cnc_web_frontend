"use client";

import React, { useEffect, useRef } from "react";

// Team members data
const teamMembers = [
    {
        name: "John con",
        role: "CEO & Founder",
        image: "/images/team/1.png",
    },
    {
        name: "Sarah Lee",
        role: "Marketing Head",
        image: "/images/team/2.png",
    },
    {
        name: "John Doe",
        role: "Operations Manager",
        image: "/images/team/3.png",
    },
    {
        name: "Emily Clark",
        role: "Design Lead",
        image: "/images/team/2.png",
    },
    {
        name: "Michael Smith",
        role: "Tech Lead",
        image: "/images/team/1.png",
    },
];

const Team: React.FC = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    // Auto-scroll logic
    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        const interval = setInterval(() => {
            if (
                scrollContainer.scrollLeft + scrollContainer.offsetWidth >=
                scrollContainer.scrollWidth
            ) {
                scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
            } else {
                scrollContainer.scrollBy({ left: 1, behavior: "smooth" });
            }
        }, 10); // Adjust scroll speed (lower = faster)

        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{ height: "auto", overflowY: "hidden" }}>
            <div className="container">
                <div className="row my-lg-5 my-md-5 my-3 pb-lg-5 pb-md-5 text-center">
                    <div className="col-12">
                        <p style={{ fontSize: "36px", color: "#36B864" }}>~ Team Member ~</p>
                        <p
                            className="font-semibold text-[44px] leading-[120%] tracking-[0%] mt-2 mb-4 ourdeepClean-heading heading"
                            style={{ fontFamily: "Be Vietnam Pro", fontWeight: "600" }}
                        >
                            Our team member is ready to help our clients!
                        </p>
                        <p
                            className="text-justify leading-[30px] tracking-normal mb-4"
                            style={{
                                fontFamily: "Be Vietnam Pro",
                                fontSize: "20px",
                                color: "#8B909A",
                            }}
                        >
                            We love what we do and we do it with passion. We value the
                            experimentation of the message and smart incentives.
                        </p>
                    </div>

                    {/* Scrollable Team Members */}
                    <div
                        className="col-12 team-scroll-container"
                        ref={scrollRef}
                        style={{
                            overflowX: "auto",
                            overflowY: "hidden",
                            WebkitOverflowScrolling: "touch",
                            // scrollbarWidth: "none",
                            // msOverflowStyle: "none",
                        }}
                    >
                        <div
                            className="d-flex team-scroll-inner"
                            style={{
                                gap: "20px",
                                paddingBottom: "10px",
                                // overflowY: "hidden",
                            }}
                        >
                            {teamMembers.map((member, index) => (
                                <div
                                    key={index}
                                    className="team-card"
                                    style={{
                                        flex: "0 0 auto",
                                        overflowY: "hidden",
                                    }}
                                >
                                    <div
                                        className="w-100 position-relative mx-auto"
                                        style={{
                                            aspectRatio: "409.16 / 527.81",
                                            overflow: "hidden",
                                        }}
                                    >
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            style={{
                                                width: "100%",
                                                objectFit: "cover",
                                                objectPosition: "center",
                                                display: "block",
                                            }}
                                        />
                                        {/* Info Box */}
                                        <div
                                            style={{
                                                width: "80%",
                                                maxWidth: "90%",
                                                backgroundColor: "white",
                                                fontFamily: "Mont",
                                                display: "flex",
                                                flexDirection: "column",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                position: "absolute",
                                                top: "80%", // Relative position instead of fixed px
                                                left: "50%",
                                                transform: "translateX(-50%)",
                                                textAlign: "center",
                                                padding: "0.5em",
                                                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.15)",
                                                borderTop: "10px solid #36B864",
                                                borderRadius: "4px",
                                                maxHeight: "120px",
                                            }}
                                        >

                                            <p
                                                style={{
                                                    fontSize: "clamp(20px, 2.5vw, 24px)",
                                                    fontWeight: "800",
                                                    margin: 0,
                                                    lineHeight: 1.2,
                                                }}
                                            >
                                                {member.name}
                                                <br />
                                                <span
                                                    style={{
                                                        fontSize: "clamp(16px, 2vw, 18px)",
                                                        fontWeight: "600",
                                                    }}
                                                >
                                                    {member.role}
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Scrollbar & Responsive Styling */}
            <style jsx>{`
  /* Hides scrollbar across all browsers */
  .team-scroll-container::-webkit-scrollbar {
    display: none; /* Chrome, Safari */
  }

  .team-scroll-container {
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE and Edge */
  }

  .team-card {
    width: 100%;
    overflow-y: hidden;
  }

  @media (min-width: 1200px) {
    .team-card {
      width: calc((100% - 40px) / 3); /* 3 cards with gap */
    }
  }

  @media (min-width: 768px) and (max-width: 1199px) {
    .team-card {
      width: calc((100% - 20px) / 2); /* 2 cards with gap */
    }
  }

  @media (max-width: 767px) {
    .team-card {
      width: 100%;
    }
  }
`}</style>

        </div>
    );
};

export default Team;
