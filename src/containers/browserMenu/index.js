import React from 'react';
import './index.css'                                          

export default function BrowserMenu() {
    return (
        <>
            <div className="box container d-flex justify-content-center" >  
                <a className="button text-decoration-none" href="#popup1">
                    {/* <i className="fas fa-utensils"></i> */}
                    <i class="far fa-bell"></i>
                    Call Services </a>
            </div>
            <div id="popup1" className="overlay">
                <div className="popup">
                    <h2>Services</h2>
                    <a className="close text-decoration-none" href="#time">&times;</a>
                    <div className="content">
                        <ul style={{}}>
                            <li>
                                <a href='#clean-table' className="popup-row text-decoration-none">
                                    <div className="col-cat">Clean up table</div>
                                    <div className="col-number"><i class="fas fa-broom"></i></div>
                                </a>
                            </li>
                            <li>
                                <a href='#refill-water' className="popup-row text-decoration-none">
                                    <div className="col-cat">Refill water</div>
                                    <div className="col-number"><i class="fas fa-wine-glass-alt"></i></div>
                                </a>
                            </li>
                            <li>
                                <a href='#refreshment' className="popup-row text-decoration-none">
                                    <div className="col-cat">Refreshment</div>
                                    <div className="col-number"><i class="fab fa-react"></i></div>
                                </a>
                            </li>
                            <li>
                                <a href='#finger-bowl' className="popup-row text-decoration-none">
                                    <div className="col-cat">Finger Bowl</div>
                                    <div className="col-number"><i class="fas fa-hands-wash"></i></div>
                                </a>
                            </li>
                            <li>
                                <a href='#bill' className="popup-row text-decoration-none">
                                    <div className="col-cat">Bill</div>
                                    <div className="col-number"><i class="fas fa-file-invoice"></i></div>
                                </a>
                            </li>
                            <li>
                                <a href='#call-waiter' className="popup-row text-decoration-none ">
                                    <div className="col-cat">Call a Waiter</div>
                                    <div className="col-number"><i class="fas fa-male"></i></div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
