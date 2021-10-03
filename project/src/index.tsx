import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Setting = {
  PLACE_COUNT: 5,
  OFFER_COUNT: 312,
};

ReactDOM.render(
  <React.StrictMode>
    <App placeCount = {Setting.PLACE_COUNT} offerCount = {Setting.OFFER_COUNT}/>
  </React.StrictMode>,
  document.getElementById('root'));
