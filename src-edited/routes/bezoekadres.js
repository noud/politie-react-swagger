import React from 'react';
import { Route } from 'react-router-dom';
import { List, Create, Update, Show } from '../components/adres';

export default [
  <Route path="/bezoekadres/create" component={Create} exact key="create" />,
  <Route path="/bezoekadres/edit/:id" component={Update} exact key="update" />,
  <Route path="/bezoekadres/show/:id" component={Show} exact key="show" />,
  <Route path="/bezoekadres/" component={List} exact strict key="list" />,
  <Route path="/bezoekadres/:page" component={List} exact strict key="page" />
];