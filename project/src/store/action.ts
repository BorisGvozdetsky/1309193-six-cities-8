import { AppRoute, ReviewStatus, SortType } from '../const';
import { ActionType } from '../types/action';
import { Offer } from '../types/offer';
import { User } from '../types/user';
import { Reviews } from '../types/review';
import { createAction } from '@reduxjs/toolkit';

const setSortType = createAction(
  ActionType.SetSortType,
  (sortType: SortType) => ({
    payload: sortType,
  }),
);

const switchCity = createAction(
  ActionType.SwitchCity,
  (name: string) => ({
    payload: name,
  }),
);

const loadOffers = createAction(
  ActionType.LoadOffers,
  (offers: Offer[]) => ({
    payload: offers,
  }),
);

const loadOffer = createAction(ActionType.LoadOffer);

const requireLogout = createAction(ActionType.RequireLogout);

const redirectToRoute = createAction(
  ActionType.RedirectToRoute,
  (url: AppRoute) => ({
    payload: url,
  }),
);

const userLogin = createAction(
  ActionType.UserLogin,
  (user: User) => ({
    payload: user,
  }),
);

const loadOfferComplete = createAction(
  ActionType.LoadOfferComplete,
  (offer: Offer) => ({
    payload: offer,
  }),
);

const loadOfferError = createAction(ActionType.LoadOfferError);

const loadOffersNearby = createAction(
  ActionType.LoadOffersNearby,
  (offers: Offer[]) => ({
    payload: offers,
  }),
);

const loadReviews = createAction(
  ActionType.LoadReviews,
  (reviews: Reviews) => ({
    payload: reviews,
  }),
);

const uploadReview = createAction(
  ActionType.UploadReview,
  (postStatus: ReviewStatus) => ({
    payload: postStatus,
  }),
);

const updateOffers = createAction(
  ActionType.UpdateOffers,
  (offer: Offer) => ({
    payload: offer,
  }),
);

const updateOffer = createAction(
  ActionType.UpdateOffer,
  (offer: Offer) => ({
    payload: offer,
  }),
);

const updateOffersNearby = createAction(
  ActionType.UpdateOffersNearby,
  (offer: Offer) => ({
    payload: offer,
  }),
);

const loadFavorites = createAction(
  ActionType.LoadFavorites,
  (offers: Offer[]) => ({
    payload: offers,
  }),
);

const updateFavorites = createAction(
  ActionType.UpdateFavorites,
  (offer: Offer) => ({
    payload: offer,
  }),
);

const resetOffers = createAction(ActionType.ResetOffers);

export {switchCity, loadOffers, loadOffer, requireLogout, setSortType, redirectToRoute, userLogin, loadOfferComplete, uploadReview, loadOfferError, loadOffersNearby, loadReviews, updateOffers, updateOffer, loadFavorites, updateFavorites, updateOffersNearby, resetOffers};
