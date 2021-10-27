import { SortType } from '../const';
import { offers } from '../mocks/offers';
import { ActionType, Actions } from '../types/action';
import { State } from '../types/state';


const initialState = {
  currentCity: 'Paris',
  offers: offers,
  activeSortType: SortType.Popular,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.SwitchCity:
      return {...state, currentCity: action.payload};
    case ActionType.SwitchOffers:
      return {...state, offers: action.payload};
    case ActionType.SwitchSortType:
      return {...state, activeSortType: action.payload};
    case ActionType.ResetCity:
      return {...initialState};
    default:
      return state;
  }
};

export {reducer};
