'use client';

import { NotificationItem } from '@/components/Notification/NotificationItem';
import React from "react";
import HeaderBar from '@/components/navbar/HeaderBar';

import {
  CheckCircle,
  ShieldCheck,
  Bell,
  UserCheck,
  XCircle,
} from "lucide-react";

// Define the props for each notification item
type Notification = {
  title: string;
  description: string;
  time: string;
  icon: React.ReactElement;   // Must be a React element, not just ReactNode
  iconBgColor: string;
};

// Sample notifications array with full typing
const notifications: Notification[] = [
  {
    title: "Order Accepted",
    description: "We have accepted your order. Click to view details.",
    time: "2 min ago",
    icon: <CheckCircle size={20} color="#fff" />,
    iconBgColor: "#FF9800",
  },
  {
    title: "Confirm Order",
    description: "We have added items in your order. Please check and confirm.",
    time: "5 min ago",
    icon: <ShieldCheck size={20} color="#fff" />,
    iconBgColor: "#9C27B0",
  },
  {
    title: "Order Assigned",
    description: "We have assigned your order to a worker. Click to view details.",
    time: "10 min ago",
    icon: <UserCheck size={20} color="#fff" />,
    iconBgColor: "#2196F3",
  },
  {
    title: "Order Completed",
    description: "Your order has been completed. Please check the work done.",
    time: "20 min ago",
    icon: <CheckCircle size={20} color="#fff" />,
    iconBgColor: "#4CAF50",
  },
  {
    title: "Order Cancelled",
    description: "Your order has been cancelled. Click to view details.",
    time: "30 min ago",
    icon: <XCircle size={20} color="#fff" />,
    iconBgColor: "#F44336",
  },
  {
    title: "Announcement",
    description: "Our service will be down tomorrow for planned maintenance.",
    time: "1 hour ago",
    icon: <Bell size={20} color="#fff" />,
    iconBgColor: "#616161",
  },
];

// OR for empty list use:
// const notifications: Notification[] = [];

export default function NotificationList() {
  const isEmpty = notifications.length === 0;

  return (

    <div>
       <HeaderBar title="Profile" />
      {isEmpty ? (
        <div className="emptyState">
          <img
            src="/Images/no_notifications.png"
            alt="No notifications"
            className="emptyImage"
          />
          <h2>No Notifications</h2>
          <p>You’re all caught up! Check back later for updates.</p>
        </div>
      ) : (
        <div style={{ 
          padding: '0 20px'
        }}>
          {notifications.map((item, idx) => (
            <NotificationItem key={idx} {...item} />
          ))}
        </div>
      )}
    </div>
  );
}