import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './containers/Footer';
import MenuItemCard from './containers/Cards/Menu/ItemCard';
import Home from './containers/Home';
// import ProfileMainBody from './components/profile/ProfileMainBody';
import SearchBar from './containers/Search/SearchBar';
// import CartBody from './components/cart/CartBody';

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path='/search' element={<SearchBar/>} />
          {/* <Route exact path='/cart' component={CartBody} />
          <Route exact path='/profile' component={ProfileMainBody} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
