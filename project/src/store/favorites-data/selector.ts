import { Offer } from '../../types/offer';
import { State } from '../../types/state';
import { NameSpace } from '../root-reducer';

const getOffersFavorite = (state: State): Offer[] => state[NameSpace.Favorites].offersFavorite;
const getIsOffersFavoriteLoaded = (state: State): boolean => state[NameSpace.Favorites].isOffersFavoriteLoaded;

export {getOffersFavorite, getIsOffersFavoriteLoaded};
