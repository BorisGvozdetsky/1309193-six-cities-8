import { Offer } from './offer';

enum ActionType {
  SwitchCity = 'main/switchCity',
  SwitchOffers = 'main/switchOffers',
  ResetCity = 'main/resetCity',
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

export type Actions = SwitchCityAction | SwitchOffersAction | ResetCityAction;
export {ActionType};
export type {SwitchCityAction, SwitchOffersAction, ResetCityAction};
