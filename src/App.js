import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './containers/Footer';
import MenuItemCard from './containers/Cards/Menu/ItemCard';
import Home from './containers/Home';
import BestSellerCaraousel from './containers/BestSellers/BestSellerCaraousel';
import Cart from './containers/Cart';
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
  }
  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <BrowserRouter>
        {/* <NavBar/> */}
        <Routes>
            
            <Route exact path="/" element={<Register />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
  
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/cart" element={<Cart />} />
            {/* <Route exact path="/" element={<BestSellerCaraousel />} /> */}
            <Route exact path='/search' element={<SearchBar/>} />
            <Route exact path='/profile' element={<Account />} />
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
  
}

const mapDispatchToProps = (dispatch) => {
  return {
    getVendorDetailsApi : () => dispatch(actionCreators.getVendorDetailsApi()),
    setAuth: () => dispatch({type: 'SET_AUTH_FLAG', payload: { response: {flag: true}}})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
