import React, { Component } from 'react'
import * as actionCreators from '../../store/actions/actions';
import { connect } from 'react-redux';
import MenuItemCard from '../Cards/Menu/ItemCard';

class Home extends Component {


    componentDidMount(){
        this.props.getMenuApi();
    }

    render() {
        return (
            <div>
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
        menu : state.menu
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
        getMenuApi : () => dispatch(actionCreators.getMenuApi()),
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Home);
