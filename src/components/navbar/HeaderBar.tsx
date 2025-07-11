'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './styles/HeaderBar.module.css';
import LinkWithLoader from '@/components/Loader/Link';
import { useProfileImage } from '@/context/imageUpload'; // ✅ Import your image context

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
  const { uploadedImage } = useProfileImage(); // ✅ Get image from context
  const [profileImage, setProfileImage] = useState<string | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        const user = JSON.parse(storedUser);
        if (user.profileImage) {
          setProfileImage(user.profileImage);
        }
      } catch (error) {
        console.error('Failed to parse user from localStorage:', error);
      }
    }
  }, []);

  const finalImage = uploadedImage || profileImage || '/images/profile.png';

  return (
    <div className={styles.header}>
      <div className={styles.title}>{title}</div>
      <div className={styles.right}>
        {showAddButton && (
          <LinkWithLoader href="/BookAservicePage" className={styles.addBookingBtn}>
            Add Booking
          </LinkWithLoader>
        )}

        <LinkWithLoader href="/Bookings/Notifications" className={styles.iconBtn}>
          {customIcon || <i className="fa-regular fa-bell" aria-hidden="true"></i>}
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
