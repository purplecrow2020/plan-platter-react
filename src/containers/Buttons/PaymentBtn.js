import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as apiCall from '../../store/actions/apiCall';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/actions';
import Swal from 'sweetalert2';

class PaymentBtn extends Component {

    placeOrder = () => {
        apiCall.orderAddItems({}).then((r)=>{
            Swal.fire(
                'WOOOHOOO!',
                'ORDER HAS BEEN PLACED!',
                'success'
            );
            Promise.all([
                this.props.callCartDetailsApi(),
                this.props.getMenuApi()
            ]);
        });
    }

    makePayment = () => {
        apiCall.completeOrder({}).then((r) => {
            Swal.fire(
                'PAID',
                'HOPE YOU ENJOYED THE FOOD!',
                'success'
            );
            Promise.all([
                this.props.callCartDetailsApi(),
                this.props.getMenuApi()
            ]);
            
        });
    }

    render() {
        return (
            <div className='container' style={{maxWidth: '500px'}}>
                <div className="row">
                    <div className="col" >
                        <section>
                            <div className="pb-4">
                                <div className="row my-2">
                                    <div className="col">
                                        <Link to="/login">
                                            <button className=" sec-btn border-0 py-3" style={{ color: '#000000', background: '#FEF5ED', border:'1px solid black' }} onClick={this.placeOrder}>PLACE ORDER</button>
                                        </Link>
                                    </div>
                                    <div className="col">
                                        <Link to="/signup">
                                            <button className=" sec-btn border-0 py-3" style={{ color: '#ffffff', background: '#916BBF', border:'1px solid white' }} onClick={this.makePayment}>MAKE PAYMENT</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </section>
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
        callCartDetailsApi: () => dispatch(actionCreators.getCartDetails()),
        getMenuApi : () => dispatch(actionCreators.getMenuApi()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PaymentBtn);
