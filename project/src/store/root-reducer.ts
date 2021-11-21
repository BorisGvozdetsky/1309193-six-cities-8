import { combineReducers } from 'redux';
import { appDataReducer } from './app-data/app-data';
import { favoriteDataReducer } from './favorites-data/favorites-data';
import { offerDataReducer } from './offer-data/offer-data';
import { reviewDataReducer } from './review-data/review-data';
import { userDataReducer } from './user-data/user-data';

enum NameSpace {
  App = 'APP',
  Offer = 'OFFER',
  Review = 'REVIEW',
  User = 'USER',
  Favorites = 'FAVORITE',
}

const rootReducer = combineReducers({
  [NameSpace.App]: appDataReducer,
  [NameSpace.Offer]: offerDataReducer,
  [NameSpace.Review]: reviewDataReducer,
  [NameSpace.User]: userDataReducer,
  [NameSpace.Favorites]: favoriteDataReducer,
});

export {NameSpace, rootReducer};
export type RootState = ReturnType<typeof rootReducer>;
