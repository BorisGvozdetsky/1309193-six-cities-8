import { SortType, ReviewStatus } from '../const';
import { AuthorizationStatus } from '../const';
import { ActionType, Actions } from '../types/action';
import { State } from '../types/state';

const initialState = {
  currentCity: 'Paris',
  offers: [],
  activeSortType: SortType.Popular,
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
  user: null,
  offer: null,
  offersNearby: [],
  reviews: [],
  authStatus: AuthorizationStatus.Unknown,
  isOfferLoading: false,
  isOfferError: false,
  isOffersNearbyLoaded: false,
  isReviewsLoaded: false,
  isPostReviewError: false,
  reviewStatus: ReviewStatus.Unknown,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.SwitchCity:
      return {...state, currentCity: action.payload};
    case ActionType.SetSortType:
      return {...state, activeSortType: action.payload};
    case ActionType.LoadOffers:
      return {...state, offers: action.payload, isDataLoaded: true};
    case ActionType.LoadOffer:
      return {...state, isOfferLoading: true, isOfferError: false};
    case ActionType.LoadOfferComplete:
      return {...state, offer: action.payload, isOfferLoading: false};
    case ActionType.LoadOfferError:
      return {...state, isOfferLoading: false, isOfferError: true};
    case ActionType.LoadOffersNearby:
      return {...state, offersNearby: action.payload, isOffersNearbyLoaded: true};
    case ActionType.LoadReviews:
      return {...state, reviews: action.payload, isReviewsLoaded: true, isPostReviewError: false};
    case ActionType.UploadReview:
      return {...state, reviewStatus: action.payload};
    case ActionType.RequireLogout:
      return {...state, authorizationStatus: AuthorizationStatus.NoAuth};
    case ActionType.UserLogin:
      return {...state, user: action.payload, authorizationStatus: AuthorizationStatus.Auth};
    default:
      return state;
  }
};

export {reducer};
