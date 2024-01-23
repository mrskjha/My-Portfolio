import React from "react";
import "./skills.css";
import html from "../../assets/html.png"
import css from "../../assets/css.png"
import js from "../../assets/js.png"
import bootstrap from "../../assets/bootstrap.png"
import mysql from "../../assets/mysql.png"
import react from "../../assets/react.png"

const Skills = () => {
    return (
        <section id="skills">
            <span className="skillTitle">What I Learn</span>
            <span className="skillDesc">Here i lernt till now this day and I try to learn what I am lack in skills I have making up for with my determination to learn</span>
            <div className="skillBars">
                <div className="skillBar">
                    <h2>Language:</h2>
                    <div className="skillBarText">
                    <img src={html} alt="html" className="skillBarImg" />
                        <p>HTML</p>
                        <img src={css} alt="css" className="skillBarImg" />
                        <p>CSS</p>
                        <img src={js} alt="js" className="skillBarImg" />
                        <p>Java Script</p>
                    </div>
                </div>
                <div className="skillBar">
                    <div className="skillBarText">
                        <h2>Freamworks:</h2>
                        <img src={bootstrap} alt="botsp" className="skillBarImg" />
                        <p>Bootstrap</p>
                    </div>
                </div>
                <div className="skillBar">
                    <div className="skillBarText">
                        <h2>Libraries:</h2>
                        <img src={react} alt="rect" className="skillBarImg" />
                        <p>React</p>
                    </div>
                </div>
                <div className="skillBar">
                    <div className="skillBarText">
                        <h2>Database:</h2>
                        <img src={mysql} alt="DB" className="skillBarImg" />
                        <p>My SQL</p>
                    </div>
                </div>
            </div>


        </section>
    )
};
export default Skills;