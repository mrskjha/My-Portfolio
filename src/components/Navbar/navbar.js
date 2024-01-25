import React from 'react';
import "./navbar.css";
import logo from"../../assets/logo.png";
import contactImg from "../../assets/contact.png"
import{Link} from "react-scroll";

const Navbar = () => {
  return (
    <nav className="navbar">
        <img src={logo} alt="logo" className="logo" />
        <div className="destopMenu">
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="destopMenuListItem" >Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="destopMenuListItem" >About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className="destopMenuListItem" >Portfolio</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500}  className="destopMenuListItem" >Client</Link>
        </div>
        <button activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuBtn" onClick={() =>{
           document.getElementById("contact").scrollIntoView({behavior:'smooth'});
        }}>
            <img src={contactImg} alt="" className="desktopMenuImg" />Contact Me
        </button>
    </nav>
  )
};

export default Navbar;
