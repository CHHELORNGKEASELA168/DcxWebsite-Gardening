// src/App.tsx
import React from "react";
import {Route, Routes,} from "react-router-dom";
import Home from "./Home";
import Routservice from "./page_service/Routservice";
import Routabout from "./Page_about/Routabout";
import Routproject from "./Page_project/Routproject";
import Routblog from "./Page_blog/Routblog";
import Routcontact from "./Page_contact/Routcontact";


const Rout: React.FC = () => {
    return (
        <>
            {/* <Home /> */}
            {/* <Home /> */}
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/service" element={<Routservice />}/>
                <Route path="/About" element={<Routabout />}/>
                <Route path="/projects" element={<Routproject />}/>
                <Route path="/blog" element={<Routblog />}/>
                <Route path="/contact" element={<Routcontact />}/>
            </Routes>
        </>
    );
};

export default Rout;
