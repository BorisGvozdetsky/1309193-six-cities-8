import { AuthorizationStatus, SortType } from '../const';
import { Offer } from './offer';
import {User} from './user';

type State = {
  currentCity: string;
  offers: Offer[];
  activeSortType: SortType;
  authorizationStatus: AuthorizationStatus;
  isDataLoaded: boolean;
  user: User | null;
};

export type {State};
