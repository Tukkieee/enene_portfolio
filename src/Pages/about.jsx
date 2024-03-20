import { Doings } from "../Components/doings"
import { Experience } from "../Components/experience"
import { Skills } from "../Components/skills"
import { Navbar } from "../Components/navbar"
import { Footer } from "../Components/footer"

import React, { useState, useEffect } from 'react';
import { Testimony } from "../Components/testimony";
import { Profile } from "../Components/profile"
import { ProfileSmall } from "../Components/profileSm"

export const About = () => {
    const [showNavbar, setShowNavbar] = useState(true);
    const [isSticky, setIsSticky] = useState(false);
    const [isWideScreen, setIsWideScreen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const footer = document.querySelector('#testimony');
            const footerPosition = footer.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            const targetElement = document.querySelector('#profile');
            const scrollPosition = window.scrollY;


            if (footerPosition < windowHeight) {
                setShowNavbar(false);
            } else {
                setShowNavbar(true);
            }

            if (scrollPosition > footer) {
                setIsSticky(false);
            } else {
                setIsSticky(true);
            }


        };


        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    useEffect(() => {
        const handleResize = () => {
            const mediaQuery = window.matchMedia('(min-width: 769px)');
            setIsWideScreen(mediaQuery.matches);
        };

        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <>
            <div className="about">

                <div className="about-main">
                    <div className="about-container">
                    {isWideScreen ? <Profile isSticky={isSticky} /> : <ProfileSmall />}
                        <div className="experience">
                            <div className="bx bx-sp">
                                <h2>Passionatly Creating great <br />
                                    experiences for Digital Product</h2>
                                <p className="light">Crafting brand identity-defining products and pieces is my passion. I strive to create designs that are persuasive, minimalistic, and prioritize user satisfaction.</p>
                                <button className="btn">See My Work</button>
                            </div>
                            <hr />
                            <div className="bx bx-experience">
                                <h2>Working Experience</h2>
                                <Experience />
                            </div>
                            <hr />
                            <div className="bx">
                                <h2>What I Do</h2>
                                <Doings />
                            </div>
                            <hr />

                            <div className="bx">
                                <h2>Working Experience</h2>
                                <Skills />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-nav">
                    {showNavbar && <Navbar />}
                </div>
                <div className="about-main" id="testimony">
                    <div className="review bx">
                        <hr />
                        <h2>Reviews</h2>
                        <Testimony/>

                    </div>
                </div>
                <div className="about-main">
                <Footer/>
                </div>
                


            </div>
        </>
    )
}