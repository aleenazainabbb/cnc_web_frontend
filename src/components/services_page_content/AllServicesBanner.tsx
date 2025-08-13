interface AllServicesBannerProps {
  title?: string;
  description?: string | React.ReactNode;
  imageUrl?: string;
  reverseContentOrder?: boolean;
  hideTitle?: boolean; // 🔹 NEW
  hideIcon?: boolean;  // 🔹 NEW
}

const AllServicesBanner: React.FC<AllServicesBannerProps> = ({
  title = "ALL SERVICES",
  description,
  imageUrl = "/images/all-services-banner.png",
  reverseContentOrder = false,
  hideTitle = false,  // default: show title
  hideIcon = false,   // default: show icon
}) => {
  const showDescription = description !== undefined;

  return (
    <div
      className="all_services_banner d-flex align-items-center position-relative h-auto"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        padding: "115px 0",
      }}
    >
      <div className="container position-relative">
        <div className="row align-items-center">
          <div className="col-12 col-lg-12">
            <div className="banner_content">
              {reverseContentOrder ? (
                <>
                  {!hideTitle && (
                    <h1 className="be-vietnam-pro-bold my-3">{title}</h1>
                  )}
                  {showDescription && (
                    <p className="be-vietnam-pro-regular-banner">
                      {description}
                    </p>
                  )}
                </>
              ) : (
                <>
                  {showDescription && (
                    <p className="be-vietnam-pro-regular">{description}</p>
                  )}
                  {!hideTitle && (
                    <h1 className="be-vietnam-pro-bold my-3">{title}</h1>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {!hideIcon && (
        <div className="services_icon round-icon d-flex align-items-center justify-content-center text-white position-absolute bg_green">
          <i className="fa-regular fa-comment-dots"></i>
        </div>
      )}
    </div>
  );
};

export default AllServicesBanner;
