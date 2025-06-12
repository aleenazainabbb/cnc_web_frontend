"use client";

import React from "react";
import styles from './styles/AddBooking/billing.module.css';

type BillingSummaryProps = {
    appointmentFrequency: string;
    appointmentTime: string;
    appointmentLocation: string;
    discountCode?: string;
    appointmentValue: number;
    discountAmount: number;
    taxAmount: number;
    totalAmount: number;
    onApplyDiscount?: (code: string) => void;
    onNext?: () => void;
};

const BillingSummary: React.FC<BillingSummaryProps> = ({
    appointmentFrequency,
    appointmentTime,
    appointmentLocation,
    discountCode = "",
    appointmentValue,
    discountAmount,
    taxAmount,
    totalAmount,
    onApplyDiscount,
    onNext,
}) => {
    const [discountInput, setDiscountInput] = React.useState(discountCode);
    const subtotal = appointmentValue - discountAmount;

    return (
        <div className={styles.billingcontainer}>
            <h2 className={styles.billingheading}>Billing</h2>

            <div className={styles.appointmentcard}>
                <div className={styles.appointmentrow}>
                    <p className={styles.appointmentfrequency}>{appointmentFrequency}</p>
                    <p className={styles.appointmenttime}>{appointmentTime}</p>
                </div>
                <div className={styles.divider}></div>
                <div className={styles.locationRow}>
                    <p className={styles.locationtext}>{appointmentLocation}</p>
                    <p className={styles.changelocation}>Change Location</p>
                    </div>
                    <div className={styles.divider}></div>
                
            </div>


            <div className={styles.pricingbox}>
                <div className={styles.pricingrow}>
                    <span>
                        Appointment Value{" "}
                        <span className={styles.detailslink}>- Details</span>
                    </span>
                    <span className={styles.totalvalue}>${appointmentValue.toFixed(2)}</span>
                </div>

                <div className={styles.pricingrow}>
                    <span>
                        Discounts <span className={styles.detailslink}>- Details</span>
                    </span>
                    <span className={styles.totalvalue}>- ${discountAmount.toFixed(2)}</span>
                </div>

                <div className={styles.divider} style={{ marginTop: "10px" }}></div>

                <div className={styles.subtotalrow}>
                    <span>Subtotal</span>
                    <span className={styles.totalvalue}>${subtotal.toFixed(2)}</span>
                </div>

                <div className={styles.taxrow}>
                    <span>Tax</span>
                    <span className={styles.totalvalue}>+ ${taxAmount.toFixed(2)}</span>
                </div>

                <div className={styles.divider} style={{ marginTop: "17px" }}></div>

                <div className={styles.totalrow}>
                    <span>Total</span>
                    <span>${totalAmount.toFixed(2)}</span>
                </div>
            </div>

            <div className={styles.buttoncontainer}>
                <button onClick={onNext} className={styles.nextbutton}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default BillingSummary;
