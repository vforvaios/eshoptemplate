import About from 'components/about/About';
import Alert from 'components/alert/Alert';
import Cart from 'components/cart/Cart';
import Catalog from 'components/catalog/Catalog';
import CategoriesLanding from 'components/categoriesLanging/CategoriesLanding';
import CheckoutSuccess from 'components/checkout/CheckoutSuccess';
import Confirm from 'components/checkout/Confirm';
import Contact from 'components/contact/Contact';
import Header from 'components/header/Header';
import Home from 'components/home/Home';
import Loader from 'components/loader/Loader';
import ProductPage from 'components/product-page/ProductPage';
import ProtectedRoute from 'components/protected-route/ProtectedRoute';
import Login from 'components/user/Login';
import Register from 'components/user/Register';
import Wishlist from 'components/wishlist/Wishlist';
import { user } from 'models/selectors/userSelector';
import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'resources/styles/general.scss';

const App = () => {
  const userSelector = useSelector(user);

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            path="/about"
            element={
              <ProtectedRoute isAllowed={userSelector?.token}>
                <About />
              </ProtectedRoute>
            }
          />
          <Route path="/catalog" element={<Catalog />} />
          <Route
            path="/cart"
            element={
              <ProtectedRoute isAllowed={userSelector?.token}>
                <Cart />
              </ProtectedRoute>
            }
          />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/categories"
            element={
              <ProtectedRoute isAllowed={userSelector?.token}>
                <CategoriesLanding />
              </ProtectedRoute>
            }
          />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route
            path="/checkout/confirm"
            element={
              <ProtectedRoute isAllowed={userSelector?.token}>
                <Confirm />
              </ProtectedRoute>
            }
          />
          <Route
            path="/checkout/success"
            element={
              <ProtectedRoute isAllowed={userSelector?.token}>
                <CheckoutSuccess />
              </ProtectedRoute>
            }
          />
          <Route
            path="/wishlist"
            element={
              <ProtectedRoute isAllowed={userSelector?.token}>
                <Wishlist />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
      <Alert />
      <Loader />
    </>
  );
};

export default App;
