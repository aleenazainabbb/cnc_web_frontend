'use client';
import React from 'react';
import orders from './styles/noorders.module.css';
import Image from 'next/image';

export default function NoOrders() {
    return (
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
    );
}
