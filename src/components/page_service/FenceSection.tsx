// FenceSection.tsx
import React from "react";
import "./style/FenceSection.css"; // <-- you had './/style', only need one slash

interface FenceSectionProps {
    id?: number;
    className?: string;
    backgroundImage?: string;
    image?: string;
}

const FenceSection: React.FC<FenceSectionProps> = ({
    className = "",
    backgroundImage = "https://images.unsplash.com/photo-1572012022327-0d9a0d28160a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
}) => {
    const fenceData: FenceSectionProps[] = [
        { id: 1, image: "/image/flower.jpg" },
        { id: 2, image: "/image/project2.jpg.webp" },
    ];

    return (
        <section
            className={`fence-section ${className}`}
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="fence-section__content">
                <div className="fence-section__features">
                    {fenceData.map((item) => (
                        <div key={item.id} className="page-service-card">
                            <img src={item.image} alt={`Fence ${item.id}`} />
                        </div>
                    ))}
                </div>

                <div className="fence-section__text">
                    <h2 className="fence-section__title">Fence</h2>
                    <div className="fence-section__description">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                            sollicitudin ante nisi, non feugiat nulla fermentum lobortis.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                            sollicitudin ante nisi, non feugiat nulla fermentum lobortis.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FenceSection;
