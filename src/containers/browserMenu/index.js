import React, {useState} from 'react';
import './index.css'                                          

export default function BrowserMenu() {
   
    return (
        <>
            <div className="box container d-flex justify-content-center bg-white" >  
                <a className="button text-decoration-none" href="#popup1"><i className="fas fa-utensils"></i>BROWES MENU</a>
            </div>
            <div id="popup1" className="overlay" style={{zIndex: '99'}}>
                <div className="popup">
                    <h2>BROWES MENU</h2>
                    <a className="close" href="#time" >&times;</a>
                    <div className="content">
                        <ul>
                            <li>
                                <div className="popup-row">
                                    <div className="col-cat">Recommended</div>
                                    <div className="col-number">14</div>
                                </div>
                            </li>
                            <li>
                                <div className="popup-row">
                                    <div className="col-cat">Navratri Special</div>
                                    <div className="col-number">13</div>
                                </div>
                            </li>
                            <li>
                                <div className="popup-row">
                                    <div className="col-cat">All Day Breakfast</div>
                                    <div className="col-number">2</div>
                                </div>
                            </li>
                            <li>
                                <div className="popup-row">
                                    <div className="col-cat">Handmade Chocolates</div>
                                    <div className="col-number">1</div>
                                </div>
                            </li>
                            <li>
                                <div className="popup-row">
                                    <div className="col-cat">Breakfast Special</div>
                                    <div className="col-number">1</div>
                                </div>
                            </li>
                            <li>
                                <div className="popup-row">
                                    <div className="col-cat">Summer Coolers</div>
                                    <div className="col-number">10</div>
                                </div>
                            </li>
                            <li>
                                <div className="popup-row">
                                    <div className="col-cat">Pickel Mania</div>
                                    <div className="col-number">4</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
