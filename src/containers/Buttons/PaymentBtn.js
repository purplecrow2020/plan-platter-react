import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class PaymentBtn extends Component {
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
                                            <button className=" sec-btn border-0 py-3" style={{ color: '#000000', background: '#FEF5ED' }}>ABCD</button>
                                        </Link>
                                    </div>
                                    <div className="col">
                                        <Link to="/signup">
                                            <button className=" sec-btn border-0 py-3" style={{ color: '#ffffff', background: '#95CD41' }}>MAKE PAYMENT</button>
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
