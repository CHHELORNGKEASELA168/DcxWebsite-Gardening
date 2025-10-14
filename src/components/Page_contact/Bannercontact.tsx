// ServicesBanner.tsx
import React from 'react';
import './style/Bannercontact.css'

interface Bannerproject {
    className?: string;
    backgroundImage?: string;
}

const Bannercontact: React.FC<Bannerproject> = ({
    className = '',
    backgroundImage = 'https://i.pinimg.com/736x/96/42/1a/96421a97b83034f52c410befe7cefa20.jpg'
}) => {


    return (
        <section
            className={`about-banner ${className}`}
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="services-banner__overlay"></div>

            <div className="services-banner__content">
                <div className="services-banner__header">
                    <h2 className="services-banner__title">Contact Us</h2>
                </div>

            </div>
        </section>
    );
};

export default Bannercontact;