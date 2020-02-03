import React from 'react'
import { Switch, Route } from 'react-router-dom';

import ProductList from './pages/ProductList';
import CardList from './pages/CartList';

export default function Routes(){
  return(
    <Switch>
      <Route path="/" exact component={ProductList} />
      <Route path="/cart" exact component={CardList} />
    </Switch>
  );
}