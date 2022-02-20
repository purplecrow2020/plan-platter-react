import React, {Component} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BestSellerCard from './BestSellerCard';


class BestSellerCaraousel extends Component {

    settings = {
        dots: false,
        infinite: true,
        autoplaySpeed: 1000,
        autoplay: true,
        slidesToShow: 2,
        slidesToScroll: 1,
    };

    render() {
        return (
            <div className="container my-3" style={{maxWidth: '500px', paddingLeft: '0px'}}>
            <h2 className="tsn-heading-1">Popular Curations</h2>
            <Slider {...this.settings}>
            {
                    this.props.items && this.props.items.map((item, index) => {
                        return (
                            <div style={{border: '1px solid red'}}>
                                
                                <BestSellerCard item_name={item.name} item_rating={item.rating} item_img={item.img_url} item_price={item.price}/>
                                
                            </div>
                        )
                    })
            }
            </Slider>

        </div>
        )
    }
}

export default  BestSellerCaraousel;
