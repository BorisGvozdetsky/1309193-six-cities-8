import { AppRoute, ReviewStatus, SortType } from '../const';
import { Offer } from './offer';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AxiosInstance} from 'axios';
import {State} from '../types/state';
import { User } from './user';
import { Reviews } from './review';

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
}

type SwitchCityAction = {
  type: ActionType.SwitchCity;
  payload: string;
};

type LoadOfferAction = {
  type: ActionType.LoadOffer;
};

type SetSortTypeAction = {
  type: ActionType.SetSortType;
  payload: SortType;
};

type LoadOffersAction = {
  type: ActionType.LoadOffers,
  payload: Offer[];
};

type Requirelogout = {
  type: ActionType.RequireLogout,
}

type RedirectToRouteAction = {
  type: ActionType.RedirectToRoute;
  payload: AppRoute;
};

type UserLoginAction = {
  type: ActionType.UserLogin;
  payload: User;
};

type UploadReviewAction = {
  type: ActionType.UploadReview;
  payload: ReviewStatus;
}

type LoadOfferCompleteAction = {
  type: ActionType.LoadOfferComplete;
  payload: Offer;
};

type LoadOfferErrorAction = {
  type: ActionType.LoadOfferError;
};

type LoadOffersNearbyAction = {
  type: ActionType.LoadOffersNearby;
  payload: Offer[];
};

type LoadReviewsAction = {
  type: ActionType.LoadReviews;
  payload: Reviews;
};

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;
export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;

export type Actions = SwitchCityAction | SetSortTypeAction | LoadOffersAction | LoadOfferAction | Requirelogout | RedirectToRouteAction | UserLoginAction | UploadReviewAction | LoadOfferCompleteAction | LoadOfferErrorAction | LoadOffersNearbyAction | LoadReviewsAction;
export {ActionType};
export type {SwitchCityAction, LoadOffersAction, LoadOfferAction, Requirelogout, SetSortTypeAction, RedirectToRouteAction, UserLoginAction, UploadReviewAction, LoadOfferCompleteAction, LoadOfferErrorAction, LoadOffersNearbyAction, LoadReviewsAction};
