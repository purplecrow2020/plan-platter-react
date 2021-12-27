import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/actions';
import PastOrderSummaryCard from '../PastOrderSummaryCard';
class Account extends Component {

    componentDidMount(){
        this.props.callPastUserOrderSummaryApi();
    }

    render() {
        return (
                    <div className="container" style={{ maxWidth: '500px', marginBottom: '150px' }}>
                        <h5 className="ct-heading pt-4 pb-3" style={{ background: '#f4f4f5',paddingLeft: '10px' }}>PAST ORDERS</h5>
                        {
                            this.props.pastUserOrders && this.props.pastUserOrders.map(order=>{
                                return (
                                    <PastOrderSummaryCard  vendor_name={order.vendor_name} vendor_address={order.vendor_address} order_summary_string={order.order_string}  bill_string={order.bill_string} />
                                )
                            })
                        }
                    </div>
            )   
    }
}

const mapStateToProps = (state) => {
    return {
        pastUserOrders: state.order_history,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        callPastUserOrderSummaryApi: () => dispatch(actionCreators.getUserOrderHistory())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Account);