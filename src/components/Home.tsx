// import React from "react";
// import Greeting from "./components/Greeting";

import About from "./About";
import CommitmentSection from "./CommitmentSection";
import Hero from "./Hero";
import ProjectSwiper from "./ProjectSwiper";
import Services from "./page_service/Services.tsx";

function Home() {
    return (
        <>
            <Hero />
            <Services />
            <About />
            <ProjectSwiper />
            <CommitmentSection />
            
        </>
    )
}

export default Home;