import React from 'react';
// import RestoOfferCouponCarousel from '../RestoOfferCoupon/RestoOfferCouponCarousel';
import './index.css';

export default function RestaurantDetails() {
    return (
        <div className=" container my-4" style={{maxWidth: '500px'}}>
        <div className="row ">
            <a href="#home" className="text-decoration-none col-1 rd-icon-1" style={{cursor: 'pointer'}}><i class="fas fa-long-arrow-alt-left "></i> </a>
            <div className="col-9"></div>
            <a href="#wishlist" className="text-decoration-none col-1 rd-icon-1"><i className="fas fa-heart "></i> </a>
            <a href="#search" className="text-decoration-none col-1 rd-icon-1"><i className="fas fa-search "></i></a>
        </div>
        <h2 className="rd-heading-1">Burger King</h2>
        <div className="rd-text-1">
        <span>American, Fast Food </span>
        <span> Old Gurgaon (Zone 6) | 5.6 kms <i className="fas fa-sort-down"></i></span>
        </div> 
        <p className="rd-text-1"><i className="fa fa-info-circle " aria-hidden="true" ></i> Based on distance, an additional delivery fee will apply
        </p>

        <div className="row" style={{borderBottom: '1px dotted rgb(70, 62, 62)'}}></div>

        <div className="row mt-2">
            <div className="col-4">
                <span className="rd-heading-2 d-flex justify-content-center align-items-center"><i className="fas fa-star rd-icon-2"></i> 4.3 <i className="fas fa-chevron-right rd-icon-2"></i></span>
                <p className="rd-text-2 d-flex justify-content-center text-center ">1000<i className="fas fa-plus  rd-icon-3 pt-1 pr-1"></i> ratings</p>
            </div>
            <div className="col-4">
                <span className="rd-heading-2 d-flex justify-content-center">55 mins</span>
                <p className="rd-text-2 d-flex justify-content-center text-center"> Delivery Time</p>
            </div>
            <div className="col-4">
                <span className="rd-heading-2 d-flex justify-content-center">₹350</span>
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
