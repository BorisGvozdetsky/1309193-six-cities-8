import { SortType } from '../const';
import { ActionType, LoadOffersAction, RequireAuthorizationAction, Requirelogout, ResetCityAction, SwitchCityAction, SwitchOffersAction, setSortTypeAction} from '../types/action';
import { Offer } from '../types/offer';
import {AuthorizationStatus} from '../const';

const setSortType = (sortType: SortType): setSortTypeAction => ({
  type: ActionType.setSortType,
  payload: sortType,
});

const switchCity = (name: string): SwitchCityAction => ({
  type: ActionType.SwitchCity,
  payload: name,
});

const switchOffers = (offers: Offer[]): SwitchOffersAction => ({
  type: ActionType.SwitchOffers,
  payload: offers,
});

const resetCity = (): ResetCityAction => ({
  type: ActionType.ResetCity,
});

const loadOffers = (offers: Offer[]): LoadOffersAction => ({
  type: ActionType.LoadOffers,
  payload: offers,
});

const requireAuthorization = (authStatus: AuthorizationStatus): RequireAuthorizationAction => ({
  type: ActionType.RequireAuthorization,
  payload: authStatus,
});

const requireLogout = (): Requirelogout => ({
  type: ActionType.RequireLogout,
});

export {switchCity, switchOffers, resetCity, loadOffers, requireAuthorization, requireLogout, setSortType};
