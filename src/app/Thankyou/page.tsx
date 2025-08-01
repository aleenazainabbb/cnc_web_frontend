'use client';
import GetAQuoteSection from "@/components/GetAQuoteSection";
import AllServicesBanner from "@/components/services_page_content/AllServicesBanner";

export default function ThankyouPage() {
  return (
    <div>
      <AllServicesBanner
        title="Thankyou"
        imageUrl="/images/thankyou.png"
        reverseContentOrder={true}
        hideTitle={true}
        hideIcon={true}
      />
      <div className="be-vietnam-pro-regular-31">
        MESSAGE SENT! Thank you for your query.
        We will get back to you shortly.
      </div>

      <div className="center-box-wrapper">
        <div className="thankyou" text-md-end>If you have any questions, please contact us or call at 52 528 0307.</div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <button className="thankyouBtn">Call Us</button>
      </div>
      <GetAQuoteSection />
    </div>
  );
};




