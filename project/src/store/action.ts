import { ActionType, ResetCityAction, SwitchCityAction, SwitchOffersAction } from '../types/action';
import { Offer } from '../types/offer';


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

export {switchCity, switchOffers, resetCity};
