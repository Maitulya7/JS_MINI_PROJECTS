import React from "react";
import Herobg from "../public/images/hero.png"


export default function Hero(){
    return (
        <div className="hero">
            <div className="hero-left">
                <h1 className="hero-title" >nike air max </h1>
                <h1 className="hero-subtitle-1">jor <span className="hero-subtitle-2">dan</span></h1>
                <p>Feature: Extremely Lightweight Material, It Is Nice Shoes For Everyday Use, Or Wedding. This Unique Design And Stylish Shoes Is To Maximize Your Fashion; Care Instructions: Rotate Your Pair Of Shoes Once Every Other Day, Allowing Them To De-Odorize And Retain Their Shapes.</p>
                <div className="hero-information">
                    <h1>130$</h1>
                    <button className="hero-btn">add to cart </button>
                </div>
            </div>
            <div className="hero-right">
                <h1>JUST DO IT</h1>
                <img className="effect" src={Herobg}/>
                <img src={Herobg}/>
                
            </div>
        </div>
    )
}


