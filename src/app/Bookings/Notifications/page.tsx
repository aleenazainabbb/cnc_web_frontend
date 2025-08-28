'use client';

import { useEffect, useState } from 'react';
import HeaderBar from '@/components/navbar/HeaderBar';
import { NotificationItem } from '@/components/Notification/NotificationItem';
import { getNotification } from '@/context/NotificationContext';

import {
  CheckCircle,
  ShieldCheck,
  Bell,
  UserCheck,
  XCircle,
} from 'lucide-react';

type ApiNotification = {
  id: number;
  type: string;
  message: string;
  read: boolean;
  createdAt: string;
};

type NotificationUI = {
  id: number;
  title: string;
  description: string;
  time: string;
  icon: React.ReactElement;
  iconBgColor: string;
  read: boolean;
};

const getIconAndColor = (type: string) => {
  switch (type.toLowerCase()) {
    case 'accepted':
      return { icon: <CheckCircle size={20} color="#fff" />, iconBgColor: '#FF9800' };
    case 'confirmed':
      return { icon: <ShieldCheck size={20} color="#fff" />, iconBgColor: '#9C27B0' };
    case 'assigned':
      return { icon: <UserCheck size={20} color="#fff" />, iconBgColor: '#2196F3' };
    case 'completed':
      return { icon: <CheckCircle size={20} color="#fff" />, iconBgColor: '#4CAF50' };
    case 'cancelled':
      return { icon: <XCircle size={20} color="#fff" />, iconBgColor: '#F44336' };
      case 'booking':
      return { icon: <Bell size={20} color="#fff" />, iconBgColor: '#FF9800' };
      default:
      return { icon: <Bell size={20} color="#fff" />, iconBgColor: '#958383ff' };
  }
};

function getRelativeTime(createdAt: string): string {
  const now = new Date();
  const past = new Date(createdAt);
  const diffMs = now.getTime() - past.getTime();

  const seconds = Math.floor(diffMs / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (seconds < 60) return `${seconds} sec ago`;
  if (minutes < 60) return `${minutes} min ago`;
  if (hours < 24) return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  return `${days} day${days > 1 ? "s" : ""} ago`;
}


export default function NotificationList() {
  const [notifications, setNotifications] = useState<NotificationUI[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const data: ApiNotification[] = await getNotification();

        const mapped = data.map((item) => {
          const { icon, iconBgColor } = getIconAndColor(item.type);

          return {
            id: item.id,
            
            title: item.type.charAt(0).toUpperCase() + item.type.slice(1),

            
            description: item.message,
            time: getRelativeTime(item.createdAt),

            icon,
            iconBgColor,
            read: item.read,
          };
        });

        setNotifications(mapped);
      } catch (error) {
        console.error('Failed to load notifications:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNotifications();
  }, []);

  if (loading) {
    return (
      <div>
        <HeaderBar title="Notification" />
        <p style={{ textAlign: 'center', marginTop: '20px' }}>Loading...</p>
      </div>
    );
  }

  if (notifications.length === 0) {
    return (
      <div>
        <HeaderBar title="Notification" />
        <div className="emptyState" style={{ textAlign: 'center', marginTop: '40px' }}>
          <img
            src="/Images/no_notifications.png"
            alt="No notifications"
            className="emptyImage"
            style={{ width: '150px', margin: '0 auto' }}
          />
          <h2>No Notifications</h2>
          <p>You’re all caught up! Check back later for updates.</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <HeaderBar title="Notification" />
      <div
        style={{
          padding: '0 20px',
          maxHeight: '88vh',
          overflowY: 'auto',
        }}
      >
        {notifications.map((item) => (
          <div
            key={item.id}
            style={{
              backgroundColor: item.read ? '#fff' : '#f3f4f6', // 👈 highlight unread
              borderRadius: '10px',
              marginBottom: '10px',
              padding: '8px',
            }}
          >
            <NotificationItem {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}
