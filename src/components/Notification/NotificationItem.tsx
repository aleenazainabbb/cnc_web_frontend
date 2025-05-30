import React, { FC } from "react";
import { Clock } from "lucide-react";
import styles from "./NotificationItem.module.css";

interface NotificationItemProps {
  title: string;
  description: string;
  time: string;
  icon: React.ReactElement;
  iconBgColor: string;
}

export const NotificationItem: FC<NotificationItemProps> = ({
  title,
  description,
  time,
  icon,
  iconBgColor,
}) => {
  return (
    <div className={styles.notificationItem}>
      <div className={styles.iconContainer} style={{ backgroundColor: iconBgColor }}>
        {icon}
      </div>
      <div className={styles.content}>
        <div className={styles.topRow}>
          <div className={styles.title}>{title}</div>
          <div className={styles.time}>
            <Clock size={14} className={styles.clockIcon} />
            {time}
          </div>
        </div>
        <div className={styles.description}>{description}</div>
      </div>
    </div>
  );
};
