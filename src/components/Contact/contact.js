import React, { useRef } from "react";
import "./contact.css";
import linkdin from "../../assets/linkedin.png";
import github from "../../assets/github.png";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm("service_lbm3lls", "template_442o53r", form.current, "WJ8PEI-RjSK6c8VCX")
            .then(
                (result) => {
                    console.log(result.text);
                    e.target.reset();
                    alert("Email Sent !");
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <section id="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Please fill out the form to discuss any work opportunities.</span>
            <form className="contactForm" ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder="Your Name" name="your_name" />
                <input type="email" className="email" placeholder="Your Email" name="your_email" />
                <textarea className="msg" name="message" rows="5" placeholder="Your message "></textarea>
                <button type="submit" value="Send" className="submitBtn">
                    Submit
                </button>
                <div className="links">
                    <a href="https://www.linkedin.com/in/sunny-jha-41687026b/" target="_blank" rel="noopener noreferrer">
                        <img src={linkdin} alt="linkdin" className="link" />
                    </a>
                    <a href="https://github.com/mrskjha" target="_blank" rel="noopener noreferrer">
                        <img src={github} alt="github" className="link" />
                    </a>
                    <a href="https://www.facebook.com/sunny.jha.12327" target="_blank" rel="noopener noreferrer">
                        <img src={facebook} alt="fb" className="link" />
                    </a>
                    <a href="https://www.instagram.com/mr.sunny__jha/" target="_blank" rel="noopener noreferrer">
                        <img src={instagram} alt="insta" className="link" />
                    </a>
                </div>
            </form>
        </section>
    );
};

export default Contact;
