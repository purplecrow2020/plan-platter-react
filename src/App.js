import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './containers/Footer';
import MenuItemCard from './containers/Cards/Menu/ItemCard';
import Home from './containers/Home';
import BestSellerCaraousel from './containers/BestSellers/BestSellerCaraousel';
import Cart from './containers/Cart';
// import Cart  from './components/Cart';
// import ProfileMainBody from './components/profile/ProfileMainBody';
import SearchBar from './containers/Search/SearchBar';
import Register from './containers/Register';
import Login from './containers/Login';
import Signup from './containers/Signup';
import { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from './store/actions/actions';
import NavBar from './containers/NavBar';
import Account from './containers/Account';
import Onboarding from './components/Onboarding';
import Screenshot from './components/Screenshot';
import GuestLoginComplete from './containers/guestLoginComplete';
import socket from './common/socket';
import Swal from 'sweetalert2';  


//import CartBody from './components/cart/CartBody';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      vendor_id: 1
    }
  }

  componentDidMount(){
    const authKey = localStorage.getItem('authKey');
    this.props.getVendorDetailsApi();
    if (authKey && authKey.length > 0) {
      this.props.setAuth();
    }

    socket.on(`ACTIVE_ORDER_ON_TABLE_BY_PEER`, () => {
      Swal.fire(`TABLE NO has a new order`);
      this.props.setOrderActiveByPeer()
    })
  }
  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <BrowserRouter>
        {/* <NavBar/> */}
        <Routes>
            
            <Route exact path={"/"} element={ <Register/>} />
            <Route exact path={"/:vendor_id/:table_id"} element={ <Onboarding />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
  
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/cart" element={<Cart />} />
            {/* <Route exact path="/" element={<BestSellerCaraousel />} /> */}
            <Route exact path='/search' element={<SearchBar/>} />
            <Route exact path='/profile' element={<Account />} />
            <Route exact path='/screenshot' element={<Screenshot />} />
            <Route exact path='/guest-login-complete' element={<GuestLoginComplete />} />


            
            {/* <Route exact path='/cart' element={<CartBody/>} /> */}
            {/* <Route exact path='/profile' component={ProfileMainBody} /> */}
          </Routes>
          
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return  {
    is_order_active_by_peer: state.is_order_active_by_peer,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getVendorDetailsApi : () => dispatch(actionCreators.getVendorDetailsApi()),
    setAuth: () => dispatch({type: 'SET_AUTH_FLAG', payload: { response: {flag: true}}}),
    setOrderActiveByPeer: () => dispatch(actionCreators.initiateOrderByPeerOnTable())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
