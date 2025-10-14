import type React from "react";
import "./style/Cardproject.css"

interface Cardproject {
    id: number;
    name: string;
    image: string;
    title: string;
}

const projectData: Cardproject[] = [
    { id: 1, name: "Lawn removing", title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin ante." , image: "/image/project1.jpg.webp" },
    { id: 2, name: "Lawn removing", title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin ante.", image: "/image/project2.jpg.webp" },
    { id: 3, name: "Lawn removing", title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin ante.", image: "/image/flower.jpg" },
    { id: 4, name: "Lawn removing", title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin ante.", image: "/image/project4.jpg (1).webp" },
    { id: 5, name: "Lawn removing", title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin ante.", image: "/image/project5.jpg.webp" },
    { id: 6, name: "Lawn removing", title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin ante.", image: "/image/project6.jpg.webp" },
    { id: 7, name: "Lawn removing", title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin ante.", image: "/image/project7.jpg.webp" },
    { id: 8, name: "Lawn removing", title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin ante.", image: "/image/project8.jpg.webp" },
    { id: 9, name: "Lawn removing", title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin ante.", image: "/image/project9.jpg.webp" },
];

const Cardprojects: React.FC = () => {
    return (
        <section>
            <h2 className="Home-title">Some of our awesome project</h2>
            <div className="card-container_content">
                {projectData.map((p) => (
                    <div key={p.id} className="Cardproject">
                        <img src={p.image} alt={p.name} />
                        <div className="hover-text">
                            <span>{p.name}</span>
                            <p>{p.title}</p>
                            <button className="view-btn">View</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Cardprojects;
