import React from "react"
import Services from "./Services";
import Banner from "./Banner";

import FenceSection from "./FenceSection.tsx";
import Commitmentservice from "./Commitmentservice.tsx";


const Routservice: React.FC = () => {
    return (
        <>
            <div>
                <Banner />
                <Services />
                <FenceSection />
                <Commitmentservice />
            </div>
        </>
    )
}

export default Routservice;