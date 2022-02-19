import React, { Component } from 'react'
import {addItemToCart, deleteItemFromCart} from '../../store/actions/apiCall';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/actions';


class NoActionItem extends Component {

    render() {
        return (
            <div className="container add-btn-2" style={{width: '100px', border: '0.5px solid black'}}>
                <div className="row d-flex"  style={{padding: '0 !important'}}>
                    <div className="col border-bottom border-top py-2 px-2" style={{ padding: '0', fontSize: '11px' }}>
                    <span>QTY: <b>{ this.props.count || 1}</b></span>
                    </div>
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
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(NoActionItem);
