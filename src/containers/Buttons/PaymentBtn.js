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
                                            <button className=" sec-btn" style={{ color: '#fc8019', borderColor: '#fc8019' }}>REGISTER</button>
                                        </Link>
                                    </div>
                                    <div className="col">
                                        <Link to="/signup">
                                            <button className=" sec-btn" style={{ color: '#282c3f', borderColor: '#282c3f' }}>GUEST</button>
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
