// ServicesBanner.tsx
import React from 'react';
// import './/style/ServicesBanner.css';
import './style/Bannerabout.css'

interface Bannerabouts {
    className?: string;
    backgroundImage?: string;
}

const Bannerabout: React.FC<Bannerabouts> = ({
    className = '',
    backgroundImage = 'https://bioadvanced.com/media/wysiwyg/live_media/2018-06/Warm-Season_VS._Cool-Season_Grasses.jpg'
}) => {


    return (
        <section
            className={`about-banner ${className}`}
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="services-banner__overlay"></div>

            <div className="services-banner__content">
                <div className="services-banner__header">
                    <h2 className="services-banner__title">About Us</h2>
                </div>

            </div>
        </section>
    );
};

// Helper function to assign icons to services


export default Bannerabout;