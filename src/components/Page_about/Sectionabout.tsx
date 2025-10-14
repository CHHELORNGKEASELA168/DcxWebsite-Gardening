import React from 'react';
import './style/Sectionabout.css'
// import { CheckCircle } from "lucide-react"; // icon library
import { HiCheckCircle } from "react-icons/hi2";


interface Feature {
    id: number;
    title: string;
    description: string;
}

const features: Feature[] = [
    {
        id: 1,
        title: "We prefer quality first",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin ante nisl, non feugiat null fermentum lobortis.",
    },
    {
        id: 2,
        title: "We prefer quality first",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin ante nisl, non feugiat null fermentum lobortis.",
    },
    {
        id: 3,
        title: "We prefer quality first",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin ante nisl, non feugiat null fermentum lobortis.",
    },
];

const Sectionabout: React.FC = () => {
    return (
        <>

            <section id="designs" className="designs">
                <div className="container flex-box-about">
                    {/* Header Section */}
                    <div className="design-headers">
                        <h2>We have been designing gardens since 1990</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                            sollicitudin ante nisl, non feugiat null fermentum lobortis. Aenean
                            placerat ipsum ut velit elementum, in sodales tellus viverra.
                            Phasellus vestibulum, ex non lobortis faucibus.
                        </p>
                        <div className="img-left">
                            <img src="/image/about1.jpg.webp" alt="Garden design" />
                        </div>
                    </div>

                    {/* Mission Sections */}
                    <div className="mission-sections">
                        <div className="mission-items">
                            <h3>Our Mission</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                                sollicitudin ante nisl, non feugiat null fermentum lobortis.
                            </p>
                        </div>

                        <div className="mission-items">
                            <h3>Our Vision</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                                sollicitudin ante nisl, non feugiat null fermentum lobortis.
                            </p>
                        </div>

                        {/* CTA Button */}
                        <div className="design-cta">
                            <button className="cta-button">Learn More About Us</button>
                        </div>

                        <div className="img-right">
                            <img src="/image/about2.jpg.webp" alt="Garden vision" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="featuress">
                <div className="features-grid">
                    {features.map((feature) => (
                        <div key={feature.id} className="feature-cards">
                            <div className="feature-icon">
                                {/* <CheckCircle size={40} color="green" /> */}
                                <HiCheckCircle />
                            </div>
                            <h3 className='h3'>{feature.title}</h3>
                            <p className='p'>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Sectionabout;
