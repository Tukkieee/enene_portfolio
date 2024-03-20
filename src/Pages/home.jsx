import { Navbar } from "../Components/navbar"
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
export const Home = () => {
    useEffect(() => {
        AOS.init({
          duration: 2000, // Change animation duration
          once: true, // Run animations only once
        });
      }, []);
    return (
        <div className="home" data-aos="fade-in">
            <div className="name">
                <div>
                    <h1>Enene, Miracle</h1>
                    <h4>Product Designer</h4>
                </div>
            </div>
            <Navbar />
        </div>
    )
}