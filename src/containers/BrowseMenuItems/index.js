import React,  { useState } from 'react';
import '../browserMenu/index.css'  
import Swal from 'sweetalert2';  
import {
    addQuickRequest
}   from '../../store/actions/apiCall';                                 

import { Link } from 'react-router-dom';
export default function BrowserMenu(props) {
    console.log(props.menuItems);
    const  toggleDisplay = () => {
        setOverlayDisplayStyle(!overlayDisplayStyle);
    }
    const [overlayDisplayStyle, setOverlayDisplayStyle] = useState(false);
    const visibleStyle = {
        visibility: 'visible',
        opacity: 1,
    }
    const invisibleStyle= {
        visibility: 'hidden',
        opacity: 0,
    }
    
    const registerQuickRequest = (index) => {
        // addQuickRequest({request})
        toggleDisplay();
        if (props.menuCategoryRefs.length >= 1) {
            props.menuCategoryRefs[index].current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } 
        props.customMenuCatSelectionHandler(index);
        // Swal.fire({
        // position: 'bottom',
        // icon: 'success',
        // title: '👍 request assigned',
        // showConfirmButton: false,
        // height: '150px',
        // timer: 1000,
        // })
    }
    // return (box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    return (
        <>
            <div className="box container d-flex justify-content-center" onClick={toggleDisplay}>  
                    <div style={{height: '38px', width: '200px', background:'white', borderRadius:'45px', textAlign:'center', padding:'4px', boxShadow:'0px 15px 20px rgba(184, 170, 249, 0.4)', border: '0.4px solid rgb(211,211,211)'}}>BROWSE MENU <i className="fa-solid fa-fork" style={{color:'red'}} ></i></div>
            </div>
            <div id="popup1" className="overlay" style={overlayDisplayStyle ? visibleStyle: invisibleStyle}>
                <div className="popup">
                    <h2>MENU</h2>
                    <span className="close text-decoration-none" onClick={toggleDisplay}>&times;</span>
                    <div className="content">
                        <ul style={{}}>
                            {
                                props.menuItems && Object.keys(props.menuItems).map((item_category, index) => {
                                    return (
                                        <li>
                                            <div className="popup-row text-decoration-none" onClick={() => registerQuickRequest(index)} >
                                                <div className="col-cat">{item_category}</div>
                                                <div className="col-number">{props.menuItems[item_category].length}</div>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                            {/* <li>
                        
                                <div className="popup-row text-decoration-none"      onClick={()=>registerQuickRequest('clean the table')}>
                                    <a href="#ACCORDION_2"> menuitem</a>
                                    <div className="col-number"><i class="fas fa-broom"></i></div>
                                </div>
                            </li>
                            <li>
                                <div className="popup-row text-decoration-none" onClick={() => registerQuickRequest('refill water')}>
                                    <div className="col-cat">Refill water</div>
                                    <div className="col-number"><i class="fas fa-wine-glass-alt"></i></div>
                                </div>
                            </li>
                            <li>
                                <div  className="popup-row text-decoration-none" onClick={() => registerQuickRequest('refreshment')}>
                                    <div className="col-cat" >Refreshment</div>
                                    <div className="col-number"><i class="fab fa-react"></i></div>
                                </div>
                            </li>
                            <li>
                                <div  className="popup-row text-decoration-none" onClick={() => registerQuickRequest('finger bowl')}>
                                    <div className="col-cat">Finger Bowl</div>
                                    <div className="col-number"><i class="fas fa-hands-wash"></i></div>
                                </div>
                            </li>
                            <li>
                                <div  className="popup-row text-decoration-none" onClick={() => registerQuickRequest('request bill')}>
                                    <div className="col-cat" >Bill</div>
                                    <div className="col-number"><i class="fas fa-file-invoice"></i></div>
                                </div>
                            </li>
                            <li>
                                <div  className="popup-row text-decoration-none" onClick={() => registerQuickRequest('call waiter')}>
                                    <div className="col-cat" >Call a Waiter</div>
                                    <div className="col-number"><i class="fas fa-male"></i></div>
                                </div>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </div>
            </>
    )
}
