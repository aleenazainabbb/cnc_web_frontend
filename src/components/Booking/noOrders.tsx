'use client';
import React from 'react';
import orders from './styles/noorders.module.css';
import styles from '@/components/navbar/styles/HeaderBar.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function NoOrders() {
    return (
        <div className={orders.wrapper}>
            <div className={orders.topRightbutton}>
                <Link href="/GetAquote">
                    <div className={styles.getaQuoteBtn}>Get a quote</div>
                </Link>
            </div>

            <div className={orders.container}>
                <Image
                    src="/images/noorders.png"
                    alt="No Orders"
                    width={194}
                    height={194}
                    className={orders.image}
                />
                <h2 className={orders.title}>No Orders Yet</h2>
                <p className={orders.paragraph}>You have no active order right now.</p>
            </div>
        </div>
    );
}
