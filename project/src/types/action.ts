import { Offer } from './offer';

enum ActionType {
  SwitchCity = 'main/switchCity',
  SwitchOffers = 'main/switchOffers',
  ResetCity = 'main/resetCity',
  SwitchSortType = 'main/switchSortType'
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
  payload: string;
};

type Actions = SwitchCityAction | SwitchOffersAction | ResetCityAction | SwitchSortTypeAction;

export {ActionType};

export type {Actions, SwitchCityAction, SwitchOffersAction, ResetCityAction, SwitchSortTypeAction};
