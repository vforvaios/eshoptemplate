import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from 'components/home/Home';
import About from 'components/about/About';
import Header from 'components/header/Header';
import ProductPage from 'components/product-page/ProductPage';
import 'resources/styles/general.scss';

const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/product/:id" component={ProductPage} />
    </Switch>
  </Router>
);

export default App;
