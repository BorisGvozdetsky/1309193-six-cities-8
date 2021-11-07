import React from 'react';
import ReactDOM from 'react-dom';
import {composeWithDevTools} from 'redux-devtools-extension';
import App from './components/app/app';
import { reviews } from './mocks/reviews';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './store/reducer';
import { createAPI } from './services/api';
import { requireAuthorization } from './store/action';
import { AuthorizationStatus } from './const';
import { applyMiddleware } from '@reduxjs/toolkit';
import { ThunkAppDispatch } from './types/action';
import { checkAuth, fetchOffers } from './store/api-action';
import thunk from 'redux-thunk';

const api = createAPI(
  () => store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth)),
);

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
  ),
);

(store.dispatch as ThunkAppDispatch)(checkAuth());
(store.dispatch as ThunkAppDispatch)(fetchOffers());

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App reviews={reviews}/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
