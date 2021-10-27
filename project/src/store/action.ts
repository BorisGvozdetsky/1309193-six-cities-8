import { SortType } from '../const';
import { ActionType, ResetCityAction, SwitchCityAction, SwitchOffersAction, SwitchSortTypeAction } from '../types/action';
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

const switchSortType = (sortType: SortType): SwitchSortTypeAction => ({
  type: ActionType.SwitchSortType,
  payload: sortType,
});

export {switchCity, switchOffers, resetCity, switchSortType};
