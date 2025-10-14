// ServicesBanner.tsx
import React from 'react';
import './/style/ServicesBanner.css';

interface ServicesBannerProps {
    className?: string;
    backgroundImage?: string;
}

const ServicesBanner: React.FC<ServicesBannerProps> = ({
    className = '',
    backgroundImage = 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
}) => {


    return (
        <section
            className={`services-banner ${className}`}
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="services-banner__overlay"></div>

            <div className="services-banner__content">
                <div className="services-banner__header">
                    <h2 className="services-banner__title">Our Services</h2>
                </div>

            </div>
        </section>
    );
};

// Helper function to assign icons to services


export default ServicesBanner;