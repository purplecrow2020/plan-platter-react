import React from 'react'
import logo from '../../images/logo.jpeg';
import {NavLink, useLocation} from 'react-router-dom';
import './index.css';
import { connect } from 'react-redux';

// waiter - <img src="https://i.pinimg.com/originals/b3/f4/67/b3f467df55b86bc893e1c05d8366c8c3.png" style={{height: '50px',  width:'auto', border:'1px solid red'}} /> 
// order is preparing - https://c.tenor.com/59vhTnVECsYAAAAC/cooking-pot.gif
// bill is being generated- https://cdn-icons-png.flaticon.com/512/3081/3081160.png

function getTotatCartItemsToDisplay(toOrderDetails) {
    let counter = 0;
    for (let i=0 ; i < toOrderDetails.length; i++) {
        counter += toOrderDetails[i]['qty'];
    }
    return counter;
}   

function Footer({cartDetails}) {
    const location = useLocation();
    // console.log(location.pathname);
    console.log(cartDetails);
    const fullLayoutRoutes = ['/login', '/signup', '/register', '/'];
    const popupLayoutRoutes = ['/home'];

    if (fullLayoutRoutes.includes(location.pathname)) {
        return (<div></div>);
    } else {
        const cartIconDisplay = cartDetails.details && cartDetails.details.to_order && cartDetails.details.to_order.length > 0 ? true : false;
        return (
            <>
            <nav className="container fixed-bottom py-3 bg-white" style={{maxWidth: '500px', margin: '0px auto', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)'}} >
                {/* {   popupLayoutRoutes.includes(location.pathname) ? 
                        <div className='row' style={{backgroundColor: "#FAFAFA", height: '70px', border:'1px solid red',   display: 'flex', alignItems: 'center', border:'1px solid red', margin: '0px auto'}}>
                            <div className='col-3'>
                                <img src="https://i.pinimg.com/originals/b3/f4/67/b3f467df55b86bc893e1c05d8366c8c3.png" style={{height: '50px',  width:'auto', border:'1px solid red'}} />     
                            </div>
                            <div className='col-6'>food is on the way</div>
                        </div>: ''
                }        */}
                {/* <br></br> */}
                <div className="row " style={{ margin: 'auto', cursor: 'pointer'}} >
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
                        style={{color: '#3d4152', position:'relative'}}
                        >
                            <i className="fa fa-shopping-bag d-block" aria-hidden="true" style={{position:'relative'}}>
                            { cartIconDisplay ? <span className='cart-count-icon' style={{position: 'absolute', top: '-10px'}}>{getTotatCartItemsToDisplay(cartDetails.details.to_order)}</span>: ''}
                            </i>
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
            </>
           
        )
    }               
}


function mapStateToProps(state){
    return {
        cartDetails: state.cartDetails
    }
}

export default connect(mapStateToProps)(Footer);
