import React from "react";
import Link from "next/link";

const MiniFooter: React.FC = () => {
  return (
    <div className="container-fluid bg_green mini_footer py-2">
      <div className="d-flex justify-content-between align-items-center flex-wrap">
        <p className="mb-2 mb-lg-0 mb-md-0 small be-vietnam-pro-regular text-center">
          Copyright © 2024{" "}
          <Link href="/" className="text-white">
            carencleanss.com
          </Link>{" "}
          All Rights Reserved ·{" "}
          <Link href="/sitemap" className="text-white">
            Sitemap
          </Link>
        </p>
        <div className="d-flex gap-3 justify-content-center language_options">
          <a href="#" className="text-white small be-vietnam-pro-regular">
            EN
          </a>
          <a href="#" className="text-white small be-vietnam-pro-regular">
            SE
          </a>
          <a href="#" className="text-white small be-vietnam-pro-regular">
            DE
          </a>
        </div>
      </div>
    </div>
  );
};

export default MiniFooter;
