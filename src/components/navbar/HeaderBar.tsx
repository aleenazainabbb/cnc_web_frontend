'use client';
import Image from 'next/image';
import styles from './styles/HeaderBar.module.css';

export default function HeaderBar({
  title,
  onNotifyClick,
  onAvatarClick,
}: {
  title: string;
  onNotifyClick?: () => void;
  onAvatarClick?: () => void;
}) {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.right}>
        <button onClick={onNotifyClick} className={styles.iconBtn}>
          {/* Option 1: Font Awesome class */}
          <i className="fa-regular fa-bell" aria-hidden="true"></i>

      
        </button>

        <button onClick={onAvatarClick} className={styles.avatarBtn}>
          <Image
            src="/images/avatar.png" // Use your local image or change path
            alt="User"
            width={56}
            height={56}
            className={styles.avatarImg}
          />
        </button>
      </div>
    </div>
  );
}
