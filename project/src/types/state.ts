import { AuthorizationStatus, ReviewStatus, SortType } from '../const';
import { Offer } from './offer';
import { Reviews } from './review';
import {User} from './user';

type State = {
  currentCity: string;
  offers: Offer[];
  activeSortType: SortType;
  authorizationStatus: AuthorizationStatus;
  isDataLoaded: boolean;
  user: User | null;
  reviewStatus: ReviewStatus;
  offer: Offer | null;
  offersNearby: Offer[];
  reviews: Reviews;
  isOfferLoading: boolean;
  isOfferError: boolean;
  isOffersNearbyLoaded: boolean;
  isReviewsLoaded: boolean;
  isPostReviewError: boolean;
};

export type {State};
