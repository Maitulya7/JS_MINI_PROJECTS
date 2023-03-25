import React from "react";
import Card_1 from "../public/images/card_1.png"
import Card_2 from "../public/images/card_2.png"
import Stars from "../public/images/stars.png"

export default function Cards(){
    return(
        <div className="cards">
            <div className="shoes-cards">
                <div className="shoes-cards-1">
                    <img className="shoes-img" src={Card_1}/>
                    <h1>NIKE AIR JORDAN 7  </h1> <span>120$</span>
                    <img className="shoes-rating" src={Stars}/>
                </div>
                <div className="shoes-cards-2">
                    <img className="shoes-img-2" src={Card_2}/>
                    <h1>NIKE AIR JORDAN 8  </h1> <span>120$</span>
                    <img className="shoes-rating-2" src={Stars}/>
                </div>
               
            </div>
        </div>
    )
}