import { AppRoute, AuthorizationStatus, SortType } from '../const';
import { Offer } from './offer';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AxiosInstance} from 'axios';
import {State} from '../types/state';
import { User } from './user';

enum ActionType {
  SwitchCity = 'main/switchCity',
  SwitchOffers = 'main/switchOffers',
  ResetCity = 'main/resetCity',
  SetSortType = 'main/setSortType',
  LoadOffers = 'data/loadOffers',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requiredLogout',
  RedirectToRoute = 'user/redirectToRoute',
  UserLogin = 'user/userLogin',
}


type SwitchCityAction = {
  type: ActionType.SwitchCity;
  payload: string;
};

type SwitchOffersAction = {
  type: ActionType.SwitchOffers;
  payload: Offer[];
};

type ResetCityAction = {
  type: ActionType.ResetCity;
};

type SetSortTypeAction = {
  type: ActionType.SetSortType;
  payload: SortType;
};


type LoadOffersAction = {
  type: ActionType.LoadOffers,
  payload: Offer[];
};

type RequireAuthorizationAction = {
  type: ActionType.RequireAuthorization,
  payload: AuthorizationStatus;
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

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;
export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;

export type Actions = SwitchCityAction | SwitchOffersAction | ResetCityAction | SetSortTypeAction | LoadOffersAction | RequireAuthorizationAction | Requirelogout | RedirectToRouteAction | UserLoginAction;
export {ActionType};
export type {SwitchCityAction, SwitchOffersAction, ResetCityAction, LoadOffersAction, RequireAuthorizationAction, Requirelogout, SetSortTypeAction, RedirectToRouteAction, UserLoginAction};
