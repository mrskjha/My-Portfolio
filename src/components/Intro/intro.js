import React from 'react';
import"./intro.css";
import bg from "../../assets/image.png";
import{Link} from "react-scroll";

const Intro = () => {
  return (
    <section id="intro">
        <div className='introContent'>
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className='introName'>Sunny</span> <br />Web Devloper</span>
            <p className="introPara">I am a skilled web devloper with experience in creating <br/> visully appealing and user friendly websites </p>
            <Link> <button className='btn'>Hire Me</button></Link>
        </div>
        <img src={bg} alt="profile" className="bg" />
    </section>
  )
}

export default Intro
