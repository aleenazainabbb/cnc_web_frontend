'use client';
import React from 'react';
import Image from 'next/image';
import styles from './styles/noorders.module.css';

interface NoOrdersProps {
  title?: string;
  subtitle?: string;
}

export default function NoOrders({
  title = 'No Orders Yet',
  subtitle = 'You have no active orders right now.',
}: NoOrdersProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.imageWrapper}>
          <Image
            src="/images/noorders.png"
            alt="No Orders"
            width={200}
            height={200}
            className={styles.image}
          />
        </div>

        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>

      </div>
    </div>
  );
}
