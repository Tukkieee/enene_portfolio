import { Footer } from "../Components/footer";
import { FaLinkedinIn, FaTwitter, FaBehance } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";

export const Contact = () => {
   
    return (
        <div className="about">
            <div className="about-main">
                <div className="project-container">
                    <div className="heading">
                        <h1>Contact</h1>
                        <hr />
                        <h5>Lets work</h5>
                    </div>
                    <div className="email">
                        <h3>To talk collaborations or <br /> partnerships, send an email to <br /> <a href="mailto:enenemiracle@gmail.com">enenemiracle@gmail.com</a></h3>
                    </div>
                    <div className="social">
                        <div className="social-icons">
                        <a href="https://www.instagram.com/enenemiracle/" target="_blank" rel="noreferrer"><FaBehance /></a>
                            <a href="https://www.linkedin.com/in/enenemiracle/" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
                            <a href="https://www.instagram.com/enenemiracle/" target="_blank" rel="noreferrer"><IoLogoWhatsapp /></a>
                            <a href="https://twitter.com/EneneMiracle" target="_blank" rel="noreferrer"><FaTwitter /></a>
                            <a href="https://www.instagram.com/enenemiracle/" target="_blank" rel="noreferrer"><RiTwitterXLine /></a>
                        </div>  
                    </div>
                </div>
            </div>
           
            <div className="about-main" >
                <Footer />
            </div>

        </div>
    )
}