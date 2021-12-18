import './App.css';
import  { BrowserRouter, Route, Routes} from 'react-router-dom';
import Footer  from './containers/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Route exact path="/" element={<Footer />} /> */}
        </Routes>
      <Footer />
      </BrowserRouter>
    </div>
    
  );
}

export default App;
