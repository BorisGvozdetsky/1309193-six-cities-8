import { AppRoute, SortType } from '../const';
import { ActionType, LoadOffersAction, RequireAuthorizationAction, Requirelogout, ResetCityAction, SwitchCityAction, SwitchOffersAction, RedirectToRouteAction, SetSortTypeAction, UserLoginAction} from '../types/action';
import { Offer } from '../types/offer';
import {AuthorizationStatus} from '../const';
import { User } from '../types/user';

const setSortType = (sortType: SortType): SetSortTypeAction => ({
  type: ActionType.SetSortType,
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

const redirectToRoute = (url: AppRoute): RedirectToRouteAction => ({
  type: ActionType.RedirectToRoute,
  payload: url,
});

const userLogin = (user: User): UserLoginAction => ({
  type: ActionType.UserLogin,
  payload: user,
});

export {switchCity, switchOffers, resetCity, loadOffers, requireAuthorization, requireLogout, setSortType, redirectToRoute, userLogin};
