import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BestSellerCard from './BestSellerCard';

export default function BestSellerCarousal() {
    const settings = {
        dots: false,
        infinite: true,
        autoplaySpeed: 1000,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className=" container mt-5" style={{ paddingLeft: '0px' }}>
            <h2 className="tsn-heading-1">Popular Brands</h2>
            <Slider {...settings}>
                {
                   this.props.items && this.props.items.map((item, index) => {
                        return (
                            <div>
                                <BestSellerCard />
                            </div>
                        )
                    })
                }

            </Slider>

        </div>
    )
}
