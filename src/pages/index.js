import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import {
    homeObjOne,
    homeObjThree,
    homeObjTwo,
} from "../components/InfoSection/Data";
import NavBar from "../components/NavBar";
import Services from "../components/Services";
import SideBar from "../components/SideBar";

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    useEffect(() => {
        window.scroll(0, 0);
    }, []);
    return (
        <>
            <SideBar isOpen={isOpen} toggle={toggle} />
            <NavBar toggle={toggle} />
            <HeroSection />
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <Services />
            <InfoSection {...homeObjThree} />
            <Footer />
        </>
    );
};

export default Home;
