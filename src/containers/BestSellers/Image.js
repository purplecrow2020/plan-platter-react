import React from 'react';
import IndianFoodImg from '../../images/Noth-indian-food.png';


export default function CurationCard() {
    return (
        <div className="container mt-2">
        <div className="">
          <img src={IndianFoodImg} className="img-fluid" alt="north-indian-img" />
          <a href="#curation-indian-food" style={{cursor: 'pointer'}}>
          </a>
        </div>
        <div className="tsn-text-2 text-center">
            <span> North <br/> Indian </span> 
        </div>
    </div>
    )
}
