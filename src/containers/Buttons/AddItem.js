import React, { Component } from 'react'
import {addItemToCart} from '../../store/actions/apiCall';
import * as actionCreators from '../../store/actions/actions';
import { connect } from 'react-redux';
import Swal from 'sweetalert2';

class AddItem extends Component {

    addItemHandler = (id) => {
        console.log("IDS ", id);
        if (!this.props.is_order_active_by_peer) {
            addItemToCart({
                menu_id: id
            }).then(()=>{
                Promise.all([
                    this.props.callCartDetailsApi(),
                    this.props.getMenuApi()
                ]);
            }).catch(err=>console.log(err));
        } else {
            Swal.fire("ORDER IS ALREADY ACTIVE ON TABLE");
        }
        
    }

    render() {
        return (
            <div className="container add-btn" style={{ maxWidth: '90px', height: 'auto' }}>
                <div >
                    {/* <a href="#minus" className="d-flex text-start">
                        <i className="fas fa-minus" ></i>
                    </a> */}
                </div>
                <div className="px-2" >
                    <a onClick={()=> this.addItemHandler(this.props.menu_item_id)}>
                        ADD
                    </a>
                </div>
                <div >
                    {/* <a className="d-flex text-end">
                        <i className="fas fa-plus" ></i>
                    </a> */}
                </div>
            </div>
        )
    }
}





const mapStateToProps = (state) => {
    return {
        is_order_active_by_peer: state.is_order_active_by_peer,
    }

}

const mapDispatchToProps = (dispatch) => {
    return { 
        callCartDetailsApi : () => dispatch(actionCreators.getCartDetails()),
        getMenuApi : () => dispatch(actionCreators.getMenuApi()),
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(AddItem);
