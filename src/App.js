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
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'resources/styles/general.scss';

const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/catalog" component={Catalog} />
      <Route path="/cart" component={Cart} />
      <Route path="/contact" component={Contact} />
      <Route path="/categories" component={CategoriesLanding} />
      <Route path="/product/:id" component={ProductPage} />
      <Route path="/checkout/confirm" component={Confirm} />
      <Route path="/checkout/success" component={CheckoutSuccess} />
      <Route path="/wishlist" component={Wishlist} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </Switch>
  </Router>
);

export default App;
