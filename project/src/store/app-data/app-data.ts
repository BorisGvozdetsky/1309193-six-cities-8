import { createReducer } from '@reduxjs/toolkit';
import { SortType } from '../../const';
import { AppData } from '../../types/state';
import { setSortType, switchCity } from '../action';

const initialState: AppData = {
  currentCity: 'Paris',
  activeSortType: SortType.Popular,
};

const appDataReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(switchCity, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(setSortType, (state, action) => {
      state.activeSortType = action.payload;
    });
});

export {appDataReducer};
