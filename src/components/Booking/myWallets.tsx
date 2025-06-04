// 'use client';
// import React from 'react';
// import wallet from './styles/mywallet.module.css';

// const MyWallet: React.FC = () => {
//     return (
//         <div className={wallet.main}>
//             <div className={wallet.container}>
//                 <p className={wallet.title}>Total Wallet Balance </p>
//                 <div className={wallet.currencyBox}>AEDO</div>

//                 <div className={wallet.text}>
//                     <p >Your wallet amount is automatically deducted from your next booking charges.
//                         <p>Have a gift card? Redeem it <span className={wallet.link}>here.</span></p>
//                     </p>
//                 </div>

//             </div>
//         </div>

//     );
// };
// export default MyWallet;
'use client';
import React, { useState } from 'react';
import wallet from './styles/mywallet.module.css';

const MyWallet: React.FC = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className={wallet.main}>
            <div className={wallet.container}>
                <p className={wallet.title}>Total Wallet Balance</p>
                <div className={wallet.currencyBox}>AED 0</div>

                <div className={wallet.text}>
                    <p>Your wallet amount is automatically deducted from your next booking charges.</p>
                    <p>
                        Have a gift card? Redeem it{' '}
                        <span
                            className={wallet.link}
                            onClick={() => setShowModal(true)}
                            style={{ cursor: 'pointer', color: '#1565D8' }}
                        >
                            here.
                        </span>
                    </p>
                </div>
            </div>

            {showModal && (
                <div className={wallet.modalOverlay}>
                    <div className={wallet.modal}>
                        <button className={wallet.close} onClick={() => setShowModal(false)}>×</button>
                        <p className={wallet.modalTitle}>Redeem your gift card</p>
                        <input
                            type="text"
                            className={wallet.modalInput}
                            placeholder="Enter your 16 digit gift card code here"
                        />
                        <button className={wallet.redeemBtn}>REDEEM</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyWallet;

