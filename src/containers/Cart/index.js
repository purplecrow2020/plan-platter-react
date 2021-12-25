import React, { Component } from 'react'
import * as actionCreators from '../../store/actions/actions';
import { connect } from 'react-redux';
import UpdateItem from '../Buttons/UpdateItem';
import './index.css';
import defaultCartImg from '../../images/defaultCart.png';
import PaymentBtn from '../Buttons/PaymentBtn';

class Cart extends Component {


    componentDidMount() {
        this.props.callCartDetailsApi()
    }

    render() {
        return (
            <><div className="container" style={{ maxWidth: '500px', border: '0px solid red', minHeight: '100vh' }}>
                {/* TOTAL ITEMS */}

                {this.props.cartDetails && this.props.cartDetails.details.length > 0 ?
                    this.props.cartDetails.details.map(item => {
                        return (
                            <><div className="row">
                                <div className="col-2">
                                    <img src={item.img_url} className="" style={{ width: '45px', height: '45px' }} alt="cart-img-brand" />
                                </div>
                                <div className="col-10 align-middle">
                                    {/* <div className="row">
                        <div className="cd-heading-2"> McDonald's</div>
                    </div>
                    <div className="row">
                        <div className="cd-text-3">Indraprastha Industrail Area</div>
                    </div> */}
                                </div>
                            </div>
                                <div className="row mt-3">
                                    <div className="col-1 align-middle">
                                        <i class="far fa-dot-circle cd-icon-5"></i>
                                    </div>
                                    <div className="col-6" style={{ padding: '0px !important', maxWidth: '250px' }}>
                                        <div className="cd-heading-3">
                                            {item.name}
                                        </div>
                                        <div className="cd-text-3">
                                            {/* ADD DESCRIPTION LATER */}
                                            {/* Coke (Medium), Noodle Masala seasoning Al-a-Carte, Chilli Sa... */}
                                        </div>
                                        <div className="cd-text-3" style={{ color: 'black' }}>
                                            {/* CUSTOMIZE */}
                                        </div>
                                    </div>
                                    <div className="col-3 pr-1">
                                        <UpdateItem menu_item_id={item.id} count={item.qty} />
                                    </div>
                                    <div className="col-2 text-end">₹{item.price * item.qty}</div>
                                </div></>

                        );
                    }) :
                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}><img src={defaultCartImg} alt="default-cart-img" className="d-flex justify-content-center img-fluid" style={{ maxWidth: '250px', height: 'auto' }} /><div className="row mt-4">
                        <div className="col text-center">
                            <h4 className="">Good food is always cooking</h4>
                            <p>Your card is empty. Add something form the menu</p>
                        </div>
                    </div></div>}



                {/* TOTAL BILL */}
                {this.props.cartDetails && this.props.cartDetails.details.length > 0 ?
                    <><hr /><br>
                    </br><div className="row">
                            <div className="col">
                                <div className="cd-heading-4">Bill Details</div>
                                <div className="row cd-text-2">
                                    <div className="col-10 ">Item Total</div>
                                    <div className="col-2 d-flex justify-content-end">₹410.72</div>
                                </div>
                                <div className="row cd-text-2">
                                    <div className="col-10 ">Delivery Partner fee for 0.00 kms  &nbsp; <i class="fas fa-info-circle cd-icon-5" style={{ background: '#fff' }}></i> </div>
                                    <div className="col-2 d-flex justify-content-end">₹22</div>
                                </div>
                                <div className="cd-text-3">This fee goes towards paying your Delivery Partner fairly</div>

                                <hr />

                                <div className="row cd-text-2">
                                    <div className="col-10">Delivery Tip</div>
                                    <div className="col-2">
                                        <a href="#add-tip" className="text-decoration-none d-block" style={{ color: ' #ad684e' }}>
                                            Add tip
                                        </a>
                                    </div>
                                </div>
                                <div className="row cd-text-2">
                                    <div className="col-10">Texes and Charges &nbsp; <i class="fas fa-info-circle cd-icon-5" style={{ background: '#fff' }}></i></div>
                                    <div className="col-2 d-flex justify-content-end">
                                        ₹38.24
                                    </div>
                                </div>

                                <hr />

                                <div className="row cd-heading-4">
                                    <div className="col-10">To Pay</div>
                                    <div className="col-2 d-flex justify-content-end">₹471</div>
                                </div>
                            </div>
                        </div>
                    </> : ''}

            </div><PaymentBtn /></>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        cartDetails: state.cartDetails,
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
        callCartDetailsApi : () => dispatch(actionCreators.getCartDetails()),
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Cart);
