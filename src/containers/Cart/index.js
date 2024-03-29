import React, { Component } from 'react'
import socket from '../../common/socket';
import html2canvas from 'html2canvas';
import * as actionCreators from '../../store/actions/actions';
import { connect } from 'react-redux';
import UpdateItem from '../Buttons/UpdateItem';
import NoActionItem from '../Buttons/noActionItem';
import './index.css';
import defaultCartImg from '../../images/defaultCart.png'
import FoodDeliveredImg from  '../../images/food_delivered.png'
import OrderFoodImg from  '../../images/order_food.png'
import PaymentBtn from '../Buttons/PaymentBtn';
import RestaurantDetails from '../restaurantDetail';
import BrowserMenu from '../browserMenu';
import SaveBillImg from '../../images/save.png';
import withCartHook from '../../components/Cart';
import Swal from 'sweetalert2';
const { saveAs } = require('file-saver');  

class Cart extends Component {



    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.cartRef = React.createRef();

        this.state = {
            image: null,
        }
    }

    componentDidMount() {
        this.props.callCartDetailsApi();
        console.log("PROPS< IMAGE",this.props.image);

        if (this.props.socket_connection !== null) {
            this.props.socket_connection.on(`ORDER_COMPLETED_BY_VENDOR`, () => {
                // console.log('new order is placed')
                this.props.callCartDetailsApi();
                // this.props.getVendorActiveOrderDetails();
                // this.state.audio_file.play();
                // Swal.fire(`TABLE NO: ${data.table_id}  has a new order`);
            })
        }
        console.log(' yes i am there in the  cart page ');
    }


    convertBase64ToFile = (base64String, fileName) => {
        let arr = base64String.split(',');
        let mime = arr[0].match(/:(.*?);/)[1];
        let bstr = atob(arr[1]);
        let n = bstr.length;
        let uint8Array = new Uint8Array(n);
        while (n--) {
           uint8Array[n] = bstr.charCodeAt(n);
        }
        let file = new File([uint8Array], fileName, { type: mime });
        return file;
    }

    download = (image, { name = "BILL_DETAILS", extension = "png" } = {}) => {
        const a = document.createElement("a");
        a.href = this.props.imageSave;
        a.download = this.props.createFileName(extension, name);
        a.click();
      };

    handleDownloadBill = (screenCapture) => {
        console.log('hello bill is saved');
        this.props.takeScreenshot(this.cartRef.current).then(this.download);
    }

    getTotalAmountToDisplay = (details) => {
        console.log('dddd- -  - - - - - - - -- - -- - - degsilll ----', details.total_discount, details.total_bill);
        if (details) {
            if (details.total_bill && !Number.isNaN(parseFloat(details.total_discount))) {
                return parseFloat(details.total_bill) - parseFloat(details.total_discount);
            } else {
                return details.total_bill;
            }
        }
        return details.total_bill;
    }


    render() {
        return (
            <div className="container" style={{ maxWidth: '500px', marginBottom: '150px' }} ref={this.cartRef}>
               {/* restaurantDetail */}
               <PaymentBtn />
               {
                //  this.props.cartDetails && this.props.cartDetails.details  ?
                this.props.cartDetails && this.props.cartDetails.details && ((this.props.cartDetails.details.to_order && this.props.cartDetails.details.to_order.length > 0) || (this.props.cartDetails.details.in_progress && this.props.cartDetails.details.in_progress.length > 0) || (this.props.cartDetails.details.completed && this.props.cartDetails.details.completed.length > 0) ) ?
                    <><RestaurantDetails details={this.props.vendorDetails} /><div className="row cd-heading-4 pt-2 pb-3 pl-3 my-3" style={{ background: '#916BBF', borderRadius: '15px' }}>
                            <div style={{paddingBottom: '10px'}}>
                                


                            {/* <div className="row cd-text-2">
                                    <div className="col-10 ">Item Total</div>
                                    <div className="col-2 d-flex justify-content-end">₹{this.props.cartDetails && this.props.cartDetails.total_bill}</div>
                                </div>
                                <div className="row cd-text-2" style={{marginTop: '3px'}}>
                                    <div className="col-10 ">Discount</div>
                                    <div className="col-2 d-flex justify-content-end">₹{this.props.cartDetails && this.props.cartDetails.total_discount}</div>

                                     */}





                                {/* <span className='cd-heading-00'>₹{this.props.cartDetails && this.props.cartDetails.total_bill}</span> */}
                                {/* this.props.cartDetails && this.props.cartDetails.total_bill && this.props.cartDetails.total_discount  */}
                                <span className='cd-heading-00'>₹{this.getTotalAmountToDisplay(this.props.cartDetails)}</span>

                                <span className='cd-text-00'>&nbsp; TOTAL</span>
                            </div>
                            <div className="lh-1 ">
                             
                            </div>
                        </div></> : ''
               }
             


                {/* TOTAL ITEMS */}

                {this.props.cartDetails && this.props.cartDetails.details && this.props.cartDetails.details.to_order && this.props.cartDetails.details.to_order.length > 0 ?
                    <React.Fragment>
                    
                    <div style={{backgroundColor: 'white', border: '1px solid black', borderRadius: '10px', padding: '10px'}}><span style={{lineHeight:"100%"}}><b>yet to order ...</b></span><img src={OrderFoodImg} style={{width: '30px'}}></img>
                    <hr/>
                    {
                    this.props.cartDetails.details.to_order.map(item => {
                        return (
                            <><div className="row">
                                <div className="col-2">
                                    {/* <img src={item.img_url} className="" style={{ width: '45px', height: '45px' }} alt="cart-img-brand" /> */}
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
                                    <div className="col-2 " style={{ marginTop:'-15px' }}>
                                        {/* <i class="far fa-dot-circle cd-icon-5"></i> */}
                                        <img src={item.img_url} className="" style={{ width: '45px', height: '45px', }} alt="cart-img-brand" />
                                    </div>
                                    <div className="col-4 col-sm-5" style={{ padding: '0px !important', maxWidth: '250px' }}>
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
                                    <div className="col-2 pl-2 pl-sm-0">₹{item.price * item.qty}</div>
                                </div></>

                        );
                    })} 
                    <PaymentBtn
                            to_order={this.props.cartDetails && this.props.cartDetails.details && this.props.cartDetails.details.to_order && this.props.cartDetails.details.to_order.length} 
                            order_in_progress={this.props.cartDetails &&  this.props.cartDetails.details && this.props.cartDetails.details.in_progress && this.props.cartDetails.details.in_progress.length} 
                            order_delivered={this.props.cartDetails &&  this.props.cartDetails.details && this.props.cartDetails.details.completed && this.props.cartDetails.details.completed.length}  
                            is_order_active_by_peer= {this.props.is_order_active_by_peer}
                            disable_payment={true}/>
                    </div> <br></br></React.Fragment>:''
                    
                }

                {/* IN PROGRESS ORDERS */}

                {   
                    this.props.cartDetails &&  this.props.cartDetails.details && this.props.cartDetails.details.in_progress && this.props.cartDetails.details.in_progress.length > 0 
                    ? 
                    <React.Fragment>
                        <div style={{backgroundColor: 'rgb(252,249,251)', border: '1px solid black', borderRadius: '10px', padding: '10px'}}><span style={{lineHeight:"100%"}}><b>Cooking ...</b></span><img src='https://c.tenor.com/59vhTnVECsYAAAAC/cooking-pot.gif' style={{width: '50px'}}></img>
                        <hr/>
                        {
                            this.props.cartDetails.details.in_progress.map(item => {
                                return (
                                    <><div className="row">
                                        <div className="col-2">
                                            {/* <img src={item.img_url} className="" style={{ width: '45px', height: '45px' }} alt="cart-img-brand" /> */}
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
                                            <div className="col-2 " style={{ marginTop:'-15px' }}>
                                                {/* <i class="far fa-dot-circle cd-icon-5"></i> */}
                                                <img src={item.img_url} className="" style={{ width: '45px', height: '45px', }} alt="cart-img-brand" />
                                            </div>
                                            <div className="col-4 col-sm-5" style={{ padding: '0px !important', maxWidth: '250px' }}>
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
                                                <NoActionItem menu_item_id={item.id} count={item.qty} />
                                            </div>
                                            <div className="col-2 pl-2 pl-sm-0">₹{item.price * item.qty}</div>
                                        </div></>
        
                                );
                            })
                        }
                        </div>
                    </React.Fragment>
                    : <p></p>
                }

                <br></br>
                {/* COMPLETED ORDERS */}
                {   
                    this.props.cartDetails &&  this.props.cartDetails.details && this.props.cartDetails.details.completed && this.props.cartDetails.details.completed.length > 0 
                    ? 
                    <React.Fragment ref={this.myRef}>
                        <div style={{backgroundColor: 'rgb(252,249,251)', border: '1px solid black', borderRadius: '10px', padding: '10px'}}><span style={{lineHeight:"100%"}}><b>Delivered ...</b></span><img src={FoodDeliveredImg} style={{width: '50px'}}></img>
                        <hr/>
                        {
                            this.props.cartDetails.details.completed.map(item => {
                                return (
                                    <><div className="row">
                                        <div className="col-2">
                                            {/* <img src={item.img_url} className="" style={{ width: '45px', height: '45px' }} alt="cart-img-brand" /> */}
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
                                            <div className="col-2 " style={{ marginTop:'-15px' }}>
                                                {/* <i class="far fa-dot-circle cd-icon-5"></i> */}
                                                <img src={item.img_url} className="" style={{ width: '45px', height: '45px', }} alt="cart-img-brand" />
                                            </div>
                                            <div className="col-4 col-sm-5" style={{ padding: '0px !important', maxWidth: '250px' }}>
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
                                                <NoActionItem menu_item_id={item.id} count={item.qty} />
                                            </div>
                                            <div className="col-2 pl-2 pl-sm-0">₹{item.price * item.qty}</div>
                                        </div></>
        
                                );
                            })
                        }
                        </div>
                    </React.Fragment>
                    : <p></p>
                }
                

                {
                    (!this.props.cartDetails || !this.props.cartDetails.details || (this.props.cartDetails.details.to_order.length ==0 &&  this.props.cartDetails.details.in_progress.length ==0  && this.props.cartDetails.details.completed.length ==0)) ? 
                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}><img src={defaultCartImg} alt="default-cart-img" className="d-flex justify-content-center img-fluid" style={{ maxWidth: '250px', height: 'auto' }} />
                        <div className="row mt-4">
                            <div className="col text-center">
                                <h4 className="">Good food is always cooking</h4>
                                <p>Your card is empty. Add something form the menu</p>
                            </div>
                        </div>
                    </div> :''
                }

                

                {/* TOTAL BILL */}
                {
                     this.props.cartDetails && this.props.cartDetails.details && ((this.props.cartDetails.details.to_order && this.props.cartDetails.details.to_order.length > 0) || (this.props.cartDetails.details.in_progress && this.props.cartDetails.details.in_progress.length > 0) || (this.props.cartDetails.details.completed && this.props.cartDetails.details.completed.length > 0) ) ?
                    
                <>
                <hr></hr>
                <div className="row">
                            <div className="col">
                                <div className="cd-heading-4">
                                    <p>Bill Details  <img src ={SaveBillImg} style={{width: '30px', height: '30px', float: 'right'}} onClick={this.handleDownloadBill}/></p>
                                   
                                </div>
                                
                                <div className="row cd-text-2">
                                    <div className="col-10 ">Item Total</div>
                                    <div className="col-2 d-flex justify-content-end">₹{this.props.cartDetails && this.props.cartDetails.total_bill}</div>
                                </div>
                                <div className="row cd-text-2" style={{marginTop: '3px'}}>
                                    <div className="col-10 ">Discount</div>
                                    <div className="col-2 d-flex justify-content-end">₹{this.props.cartDetails && this.props.cartDetails.total_discount}</div>
                                </div>
                                <div className="row cd-text-2">
                                    {/* <div className="col-10 ">Taxes & Charges  &nbsp; <i class="fas fa-info-circle cd-icon-5" style={{ background: '#fff' }}></i> </div> */}
                                    {/* <div className="col-2 d-flex justify-content-end">₹22</div> */}
                                </div>
                                {/* <div className="cd-text-3">This fee goes towards paying your Delivery Partner fairly</div> */}

                                <hr />

                                <div className="row cd-text-2">
                                    {/* <div className="col-10">Service Tip</div>
                                    <div className="col-2">
                                        <a href="#add-tip" className="text-decoration-none d-block" style={{ color: ' #ad684e' }}>
                                            Add tip
                                        </a>
                                    </div> */}
                                </div>
                                <div className="row cd-text-2">
                                    <div className="col-10">Additional Charges &nbsp; <i class="fas fa-info-circle cd-icon-5" style={{ background: '#fff' }}></i></div>
                                    <div className="col-2 d-flex justify-content-end">
                                        ₹0
                                    </div>
                                </div>

                                <hr />

                                <div className="row cd-heading-4">
                                    <div className="col-10">To Pay</div>
                                    <div className="col-2 d-flex justify-content-end">₹{this.props.cartDetails && this.props.cartDetails.total_bill - this.props.cartDetails.total_discount + 0}</div>
                                </div>
                            </div>
                        </div><hr /><PaymentBtn
                            to_order={this.props.cartDetails && this.props.cartDetails.details && this.props.cartDetails.details.to_order && this.props.cartDetails.details.to_order.length} 
                            order_in_progress={this.props.cartDetails &&  this.props.cartDetails.details && this.props.cartDetails.details.in_progress && this.props.cartDetails.details.in_progress.length} 
                            order_delivered={this.props.cartDetails &&  this.props.cartDetails.details && this.props.cartDetails.details.completed && this.props.cartDetails.details.completed.length} 
                            is_order_active_by_peer= {this.props.is_order_active_by_peer}
                            /></>:''

                }
                </div>
          
        )
    }
}



const mapStateToProps = (state) => {
    return {
        cartDetails: state.cartDetails,
        vendorDetails: state.vendor_details,
        is_order_active_by_peer: state.is_order_active_by_peer,
        socket_connection: state.socket_connection,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        callCartDetailsApi: () => dispatch(actionCreators.getCartDetails()),
        setOrderActiveByPeer: () => dispatch(actionCreators.initiateOrderByPeerOnTable())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(withCartHook(Cart));
