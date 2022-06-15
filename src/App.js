import About from 'components/about/About';
import Cart from 'components/cart/Cart';
import Catalog from 'components/catalog/Catalog';
import CategoriesLanding from 'components/categoriesLanging/CategoriesLanding';
import Confirm from 'components/checkout/Confirm';
import Contact from 'components/contact/Contact';
import Header from 'components/header/Header';
import Home from 'components/home/Home';
import ProductPage from 'components/product-page/ProductPage';
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
    </Switch>
  </Router>
);

export default App;
