import { createReducer } from '@reduxjs/toolkit';
import { OfferData } from '../../types/state';
import { loadOffer, loadOfferComplete, loadOfferError, loadOffers, loadOffersNearby, resetOffers, updateOffer, updateOffers, updateOffersNearby } from '../action';

const initialState: OfferData = {
  offers: [],
  isDataLoaded: false,
  offer: null,
  offersNearby: [],
  isOfferLoading: false,
  isOfferError: false,
  isOffersNearbyLoaded: false,
};

const offerDataReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(loadOffer, (state) => {
      state.isOfferLoading = true;
      state.isOfferError = false;
    })
    .addCase(loadOfferComplete, (state, action) => {
      state.offer = action.payload;
      state.isOfferLoading = false;
    })
    .addCase(loadOfferError, (state) => {
      state.isOfferLoading = false;
      state.isOfferError = true;
    })
    .addCase(loadOffersNearby, (state, action) => {
      state.offersNearby = action.payload;
      state.isOffersNearbyLoaded = true;
    })
    .addCase(updateOffers, (state, action) => {
      state.offers = state.offers.map((offer) => {
        if (offer.id !== action.payload.id) {
          return offer;
        }
        return action.payload;
      });
    })
    .addCase(updateOffer, (state, action) => {
      state.offer = action.payload;
    })
    .addCase(updateOffersNearby, (state, action) => {
      state.offersNearby = state.offersNearby.map((offer) => {
        if (offer.id !== action.payload.id) {
          return offer;
        }
        return action.payload;
      });
    })
    .addCase(resetOffers, (state) => {
      state.offers = state.offers.map((offer) => ({
        ...offer,
        isFavorite: false,
      }));
      state.offersNearby = state.offersNearby.map((offer) => ({
        ...offer,
        isFavorite: false,
      }));
      if (state.offer) {
        state.offer = {...state.offer, isFavorite: false};
      }
    });
});

export {offerDataReducer};
