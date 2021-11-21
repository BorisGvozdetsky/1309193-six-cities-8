import { AuthorizationStatus, ReviewStatus, SortType } from '../const';
import { RootState } from '../store/root-reducer';
import { Offer } from './offer';
import { Reviews } from './review';
import { User } from './user';

type AppData = {
  currentCity: string;
  activeSortType: SortType;
}

type OfferData = {
  offers: Offer[];
  isDataLoaded: boolean;
  offer: Offer | null;
  offersNearby: Offer[];
  isOfferLoading: boolean;
  isOfferError: boolean;
  isOffersNearbyLoaded: boolean;
}

type ReviewData = {
  reviewStatus: ReviewStatus;
  reviews: Reviews;
  isReviewsLoaded: boolean;
  isPostReviewError: boolean;
}

type UserData = {
  authorizationStatus: AuthorizationStatus;
  user: User | null;
}

type FavoritesData = {
  offersFavorite: Offer[];
  isOffersFavoriteLoaded: boolean;
};

export type {AppData, OfferData, ReviewData, UserData, FavoritesData};
export type State = RootState;
