'use client';
import React from 'react';
import wallet from './styles/mywallet.module.css';

const MyWallet: React.FC = () => {
    return (
        <div className={wallet.main}>
            <div className={wallet.container}>
                <p className={wallet.title}>Total Wallet Balance </p>
                <div className={wallet.currencyBox}>AEDO</div>

                <div className={wallet.text}>
                    <p >Your wallet amount is automatically deducted from your next booking charges.
                        <p>Have a gift card? Redeem it <span className={wallet.link}>here.</span></p>
                    </p>
                </div>

            </div>
        </div>

    );
};
export default MyWallet;
