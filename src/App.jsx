import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from './pages/Cart';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails'; 
import Header from './shared/layouts/Header';
import Footer from './shared/layouts/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
