'use client';
import Image from 'next/image';
import styles from './styles/HeaderBar.module.css';
import Link from 'next/link';

export default function HeaderBar({
  title,
  // onNotifyClick,
  // onAvatarClick,
  customIcon,      // Optional custom icon JSX
  customAvatar,    // Optional custom avatar JSX
}: {
  title: string;
  // onNotifyClick?: () => void;
  // onAvatarClick?: () => void;
  customIcon?: React.ReactNode;
  customAvatar?: React.ReactNode;
}) {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.right}>
        {/* <button onClick={onNotifyClick} className={styles.iconBtn}>
          {customIcon || <i className="fa-regular fa-bell" aria-hidden="true"></i>}
        </button> */}
        <Link href="/Bookings/Notifications" className={styles.iconBtn}>
          {customIcon || <i className="fa-regular fa-bell" aria-hidden="true"></i>}
        </Link>


        <Link href="/Bookings/Profile" className={styles.avatarBtn}>
          {customAvatar || (
            <Image
              src="/images/profile.png"
              alt="User"
              width={56}
              height={56}
              className={styles.avatarImg}
            />
          )}
        </Link>
      </div>
    </div>
  );
}
