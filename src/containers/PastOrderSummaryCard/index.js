import React, { Component } from 'react'

 class PastOrderSummaryCard extends Component {
    render() {
        return (
            <div>
                <div className="pb-4" style={{ background: '#fff' }}>
                    <div className="row pt-4" >
                        <div className="col-9">
                            <h5 className="ct-heading ">{this.props.vendor_name}</h5>
                            <p className="ct-text mb-0 mt-0">{this.props.vendor_address}</p>
                            <p className="ct-text">₹{this.props.bill_string} <i class="fas fa-greater-than " style={{ color: ' #7e808c' }}></i> </p>
                        </div>
                        <div className="col-3">
                            <p className="d-flex">Completed <i class="fas fa-check px-1 py-1 rounded-circle" style={{ background: ' #60b246', color: '#fff', }}></i></p>
                        </div>
                    </div>

                    <div className="row mb-2">
                        <div className="col">
                            <div className="u-d-line" ></div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col ">
                            <p className="ct-text mb-0">
                                {
                                    this.props.order_summary_string
                                }
                            </p>
                            {/* <span className="ct-text mt-2">Nov 18, 2018 10:30 PM</span> */}
                        </div>
                    </div>

                    <div className="row my-2">
                        <div className="col d-flex">
                            <button className=" sec-btn" style={{ color: '#fc8019', borderColor: '#fc8019' }}>REORDER</button>
                        </div>
                        <div className="col">
                            <button className=" sec-btn" style={{ color: '#282c3f', borderColor: '#282c3f' }}>RATE FOOD</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default PastOrderSummaryCard;