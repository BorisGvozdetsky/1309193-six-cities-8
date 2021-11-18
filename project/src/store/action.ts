import { AppRoute, ReviewStatus, SortType } from '../const';
import { ActionType, LoadOffersAction, Requirelogout, SwitchCityAction, RedirectToRouteAction, SetSortTypeAction, UserLoginAction, UploadReviewAction, LoadOfferAction, LoadOfferCompleteAction, LoadOfferErrorAction, LoadOffersNearbyAction, LoadReviewsAction} from '../types/action';
import { Offer } from '../types/offer';
import { User } from '../types/user';
import {Reviews} from '../types/review';

const setSortType = (sortType: SortType): SetSortTypeAction => ({
  type: ActionType.SetSortType,
  payload: sortType,
});

const switchCity = (name: string): SwitchCityAction => ({
  type: ActionType.SwitchCity,
  payload: name,
});

const loadOffers = (offers: Offer[]): LoadOffersAction => ({
  type: ActionType.LoadOffers,
  payload: offers,
});

const loadOffer = (): LoadOfferAction => ({
  type: ActionType.LoadOffer,
});

const requireLogout = (): Requirelogout => ({
  type: ActionType.RequireLogout,
});

const redirectToRoute = (url: AppRoute): RedirectToRouteAction => ({
  type: ActionType.RedirectToRoute,
  payload: url,
});

const userLogin = (user: User): UserLoginAction => ({
  type: ActionType.UserLogin,
  payload: user,
});

const loadOfferComplete = (offer: Offer): LoadOfferCompleteAction => ({
  type: ActionType.LoadOfferComplete,
  payload: offer,
});

const loadOfferError = (): LoadOfferErrorAction => ({
  type: ActionType.LoadOfferError,
});

const loadOffersNearby = (offers: Offer[]): LoadOffersNearbyAction => ({
  type: ActionType.LoadOffersNearby,
  payload: offers,
});

const loadReviews = (reviews: Reviews): LoadReviewsAction => ({
  type: ActionType.LoadReviews,
  payload: reviews,
});

const uploadReview = (postStatus: ReviewStatus): UploadReviewAction => ({
  type: ActionType.UploadReview,
  payload: postStatus,
});

export {switchCity, loadOffers, loadOffer, requireLogout, setSortType, redirectToRoute, userLogin, loadOfferComplete, uploadReview, loadOfferError, loadOffersNearby, loadReviews};
