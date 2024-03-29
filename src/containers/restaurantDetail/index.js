import React from 'react';
// import RestoOfferCouponCarousel from '../RestoOfferCoupon/RestoOfferCouponCarousel';
import './index.css';

export default function RestaurantDetails(props) {
    return (
        <div className=" container my-4" style={{maxWidth: '500px'}}>
        <div className="row ">
            {/* <a href="#home" className="text-decoration-none col-1 rd-icon-1" style={{cursor: 'pointer'}}><i class="fas fa-long-arrow-alt-left "></i> </a>
            <div className="col-9"></div> */}
            {/* <a href="#wishlist" className="text-decoration-none col-1 rd-icon-1"><i className="fas fa-heart "></i> </a>
            <a href="#search" className="text-decoration-none col-1 rd-icon-1"><i className="fas fa-search "></i></a> */}
        </div>
        <h2 className="rd-heading-1">{props.details?.name || 'hariraj'}</h2>
        <div className="rd-text-1">
        {/* <span>American, Fast Food </span>
        <span> Old Gurgaon (Zone 6) </span> */}
        </div> 
        <div className="row" style={{borderBottom: '1px dotted rgb(70, 62, 62)'}}></div>

        <div className="row mt-2">
            <div className="col-4">
                <span className="rd-heading-2  justify-content-center align-items-center" style={{marginLeft: '25px'}}> <i className="fas fa-star rd-icon-2"></i> 4.3</span>
                <p className="rd-text-2 d-flex justify-content-center text-center ">1000+ ratings</p>
            </div>
            <div className="col-4">
                <span className="rd-heading-2 d-flex justify-content-center">25 mins</span>
                <p className="rd-text-2 d-flex justify-content-center text-center"> Order Time</p>
            </div>
            <div className="col-4">
                <span className="rd-heading-2 d-flex justify-content-center">₹550</span>
                <p className="rd-text-2 d-flex justify-content-center">Cost for 2</p>
            </div>
        </div>
        <a href="#safety-link" className="row text-decoration-none border border-3 rounded">
            <div className="rd-heading-3 py-2">
            <i className="fas fa-shield-alt"></i> 
            <span> &nbsp;This restaurant follows Best Safety Standards <i className="fas fa-chevron-right "></i></span> 
            </div>
        </a>
        <div className="row mt-3" style={{borderBottom: '1px dotted rgb(70, 62, 62)'}}></div>
        {/* <RestoOfferCouponCarousel /> */}
    </div>
    )
}
