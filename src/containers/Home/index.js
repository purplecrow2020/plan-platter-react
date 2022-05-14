import React, { Component } from 'react'
import * as actionCreators from '../../store/actions/actions';
import { connect } from 'react-redux';
import MenuItemCard from '../Cards/Menu/ItemCard';
import BestSellerCaraousel from '../BestSellers/BestSellerCaraousel';
import Accordion from '../CategoryAccordion/Accordion';
import '../CategoryAccordion/accordion.css';
import Search from '../Search/SearchBar';
import NavBar from '../NavBar';
import BrowserMenu from '../BrowseMenuItems';
class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            accordionRefs: [],
            menu_cats_selected_index: 0,
            menuItemRefs: {}
        }
    }

    componentDidMount(){
        this.props.getMenuApi();
        this.props.getBestSellerApi();
        this.props.callCartDetailsApi();
        this.props.getUserDetails();
    }

    setAccordionRefs = (refrences) => {
        this.setState({
            accordionRefs: refrences
        });
    }

    setMenuItemRefs = (refrences) => {
        this.setState({
            menuItemRefs: refrences
        })
    }

    setCustomMenuCategory = (index, item_id) => {
        this.setState({
            menu_cats_selected_index: index,
        }, () => {
            this.state.menuItemRefs[item_id].current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        })
    } 


    render() {
        return (
            <div className='container' style={{maxWidth: '500px', marginBottom:'150px'}}>

                {/* Nav BAR */}
                <NavBar  vendor_details={this.props.vendor_details} user_details={this.props.user_details}  enable_bell_icon={true}/>
                {/* SEARCH BAR */}
                <Search menuCategoryRefs={this.state.menuItemRefs} setCustomMenuCategoryIndex={this.setCustomMenuCategory}/>
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
                <Accordion menu={this.props.menu} setMenuAccordionRefs={this.setAccordionRefs} custom_selected_index={this.state.menu_cats_selected_index} setMenuItemRefs={this.setMenuItemRefs}/>    
                <div style={{position: 'fixed', top: window.innerHeight-130, left: (window.innerWidth-200)/2}}>
                <BrowserMenu menuItems={this.props.menu} menuCategoryRefs={this.state.accordionRefs} customMenuCatSelectionHandler={this.setCustomMenuCategory}/>            
                </div>
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
