import React, { Component } from 'react'
import {addItemToCart} from '../../store/actions/apiCall';
import * as actionCreators from '../../store/actions/actions';
import { connect } from 'react-redux';

class AddItem extends Component {

    addItemHandler = function(id) {
        addItemToCart({
            menu_id: id
        }).then(()=>{
            this.props.callCartDetailsApi();
        }).catch(err=>console.log(err));;
    }

    render() {
        return (
            <div className="container add-btn" style={{ maxWidth: '90px', height: 'auto' }}>
                <div >
                    <a href="#minus" className="d-flex text-start">
                        <i className="fas fa-minus" ></i>
                    </a>
                </div>
                <div className="px-2" >
                    <a onClick={()=> this.addItemHandler(this.props.menu_item_id)}>
                        ADD
                    </a>
                </div>
                <div >
                    <a className="d-flex text-end">
                        <i className="fas fa-plus" ></i>
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


export default connect(mapStateToProps,mapDispatchToProps)(AddItem);
