import { createReducer } from '@reduxjs/toolkit';
import { FavoritesData } from '../../types/state';
import { loadFavorites, updateFavorites } from '../action';

const initialState: FavoritesData = {
  offersFavorite: [],
  isOffersFavoriteLoaded: false,
};

const favoriteDataReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadFavorites, (state, action) => {
      state.offersFavorite = action.payload;
      state.isOffersFavoriteLoaded = true;
    })
    .addCase(updateFavorites, (state, action) => {
      state.offersFavorite = state.offersFavorite.map((offer) => {
        if (offer.id !== action.payload.id) {
          return offer;
        }
        return action.payload;
      });
    });
});

export {favoriteDataReducer};
