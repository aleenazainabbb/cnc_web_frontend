"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const BestDeepClean: React.FC = () => {
    return (
        <div className="container">
            <div className="row my-lg-5 my-md-5 my-3 pb-lg-5 pb-md-5">
                {/* Text Content */}
                <div className="col-12 col-lg-6 col-md-6">
                    <div className="service_details_content">
                        <h2
                            className="font-semibold leading-[120%] tracking-[0%] mt-2 mb-4"
                            style={{ fontFamily: "Be Vietnam Pro", fontSize: "44px" }}
                        >
                            Best Deep Cleaning Service in UAE from Care N Clean
                        </h2>
                        <p className=" text-justify leading-[30px] tracking-normal" style={{ fontFamily: "Be Vietnam Pro" ,fontSize: "20px",color: "#666666"}} >

                            The UAE market requires deep cleaning services. Care N Clean
                            provides expert deep cleaning services for both residential and
                            commercial buildings. Our professionals create a spotless
                            environment with fresh air free from germs. With our expert team,
                            we deliver optimal results using high-quality equipment along with
                            sustainable cleaning products of the best quality. Your well-being
                            and comfort, together with your mental serenity, improve through
                            an environment maintained in clean condition. Deep cleaning
                            performed beyond regular cleaning eliminates the complete presence
                            of hidden dirt along with allergens and germs.
                        </p>

                    </div>
                </div>

                {/* Right Side Image (Only One)
                <div className="col-12 col-lg-6 col-md-6">
                    <div className="d-inline-block position-relative float-end mt-4 mt-lg-0 mt-md-0">
                   
                        
                        <Image
                            src="/images/deepclean.png"
                            alt="deep clean Image"
                            className=""
                            width={419}
                            height={451}
                            style={{
                                borderRadius: "20px",
                                borderTop: "10px",
                                borderRight: "10px",
                            }}
                        />
                    </div>
                </div> */}
<div className="col-12 col-md-6 col-lg-6">
  <div className="position-relative mt-4 mt-md-0 text-center text-md-end">
    <div style={{ maxWidth: "100%", margin: "0 auto" }}>
      <Image
        src="/images/deepclean.png"
        alt="Deep Clean Image"
        width={419}
        height={451}
        className="img-fluid"
        style={{
          borderRadius: "20px",
          borderTop: "10px solid",
          borderRight: "10px solid",
        }}
      />
    </div>
  </div>
</div>



            </div>
        </div>
    );
};

export default BestDeepClean;
