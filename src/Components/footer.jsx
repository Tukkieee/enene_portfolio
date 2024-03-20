import { NavLink } from "react-router-dom"
import { TbMessage2 } from "react-icons/tb";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";
import { IoPersonOutline } from "react-icons/io5";
import { CiGrid41 } from "react-icons/ci";
import Profile from "./../assets/images/Rectangle1.png"


export const Footer = () => {
    return (
        <div className="footer">
            <div className="footer_left-container"  >
                <div className="footer_left-inner">
                    <img src={Profile} alt="Profile" className="footer_img" />
                </div>
                <div className="">
                    <h1 >I'm Enene, Miracle</h1>
                    <p>Digital Product Designer based <br />
                        in Uyo, Nigeria.</p>
                </div>
            </div>

            {/* footer right */}
            <div className="footer_right-container">
                <div className="footer_nav">
                    <NavLink to="/about" className="footer_link"><div><h2>About</h2></div></NavLink>
                    <NavLink to="/project" className="footer_link"><div><h2>Project</h2></div></NavLink>
                    <NavLink to="/contact" className="footer_link"><div><h2>Contact</h2></div></NavLink>
                </div>
                <div className="footer_resume-container">
                    <a href="*" download="Enene_Resume" className="resume-link"><div><h2>Resume<HiOutlineDocumentArrowDown /></h2></div></a>
                </div>
            </div>
        </div>

    )
}