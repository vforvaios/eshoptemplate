import About from 'components/about/About';
import Alert from 'components/alert/Alert';
import Cart from 'components/cart/Cart';
import Catalog from 'components/catalog/Catalog';
import CategoriesLanding from 'components/categoriesLanging/CategoriesLanding';
import CheckoutEdit from 'components/checkout/CheckoutEdit';
import CheckoutLogin from 'components/checkout/CheckoutLogin';
import CheckoutSuccess from 'components/checkout/CheckoutSuccess';
import Confirm from 'components/checkout/Confirm';
import Contact from 'components/contact/Contact';
import Footer from 'components/footer/Footer';
import Header from 'components/header/Header';
import Home from 'components/home/Home';
import Loader from 'components/loader/Loader';
import PageNotFound from 'components/pagenotfound/PageNotFound';
import ProductPage from 'components/product-page/ProductPage';
import ProtectedRoute from 'components/protected-route/ProtectedRoute';
import Login from 'components/user/Login';
import Register from 'components/user/Register';
import Wishlist from 'components/wishlist/Wishlist';
import { user } from 'models/selectors/userSelector';
import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'fontello/css/fontello.css';

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
          <Route path="/cart" element={<Cart />} />
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
          <Route path="/checkout/step1" element={<CheckoutLogin />} />
          <Route path="/checkout/step2" element={<CheckoutEdit />} />
          <Route path="/checkout/confirm" element={<Confirm />} />
          <Route path="/checkout/success" element={<CheckoutSuccess />} />
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
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
      <Alert />
      <Loader />
    </>
  );
};

export default App;
