import React ,{useRef} from "react";
import "./contact.css";
import linkdin from "../../assets/linkedin.png";
import github from "../../assets/github.png";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const form =useRef();
    const sendEmail =(e) => {
        e.preventDefault();
        emailjs.sendForm("service_lbm3lls","template_442o53r",form.current,"WJ8PEI-RjSK6c8VCX").then((result) => {
            console.log(result.text);
            e.target.reset();
            alert("Email Sent !");
        },(error)=>{
            console.log(error.text);
        });
    };
    return (
        <section id="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Please fill out the form to discuss any work opportunities.</span>
            <form className="contactForm" ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder="Your Name" name="your_name"/>
                <input type="email" className="email" placeholder="Your Email" name="your_email"/>
                <textarea className="msg" name="message"  rows="5"></textarea>
                <button type="submit" value="Send" className="submitBtn">Submit</button>
                <div className="links">
                    <img src={linkdin} alt="lind" className="link" />
                    <img src={github} alt="git" className="link" />
                    <img src={facebook} alt="fb" className="link" />
                    <img src={instagram} alt="insta" className="link" />
                </div>
            </form>
        </section>
    );
}
export default Contact;