import React, { Component } from 'react'
import * as actionCreators from '../../store/actions/actions';
import { connect } from 'react-redux';
import MenuItemCard from '../Cards/Menu/ItemCard';
import BestSellerCaraousel from '../BestSellers/BestSellerCaraousel';
import Accordion from '../CategoryAccordion/Accordion';
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
                            
                            <div className='row'>
                                <div className='col'>
                                <p className='ct-heading'>{item_category}</p>
                                {
                                    this.props.menu[item_category].map((item, index) => {
                                        return (
                                            <MenuItemCard item_name={item.name} item_img_url={item.img_url} item_price={item.price} />
                                        )
                                    })
                                }
                                </div>
                            </div>
                            
                        )
                    })
                }

                 {/* render Menu in accordion */}
                 <Accordion menu={this.props.menu}/>                
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
