'use client';
import React from 'react';
import orders from './styles/noorders.module.css';
import Image from 'next/image';
interface NoOrdersProps {
  header?: React.ReactNode;
}

export default function NoOrders({ header} : NoOrdersProps){
    return (
        <div className={orders.wrapper}>
            {header && <div className={orders.header}>{header}</div>}

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

