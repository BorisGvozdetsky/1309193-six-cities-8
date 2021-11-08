import { AuthorizationStatus, SortType } from '../const';
import { Offer } from './offer';

type State = {
  currentCity: string;
  offers: Offer[];
  activeSortType: SortType;
  authorizationStatus: AuthorizationStatus;
  isDataLoaded: boolean,
};

export type {State};
