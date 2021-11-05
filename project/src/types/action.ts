import { AuthorizationStatus, SortType } from '../const';
import { Offer } from './offer';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AxiosInstance} from 'axios';
import {State} from '../types/state';

enum ActionType {
  SwitchCity = 'main/switchCity',
  SwitchOffers = 'main/switchOffers',
  ResetCity = 'main/resetCity',
  SwitchSortType = 'main/switchSortType',
  LoadOffers = 'data/loadOffers',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requiredLogout'
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

type SwitchSortTypeAction = {
  type: ActionType.SwitchSortType;
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

type RequireLogoutAction = {
  type: ActionType.RequireLogout,
}

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;
export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;

export type Actions = SwitchCityAction | SwitchOffersAction | ResetCityAction | SwitchSortTypeAction | LoadOffersAction | RequireAuthorizationAction | RequireLogoutAction;
export {ActionType};
export type {SwitchCityAction, SwitchOffersAction, ResetCityAction, LoadOffersAction, RequireAuthorizationAction, RequireLogoutAction, SwitchSortTypeAction};
