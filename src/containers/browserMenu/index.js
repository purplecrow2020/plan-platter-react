import socket from '../../common/socket';
import React,  { useState } from 'react';
import './index.css'  
import Swal from 'sweetalert2';  
import {
    addQuickRequest
}   from '../../store/actions/apiCall';                                 

export default function BrowserMenu() {

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
    
    const registerQuickRequest = (request) => {

        socket.emit('QUICK_REQUEST', {
            authKey: localStorage.getItem('authKey'),
            vendor_id: localStorage.getItem('vendor_id'),
            table_id: localStorage.getItem('table_id'),
        });

        addQuickRequest({request})
        toggleDisplay();
        Swal.fire({
        position: 'bottom',
        icon: 'success',
        title: '👍 request assigned',
        showConfirmButton: false,
        height: '150px',
        timer: 1000,
        })
    }
    return (
        <>
            <div className="box container d-flex justify-content-center" >  
                    <i class="far fa-bell" onClick={toggleDisplay} ></i>
            </div>
            <div id="popup1" className="overlay" style={overlayDisplayStyle ? visibleStyle: invisibleStyle}>
                <div className="popup">
                    <h2>Services</h2>
                    <span className="close text-decoration-none" onClick={toggleDisplay}>&times;</span>
                    <div className="content">
                        <ul style={{}}>
                            <li>
                                <div className="popup-row text-decoration-none" onClick={()=>registerQuickRequest('clean the table')}>
                                    <div className="col-cat" >Clean up table</div>
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
                                <div  className="popup-row text-decoration-none" onClick={() => registerQuickRequest('request tissue')}>
                                    <div className="col-cat" >Tissue</div>
                                    <div className="col-number"><i class="fas fa-file-invoice"></i></div>
                                </div>
                            </li>
                            <li>
                                <div  className="popup-row text-decoration-none" onClick={() => registerQuickRequest('call waiter')}>
                                    <div className="col-cat" >Call a Waiter</div>
                                    <div className="col-number"><i class="fas fa-male"></i></div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            </>
    )
}
