import React, { Component } from 'react'
import {addItemToCart, deleteItemFromCart} from '../../store/actions/apiCall';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/actions';


class UpdateItem extends Component {

    deleteItemHandler = (id) => {
        deleteItemFromCart({
            menu_item_id: id
        }).then(()=>{
            this.props.callCartDetailsApi();
        }).catch(err=>console.log(err));
    }

    addItemHandler = function(id) {
        addItemToCart({
            menu_id: id
        }).then(()=>{
            this.props.callCartDetailsApi();
        }).catch(err=>console.log(err));;
    }


    render() {
        return (
            <div className="container add-btn-2" style={{width: '100px'}}>
                <div className="row d-flex"  style={{padding: '0 !important'}}>
                    <a className="col-4 border" style={{ padding: '0' }} onClick={()=> this.deleteItemHandler(this.props.menu_item_id)}>
                        <i className="fas fa-minus py-2  px-2" ></i>
                    </a>
                    <div className="col-4 border-bottom border-top py-2 px-2" style={{ padding: '0', fontSize: '11px' }}>
                    { this.props.count || 1}
                    </div>
                    <a className="col-4 border" style={{ padding: '0' }} onClick={()=> this.addItemHandler(this.props.menu_item_id)}>
                        <i className="fas fa-plus py-2  px-2" ></i>
                    </a>
                </div>
            </div>
        )
    }
}



const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
        callCartDetailsApi : () => dispatch(actionCreators.getCartDetails()),
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(UpdateItem);
