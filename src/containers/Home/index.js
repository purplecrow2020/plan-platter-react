import React, { Component } from 'react'
import * as actionCreators from '../../store/actions/actions';
import { connect } from 'react-redux';
import MenuItemCard from '../Cards/Menu/ItemCard';
import BestSellerCaraousel from '../BestSellers/BestSellerCaraousel';

class Home extends Component {


    componentDidMount(){
        this.props.getMenuApi();
        this.props.getBestSellerApi();

    }

    render() {
        return (
            <div>
                {/* render BestSellers */}
                {
                    this.props.bestsellers 
                        ? <BestSellerCaraousel items={this.props.bestsellers}/> 
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
