// import Aaa from "./Aaa"; // ✅ must match file name if you moved it to its own file

import CommitmentSection from "../CommitmentSection";
import Bannerabout from "./Bannerabout";
import Sectionabout from "./Sectionabout";

const Routabout = () => {
    return (
        <>
            <Bannerabout />
            <Sectionabout />
            <CommitmentSection />
        </>
    );
};

export default Routabout;
