import React from "react";
import "./works.css";
import tictacttoe from "../../assets/tictactoe.png"
import weather from "../../assets/weather.png"
 const Works = ()=>{
    return(
        <section id="works">
            <h2 className="worksTitle">My Works</h2>
            <span className="worksDesc">I take preide in paying attention to the samallest details and making sure that my works<br/> is pixel perfect. I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence</span>
            <div className="worksImgs">
                <img src={tictacttoe} alt="ttt" className="worksImg" />
                <img src={weather} alt="weth" className="worksImg" />
            </div>
            <button className="workBtn">See More</button>
        </section>
    );
}

export default Works;
