// import socket from '../../common/socket';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as apiCall from '../../store/actions/apiCall';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/actions';
import Swal from 'sweetalert2';
// import  { Navigate } from 'react-router-dom';
import { withRouter } from '../../components/RouterWrapper';
class PaymentBtn extends Component {

    placeOrder = () => {
        apiCall.orderAddItems({}).then((r)=>{

        if (this.props.socket_connection !== null) {
            this.props.socket_connection.emit('ORDER_FOOD', {
                authKey: localStorage.getItem('authKey'),
                vendor_id: localStorage.getItem('vendor_id'),
                table_id: localStorage.getItem('table_id'),
            });
        }
       

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
        apiCall.getUserDetails().then((res)=>{
            const details = res.data.data;
            console.log(res);
            if(typeof details.mobile !== 'undefined' && details.mobile != null && details.mobile.length > 0) {
                console.log('mobile nnumber exists');
                if (this.props.socket_connection !== null) {
                    this.props.socket_connection.emit("CLEAR_TABLE", {
                        authKey: localStorage.getItem('authKey'),
                        vendor_id: localStorage.getItem('vendor_id'),
                        table_id: localStorage.getItem('table_id'),
                    });
                }
               
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
            } else {
                // take to sign up page
                console.log('guest login complete');
                // <navigate to="/cart" />
                this.props.navigate("/guest-login-complete");
                // this.props.history.push('/cart');
                // return <Navigate to="/dashboard" replace={true} />

            }   
           
        }).catch(e=>{ 
            console.log(e);
        });
    }

    render() {
        return (
            <React.Fragment>
                {
                    !this.props.is_order_active_by_peer ? 
                    <div className='container' style={{maxWidth: '500px'}}>
                        <div className="row">
                                <div className="col" >
                                    <section>
                                        <div className="pb-4">
                                            <div className="row my-2">
                                                {
                                                    this.props.to_order && (this.props.order_in_progress || this.props.order_delivered) && this.props.disable_payment 
                                                    ? 
                                                    <div className="col" >
                                                        <Link to="/login">
                                                            <button className=" sec-btn border-0 py-3" style={{ color: '#000000', background: '#FEF5ED', border:'10px solid black' }} onClick={this.placeOrder}>PLACE ORDER</button>
                                                        </Link>
                                                    </div>
                                                    : ''
                                                }
                                                {
                                                    this.props.to_order && !(this.props.order_in_progress || this.props.order_delivered) && !this.props.disable_payment 
                                                    ?  
                                                    <div className="col" >
                                                        <Link to="/login">
                                                            <button className=" sec-btn border-0 py-3" style={{ color: '#000000', background: '#FEF5ED', border:'10px solid black' }} onClick={this.placeOrder}>PLACE ORDER</button>
                                                        </Link>
                                                    </div>
                                                    : ''
                                                }
                                                {
                                                    !this.props.disable_payment 
                                                    ?
                                                    <div className="col">
                                                        <Link to="/signup">
                                                            <button className=" sec-btn border-0 py-3" style={{ color: '#ffffff', background: '#916BBF', border:'1px solid white' }} onClick={this.makePayment}>MAKE PAYMENT</button>
                                                        </Link>
                                                    </div>
                                                    : ''
                                                }
                                            
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>:<></>
                }
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        is_order_active_by_peer: state.is_order_active_by_peer,
        socket_connection: state.socket_connection,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        callCartDetailsApi: () => dispatch(actionCreators.getCartDetails()),
        getMenuApi : () => dispatch(actionCreators.getMenuApi()),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PaymentBtn));
