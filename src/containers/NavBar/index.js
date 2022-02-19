import React, { Component } from 'react'
import BrowserMenu from '../browserMenu';

class NavBar extends Component {

    render() {
        return (
            <React.Fragment>
            <nav className="navbar container py-3 d-flex align-item-center" style={{ maxWidth: '500px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)' }}>
                {
                    this.props.enable_bell_icon ? 
                    <p style={{position: 'absolute', right: '10px'}}>
                        <BrowserMenu />
                    </p> :''
                }
                
                <div className="row">
                    
                    <div className="address col-10" style={{maxWidth: ''}}>
                        <div className="row mb-1">
                            <span className="headingMainAdd" style={{color: '#3d4152', fontWeight: '700'}}>
                                Hello {this.props.user_details?.name || 'Buddy'}
                                {/* <i className="fa fa-map-marker mr-2" aria-hidden="true"></i>
                                <span className="mainAdd" style={{maxWidth: '250px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap'}}>Rangbari</span> */}
                            </span>
                        </div>
                        <div className="row " style={{marginLeft: '0px !important'}}>
                        
                        {/* textOverflow: 'ellipsis', overflow: 'hidden' */}
                            <span className="fullAdd " style={{maxWidth: '400px', whiteSpace: 'nowrap', color: ' #686b78'}}>Welcome to {this.props.vendor_details?.name || 'hariraj'}</span>
                            <span className="icon-downArrow kVKTT"></span>
                        </div>

                    </div>
                   
                    {/* <div className="offers col-2 d-flex justify-content-end">
                        <a href="offers-link" className="offersLink d-flex text-decoration-none" style={{color:'#3d4152', fontWeight: '500'}}>
                            <span className="offersText" >  Offers</span>
                        </a>
                    </div> */}
                </div>
            </nav>
            </React.Fragment>
        )
    }
}

export default NavBar;
