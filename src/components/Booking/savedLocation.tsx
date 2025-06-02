'use client';
import React from 'react';
import location from './styles/savedlocation.module.css';
import profile from './styles/profile.module.css';

const SavedLocation: React.FC = () => {
    return (
        <div className={location.main}>
            <div className={profile.container}>
                <label className={profile.label}>Add New Location</label>
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
