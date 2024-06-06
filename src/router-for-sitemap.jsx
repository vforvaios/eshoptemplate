import React from 'react';
import { Route } from 'react-router';

export default (
  <Route>
    <Route path="/" />
    <Route path="/forgotpassword" />
    <Route path="/catalog" />
    <Route path="/cart" />
    <Route path="/contact" />
    <Route path="/login" />
    <Route path="/register" />
    <Route path="/product/:id" />
    <Route path="/static/:id" />
  </Route>
);
