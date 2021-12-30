import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/actions';
import PastOrderSummaryCard from '../PastOrderSummaryCard';
import Features from './../Features';



class Account extends Component {

    componentDidMount(){
        this.props.callPastUserOrderSummaryApi();
    }

    render() {
        return (
                    <div className="container" style={{ maxWidth: '500px', marginBottom: '150px' }}>
                        <div className="row mt-5">
                            <div className="col-10 " >
                                <h4 className="d-flex justify-content-start">{this.props.userDetails?.name || ''}</h4>
                                <p className="d-flex justify-content-start ct-text">{this.props.userDetails?.mobile} 	&nbsp; &#8226; 	&nbsp; {this.props.userDetails?.email_id}</p>
                            </div>
                            <div className="col-2 ">
                                <a href="#edit" style={{ textDecoration: 'none', color: '#ff8702', fontSize: '18px', fontWeight: '400' }}>EDIT</a>
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col">
                                <div className="u-line" style={{ borderColor: '3px solid black' }}></div>
                            </div>
                        </div>
                        <h5 className="ct-heading pt-4 pb-3" style={{ background: '#f4f4f5',paddingLeft: '10px' }}>PAST ORDERS</h5>
                        {
                            this.props.pastUserOrders && this.props.pastUserOrders.map(order=>{
                                return (
                                    <PastOrderSummaryCard  vendor_name={order.vendor_name} vendor_address={order.vendor_address} order_summary_string={order.order_string}  bill_string={order.bill_string} />
                                )
                            })
                        }

                        <div className='row'>
                            <div className='col'>
                                <Features/>
                            </div>
                        </div>
                         <div style={{ background: '#f4f4f5' }}>
                            <div className="row" >
                                <div className="col" >
                                    <section className="my-4 py-3 d-flex justify-content-center">
                                        <p className="ct-text">&#64;Copyright 2022, PLAN N PLATTER Version 1.0.0</p>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                    
            )   
    }
}

const mapStateToProps = (state) => {
    return {
        pastUserOrders: state.order_history,
        userDetails: state.user_details,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        callPastUserOrderSummaryApi: () => dispatch(actionCreators.getUserOrderHistory())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Account);