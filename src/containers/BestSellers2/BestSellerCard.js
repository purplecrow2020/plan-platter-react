import React from 'react';
import FassosImg from '../../images/fasso.png'


export default function BestSellerCard(props) {
   
    return (
        <div className="  mt-3 mb-5 container">
            
            <div style={{maxWidth: '100px', height: '100px', borderRadius: '50%', border: '1px solid gray', position: 'relative'}}>
                <div className="d-flex align-items-center align-middle mt-2">
                <img src={props.item_img} className="img-fluid " alt="fasso-img" style={{maxWidth: '70px', height:'70p'}}/>
                </div>
                <div className="d-flex justify-content-center">
                <a href="#off" className="off-btn text-decoration-none">
                    <span className="d-flex align-items-center"><span className='pt-n-1 pr-1'>&#10032; </span> {props.item_rating} </span> 
                </a>
                </div>
                <div className=" mt-4 pt-3 text-center" style={{position: 'relative'}}>
                    <span className="tsn-text-2 text-wrap"> {props.item_name}</span>
                    <p className="tsn-text-3">₹{props.item_price}</p>
                </div>
            </div>

        </div>
    )
}
