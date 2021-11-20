import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AxiosInstance} from 'axios';
import {State} from '../types/state';
import { Action } from '@reduxjs/toolkit';

enum ActionType {
  SwitchCity = 'main/switchCity',
  SetSortType = 'main/setSortType',
  LoadOffers = 'data/loadOffers',
  RequireLogout = 'user/requiredLogout',
  RedirectToRoute = 'user/redirectToRoute',
  UserLogin = 'user/userLogin',
  UploadReview = 'user/uploadReview',
  LoadOffer = 'data/loadOffer',
  LoadOfferComplete = 'data/loadOfferComplete',
  LoadOfferError = 'data/loadOfferError',
  LoadOffersNearby = 'data/loadOffersNearby',
  LoadReviews = 'data/loadReviews',
  UserLogout = 'user/logout',
  UpdateOffer = 'data/updateOffer',
  UpdateOffers = 'data/updateOffers',
  UpdateOffersNearby = 'data/updateOfferNearby',
  LoadFavorites = 'data/loadFavorites',
  UpdateFavorites = 'data/updateFavorites',
  ResetOffers = 'data/resetOffers',
}

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Action>;
export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Action>;
export {ActionType};
