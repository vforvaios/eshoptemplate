import About from 'components/about/About';
import Cart from 'components/cart/Cart';
import Catalog from 'components/catalog/Catalog';
import CategoriesLanding from 'components/categoriesLanging/CategoriesLanding';
import CheckoutSuccess from 'components/checkout/CheckoutSuccess';
import Confirm from 'components/checkout/Confirm';
import Contact from 'components/contact/Contact';
import Header from 'components/header/Header';
import Home from 'components/home/Home';
import ProductPage from 'components/product-page/ProductPage';
import Login from 'components/user/Login';
import Register from 'components/user/Register';
import Wishlist from 'components/wishlist/Wishlist';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'resources/styles/general.scss';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/categories" element={<CategoriesLanding />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/checkout/confirm" element={<Confirm />} />
      <Route path="/checkout/success" element={<CheckoutSuccess />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  </Router>
);

export default App;
