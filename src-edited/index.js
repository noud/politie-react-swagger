import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reducer as form } from 'redux-form';
import { Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from "history";
import {
  ConnectedRouter,
  connectRouter,
  routerMiddleware
} from 'connected-react-router';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import * as serviceWorker from './serviceWorker';
// Import your reducers and routes here

import adres from './reducers/adres/';
import bezoekadresRoutes from './routes/bezoekadres';
import postadresRoutes from './routes/postadres';
import adresRoutes from './routes/adres';
import afbeelding from './reducers/afbeelding/';
import afbeeldingRoutes from './routes/afbeelding';
import locatie from './reducers/locatie/';
import locatieRoutes from './routes/locatie';
import politiebureau from './reducers/politiebureau/';
import politiebureauRoutes from './routes/politiebureau';
// import politiebureauslocatie from './reducers/politiebureauslocatie/';
// import politiebureauslocatieRoutes from './routes/politiebureauslocatie';

import Welcome from './Welcome';

const history = createBrowserHistory();
const store = createStore(
  combineReducers({
    router: connectRouter(history),
    form,
    /* Add your reducers here */
    pet,
    adres,
    afbeelding,
    locatie,
    politiebureau,
    // politiebureauslocatie
  }),
  applyMiddleware(routerMiddleware(history), thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" component={Welcome} strict={true} exact={true}/>
        {/* Add your routes here */}
        {bezoekadresRoutes}
        {postadresRoutes}
        {adresRoutes}
        {afbeeldingRoutes}
        {locatieRoutes}
        {politiebureauRoutes}
        {/* {politiebureauslocatieRoutes} */}
        <Route render={() => <h1>Not Found</h1>} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();