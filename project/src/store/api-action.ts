import {toast} from 'react-toastify';
import {ThunkActionResult} from '../types/action';
import {loadOffers, redirectToRoute, requireLogout, userLogin, loadOffer, loadOfferComplete, loadOfferError, loadOffersNearby, loadReviews, uploadReview} from './action';
import {saveToken, dropToken} from '../services/token';
import {APIRoute, AppRoute, ServiceMessage, SERVER_RESPONSE_OK, ReviewStatus} from '../const';
import {OfferResponse} from '../types/offer';
import {AuthData} from '../types/auth-data';
import {UserResponse} from '../types/user';
import {PostReview, ReviewFromServer} from '../types/review';
import {adaptOfferToClient, adaptReviewToClient, adaptUserToClient} from '../services/adapter';

const fetchOffers = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<OfferResponse[]>(APIRoute.Offers);
    dispatch(loadOffers(data.map((offer) => adaptOfferToClient(offer))));
  };

const fetchOffer = (id: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    dispatch(loadOffer());
    try {
      const {data} = await api.get<OfferResponse>(`${APIRoute.Offers}/${id}`);
      dispatch(loadOfferComplete(adaptOfferToClient(data)));
    } catch {
      dispatch(loadOfferError());
    }
  };

const fetchOffersNearby = (id: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<OfferResponse[]>(`${APIRoute.Offers}/${id}/nearby`);
    dispatch(loadOffersNearby(data.map((offer) => adaptOfferToClient(offer))));
  };

const fetchReviews = (id: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<ReviewFromServer[]>(`${APIRoute.Comments}/${id}`);
    dispatch(loadReviews(data.map((review) => adaptReviewToClient(review))));
  };

const postReview = ({comment, rating} : PostReview, id: string): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    dispatch(uploadReview(ReviewStatus.Uploading));
    try {
      await api.post<ReviewFromServer[]>(`${APIRoute.Comments}/${id}`, {comment, rating});
      const {data} = await api.get<ReviewFromServer[]>(`${APIRoute.Comments}/${id}`);
      dispatch(loadReviews(data.map((review)=> adaptReviewToClient(review))));
      dispatch(uploadReview(ReviewStatus.Uploaded));
    }
    catch {
      dispatch(uploadReview(ReviewStatus.NotUploaded));
      toast.warn(ServiceMessage.PostReviewFail);
    }
  };

const checkAuth = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    try {
      const response = await api.get(APIRoute.Login);
      if (response.status === SERVER_RESPONSE_OK) {
        dispatch(userLogin(adaptUserToClient(response.data)));
      }
    } catch {
      toast.info(ServiceMessage.AuthFail);
    }
  };

const login = ({login: email, password}: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    try {
      const {data} = await api.post<UserResponse>(APIRoute.Login, {email, password});
      saveToken(data.token);
      dispatch(userLogin(adaptUserToClient(data)));
      dispatch(redirectToRoute(AppRoute.Main));
    } catch {
      toast.warn(ServiceMessage.LoginFail);
    }
  };

const logout = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireLogout());
  };

export {fetchOffers, fetchOffer, fetchOffersNearby, fetchReviews, postReview, checkAuth, login, logout};
