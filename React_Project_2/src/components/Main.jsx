import React from "react";
import Herobg from "../images/hero.png"
import play from "../images/play.png"
import img1 from "../images/1.png"
import img2 from "../images/2.png"
import img3 from "../images/3.png"
import img4 from "../images/4.png"


export default function Hero(){
    return(
      <div className="hero-section">

            <div className="hero-section-left">
                <h1>Launch your best product through the Metaverse.</h1>
                <p>We provide the best service for your company product in the real world</p>

                    <div className="hero-footer">
                        <button className="hero-btn">Get Started</button>
                        <img className="hero-footer-img" src={play}/>
                        <h3>Play Demo</h3>
                    </div>

                <p className="hero-section-footer-p">Brands that trusts us</p>    

                <div className="hero-section-logos">
                    <img src={img1}/>
                    <img src={img2}/>
                    <img src={img3}/>
                    <img src={img4}/>
                   
                </div>
              
            </div>
        <div className="hero-section-right">
        <img className="hero-img" src={Herobg}/>
        </div>
       
      </div>
    )      
}