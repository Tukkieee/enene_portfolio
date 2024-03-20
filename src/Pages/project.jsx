import { Works } from "../Components/works";
import { Footer } from "../Components/footer";
import React, { useState, useEffect } from 'react';
import { Navbar } from "../Components/navbar";
export const Project = () => {
    const [showNavbar, setShowNavbar] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const footer = document.querySelector('#footer');
            const footerPosition = footer.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (footerPosition < windowHeight) {
                setShowNavbar(false);
            } else {
                setShowNavbar(true);
            }

        };


        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <div className="about">
            <div className="about-main">
                <div className="project-container">
                    <div className="heading">
                        <h1>Projects</h1>
                        <hr />
                        <h5>Selected Projects</h5>
                    </div>
                    <Works />
                </div>
            </div>
            <div className="about-nav">
                {showNavbar && <Navbar />}
            </div>
            <div id="footer"></div>
            <div className="about-main" >
                <Footer />
            </div>

        </div>
    )
}