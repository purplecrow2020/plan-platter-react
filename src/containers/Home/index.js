import React, { Component } from 'react'
import * as actionCreators from '../../store/actions/actions';
import { connect } from 'react-redux';
import MenuItemCard from '../Cards/Menu/ItemCard';
import BestSellerCaraousel from '../BestSellers/BestSellerCaraousel';
import Accordion from '../CategoryAccordion/Accordion';
import Accordion3 from '../CategoryAccordion/Accordion3';
import '../CategoryAccordion/accordion.css';


class Home extends Component {


    componentDidMount(){
        this.props.getMenuApi();
        this.props.getBestSellerApi();

    }

    render() {
        return (
            <div className='container' style={{maxWidth: '500px', marginBottom:'150px'}}>
                {/* render BestSellers */}
                {
                    this.props.bestsellers 
                        ? <> 
                        {/* <BestSellerCarousal items={this.props.bestsellers}/> */}
                        <BestSellerCaraousel items={this.props.bestsellers}/> 
                        </>
                        : ''
                }
                {/* render MENUS */}
                {
                    
                    this.props.menu && Object.keys(this.props.menu).map(item_category => {
                        return (
                            
                            <div>
                                <p>{item_category}</p>
                                {
                                    this.props.menu[item_category].map((item, index) => {
                                        return (
                                            <MenuItemCard item_name={item.name} item_img_url={item.img_url} item_price={item.price} />
                                        )
                                    })
                                }
                            </div>
                            
                        )
                    })
                }

                 {/* render Menu in accordion */}

                 <Accordion/>
                 {/* <Accordion2/> */}
                 {/* <Accordion3/> */}

                
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        menu : state.menu,
        bestsellers: state.bestsellers
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
        getMenuApi : () => dispatch(actionCreators.getMenuApi()),
        getBestSellerApi: () => dispatch(actionCreators.getBestSellerApi())
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Home);
