import React from 'react';
import { Route } from 'react-router-dom';
import { List, Create, Update, Show } from '../components/adres';

export default [
  <Route path="/postadres/create" component={Create} exact key="create" />,
  <Route path="/postadres/edit/:id" component={Update} exact key="update" />,
  <Route path="/postadres/show/:id" component={Show} exact key="show" />,
  <Route path="/postadres/" component={List} exact strict key="list" />,
  <Route path="/postadres/:page" component={List} exact strict key="page" />
];