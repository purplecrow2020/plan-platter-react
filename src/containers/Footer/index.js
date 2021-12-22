import React, { Component } from 'react'
import logo from '../../images/logo.jpeg';
import {NavLink} from 'react-router-dom';
import './index.css'


class Footer extends Component {
    render() {
        return (
            <nav className="container py-3 footer-position bg-light" style={{maxWidth: '500px', margin: '0px auto', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)'}} >
                <div className="footer-items " style={{ margin: 'auto', cursor: 'pointer'}} >
                    <div className="col-3">
                        <NavLink exact to='/' className="text-decoration-none text-center">
                            <img src={logo} alt="brand-logo" style={{maxWidth: '80px', height: 'auto'}}/>
                        </NavLink>
                    </div>
                    <div className="col-3">
                        <NavLink exact to='/search' className="text-decoration-none text-center" 
                        style={{color: '#3d4152'}}
                        >
                            <i className="fa fa-search d-block" aria-hidden="true" style={{left:'0px'}}></i>
                            <span className="d-block  mt-1">SEARCH</span>
                        </NavLink>

                    </div>
                    <div className="col-3">
                        <NavLink exact to="/cart" className="text-decoration-none text-center" 
                        style={{color: '#3d4152'}}
                        >
                            <i className="fa fa-shopping-bag d-block" aria-hidden="true"></i>
                            <span className="d-block  mt-1">CART</span>
                        </NavLink>

                    </div>
                    <div className="col-3">
                        <NavLink exact to='/profile'  className=" text-decoration-none text-center" 
                        style={{color: '#3d4152'}}
                        >
                            <i className="fa fa-user d-block " aria-hidden="true" ></i>
                            <span className="d-block mt-1">ACCOUNT</span>
                        </NavLink>
                    </div>
                </div>
            </nav>
            
        )
    }
}


export default Footer;
