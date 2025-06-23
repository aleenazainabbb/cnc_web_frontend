'use client';
import Image from 'next/image';
import styles from './styles/HeaderBar.module.css';
import LinkWithLoader from '@/components/Loader/Link';

export default function HeaderBar({
  title,
  customIcon,
  customAvatar,
  showAddButton = false, // Default is false
}: {
  title: string;
  customIcon?: React.ReactNode;
  customAvatar?: React.ReactNode;
  showAddButton?: boolean;
}) {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
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
              src="/images/profile.png"
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
