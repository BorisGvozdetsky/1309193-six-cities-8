import { createSelector } from 'reselect';
import { SortType } from '../../const';
import { Offer } from '../../types/offer';
import { State } from '../../types/state';
import { getActiveSortType, getCurrentCity } from '../app-data/selectors';
import { NameSpace } from '../root-reducer';

const getOffers = (state: State): Offer[] => state[NameSpace.offer].offers;
const getIsDataLoaded = (state: State): boolean => state[NameSpace.offer].isDataLoaded;
const getOffer = (state: State): Offer | null => state[NameSpace.offer].offer;
const getOfferNearby = (state: State): Offer[] => state[NameSpace.offer].offersNearby;
const getIsOfferLoading = (state: State): boolean => state[NameSpace.offer].isOfferLoading;
const getIsOfferError = (state: State): boolean => state[NameSpace.offer].isOfferError;
const getIsOffersNearbyLoaded = (state: State): boolean => state[NameSpace.offer].isOffersNearbyLoaded;

const getCityOffers = createSelector(
  [getOffers, getCurrentCity],
  (offers, city) => offers.filter((offer) => city === offer.city.name),
);

const getSortedOffers = createSelector(
  [getCityOffers, getActiveSortType],
  (offers, activeSortType) => {
    const offersInitial = [...offers];

    switch (activeSortType) {
      case SortType.PriceHighToLow:
        return offersInitial.sort((a, b) => b.price - a.price);
      case SortType.PriceLowToHigh:
        return offersInitial.sort((a, b) => a.price - b.price);
      case SortType.TopRated:
        return offersInitial.sort((a, b) => b.rating - a.rating);
      default:
        return offersInitial;
    }
  },
);

export {getOffers, getIsDataLoaded, getOffer, getOfferNearby, getIsOfferLoading, getIsOfferError, getIsOffersNearbyLoaded, getSortedOffers};
