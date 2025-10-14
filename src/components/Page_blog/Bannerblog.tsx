// ServicesBanner.tsx
import React from 'react';
import "./style/bannerblog.css"

interface Bannerproject {
    className?: string;
    backgroundImage?: string;
}

const Bannerblog: React.FC<Bannerproject> = ({
    className = '',
    backgroundImage = 'https://t4.ftcdn.net/jpg/06/64/71/29/360_F_664712948_jt4XAKpZO3Cts2ks2v4mOiDxYv0Qc6ib.jpg'
}) => {


    return (
        <section
            className={`about-banner ${className}`}
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="services-banner__overlay"></div>

            <div className="services-banner__content">
                <div className="services-banner__header">
                    <h2 className="services-banner__title">Blog</h2>
                </div>

            </div>
        </section>
    );
};



export default Bannerblog;