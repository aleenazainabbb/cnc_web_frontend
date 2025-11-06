"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles/HeaderBar.module.css";
import LinkWithLoader from "@/components/Loader/Link";
import { useProfileImage } from "@/context/imageUpload";
import { usePathname } from "next/navigation";

export default function HeaderBar({
  title,
  customIcon,
  customAvatar,
  showAddButton = false,
}: {
  title: string;
  customIcon?: React.ReactNode;
  customAvatar?: React.ReactNode;
  showAddButton?: boolean;
}) {
  const pathname = usePathname();
  const isDashboard = pathname === "/Bookings/Dashboard";

  const { uploadedImage } = useProfileImage();
  const [profileImage, setProfileImage] = useState<string | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const user = JSON.parse(storedUser);
        if (user.profileImage) {
          setProfileImage(user.profileImage);
        }
      } catch (error) {
        console.error("Failed to parse user from localStorage:", error);
      }
    }
  }, []);

  const finalImage = uploadedImage || profileImage || "/images/profile.png";

  return (
    <div className={styles.header}>
      <div className={styles.titleSection}>
        {/* ✅ First line: "Go to home" (only on dashboard) */}
        {/* {isDashboard && ( */}
        <Link href="/" className={styles.goHome}>
          <i
            className="fa-solid fa-arrow-left"
            style={{ marginRight: "8px" }}
          ></i>
          Go to home
        </Link>
        {/* )} */}

        {/* ✅ Second line: Title */}
        <div className={styles.title}>{title}</div>
      </div>

      <div className={styles.right}>
        {showAddButton && (
          <div>
            <LinkWithLoader
              href="/BookAservicePage"
              className={styles.addBookingBtn}
            >
              Add Booking
            </LinkWithLoader>
          </div>
        )}

        <LinkWithLoader
          href="/Bookings/Notifications"
          className={styles.iconBtn}
        >
          {customIcon || <i className="fa-regular fa-bell"></i>}
        </LinkWithLoader>

        <LinkWithLoader href="/Bookings/Profile" className={styles.avatarBtn}>
          {customAvatar || (
            <Image
              src={finalImage}
              alt="User"
              width={56}
              height={56}
              className={styles.avatarImg}
            />
          )}
        </LinkWithLoader>
      </div>
    </div>
  );
}