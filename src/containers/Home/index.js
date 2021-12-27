import React, { Component } from 'react'
import * as actionCreators from '../../store/actions/actions';
import { connect } from 'react-redux';
import MenuItemCard from '../Cards/Menu/ItemCard';
import BestSellerCaraousel from '../BestSellers/BestSellerCaraousel';
import Accordion from '../CategoryAccordion/Accordion';
import '../CategoryAccordion/accordion.css';
import Search from '../Search/SearchBar';
import NavBar from '../NavBar';
class Home extends Component {


    componentDidMount(){
        this.props.getMenuApi();
        this.props.getBestSellerApi();
        this.props.callCartDetailsApi();
        this.props.getUserDetails();
    }

    render() {
        return (
            <div className='container' style={{maxWidth: '500px', marginBottom:'150px'}}>
                {/* Nav BAR */}
                <NavBar  vendor_details={this.props.vendor_details} user_details={this.props.user_details} />
                {/* SEARCH BAR */}
                <Search />
                {/* render BestSellers */}
                {
                    this.props.bestsellers 
                        ? <> 
                        {/* <BestSellerCarousal items={this.props.bestsellers}/> */}
                        <BestSellerCaraousel items={this.props.bestsellers}/> 
                        </>
                        : ' Loading...'
                }
                {/* render MENUS */}
                {/* {
                    
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
                } */}

                 {/* render Menu in accordion */}
                 <Accordion menu={this.props.menu}/>                
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        menu : state.menu,
        bestsellers: state.bestsellers,
        menu_search_results: state.menu_search_results,
        vendor_details: state.vendor_details,
        user_details: state.user_details,

    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
        getMenuApi : () => dispatch(actionCreators.getMenuApi()),
        getBestSellerApi: () => dispatch(actionCreators.getBestSellerApi()),
        getMenuSearchesApi: (item_search_string) => dispatch(actionCreators.getMenuSearchesApi(item_search_string)),
        callCartDetailsApi: () => dispatch(actionCreators.getCartDetails()),
        getUserDetails: () =>  dispatch(actionCreators.getUserDetails())
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Home);
