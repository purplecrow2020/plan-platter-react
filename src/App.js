import './App.css';
import  { BrowserRouter, Route, Routes} from 'react-router-dom';
import Footer  from './containers/Footer';
import MenuItemCard from './containers/Cards/Menu/ItemCard';
import Home from './containers/Home';
import BestSellerCaraousel from './containers/BestSellers/BestSellerCaraousel';

function App() {
  return (
    <div style={{display: 'flex',justifyContent: 'center'}}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route exact path="/" element={<BestSellerCaraousel />} /> */}
        </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
