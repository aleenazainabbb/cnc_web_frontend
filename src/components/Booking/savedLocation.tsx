'use client';
import React from 'react';
import location from './styles/savedlocation.module.css';

const SavedLocation: React.FC = () => {
    return (
        <div className={location.main}>
            <div className={location.container}>
                <label className={location.label}>Add New Location</label>
                <input
                    type="text"
                    placeholder="Enter location name eg home, office etc"
                    className={location.input}
                />

                 <div className={location.buttonContainer}>
                        <button className={location.button}>Save Location</button>
                    </div>
            </div>
        </div>

    );
};
export default SavedLocation;
