import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {offers} from './mocks/offers';
import { reviews } from './mocks/reviews';

const Setting = {
  OFFER_COUNT: 312,
};

ReactDOM.render(
  <React.StrictMode>
    <App offerCount = {Setting.OFFER_COUNT} offers = {offers} reviews={reviews}/>
  </React.StrictMode>,
  document.getElementById('root'));
