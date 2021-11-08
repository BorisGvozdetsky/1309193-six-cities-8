import { SortType } from '../const';
import { AuthorizationStatus } from '../const';
import { ActionType, Actions } from '../types/action';
import { State } from '../types/state';


const initialState = {
  currentCity: 'Paris',
  offers: [],
  activeSortType: SortType.Popular,
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.SwitchCity:
      return {...state, currentCity: action.payload};
    case ActionType.SwitchOffers:
      return {...state, offers: action.payload};
    case ActionType.setSortType:
      return {...state, activeSortType: action.payload};
    case ActionType.ResetCity:
      return {...initialState};
    case ActionType.LoadOffers:
      return {...state, offers: action.payload, isDataLoaded: true};
    case ActionType.RequireAuthorization:
      return {...state, authorizationStatus: action.payload, isDataLoaded: true};
    case ActionType.RequireLogout:
      return {...state, authorizationStatus: AuthorizationStatus.NoAuth};
    default:
      return state;
  }
};

export {reducer};
