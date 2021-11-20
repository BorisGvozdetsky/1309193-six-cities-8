import {combineReducers} from 'redux';
import { appDataReducer } from './app-data/app-data';
import { favoriteDataReducer } from './favorites-data/favorites-data';
import { offerDataReducer } from './offer-data/offer-data';
import { reviewDataReducer } from './review-data/review-data';
import { userDataReducer } from './user-data/user-data';

export enum NameSpace {
  app = 'APP',
  offer = 'OFFER',
  review = 'REVIEW',
  user = 'USER',
  favorites = 'FAVORITE',
}

export const rootReducer = combineReducers({
  [NameSpace.app]: appDataReducer,
  [NameSpace.offer]: offerDataReducer,
  [NameSpace.review]: reviewDataReducer,
  [NameSpace.user]: userDataReducer,
  [NameSpace.favorites]: favoriteDataReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
