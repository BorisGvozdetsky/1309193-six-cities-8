import { Offer } from './offer';

type State = {
  currentCity: string;
  offers: Offer[];
  activeSortType: string;
};

export type {State};
