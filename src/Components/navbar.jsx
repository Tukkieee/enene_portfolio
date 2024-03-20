import { NavLink } from "react-router-dom"
import { TbMessage2 } from "react-icons/tb";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";
import { IoPersonOutline } from "react-icons/io5";
import { CiGrid41 } from "react-icons/ci";

export const Navbar = () => {
    return (
        <div className="nav">
            <div className="navbar">
                <NavLink to="/about" className="link"><div><h2><IoPersonOutline /><span>About</span></h2></div></NavLink>
                <NavLink to="/project" className="link"><div><h2><CiGrid41 /><span>Project</span></h2></div></NavLink>
                <NavLink to="/contact" className="link"><div><h2><TbMessage2 /><span>Contact</span></h2></div></NavLink>
                <a href="*" download="Enene_Resume" className="link"><div><h2><span>Resume</span><HiOutlineDocumentArrowDown /></h2></div></a>
            </div>
        </div>
    )
}