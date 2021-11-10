import {ThunkActionResult} from '../types/action';
import {loadOffers, redirectToRoute, requireLogout, userLogin} from './action';
import {saveToken, dropToken} from '../services/token';
import {APIRoute, AppRoute, AUTH_FAIL_MESSAGE, LOGIN_FAIL_MESSAGE} from '../const';
import {AuthData} from '../types/auth-data';
import { OfferResponse } from '../types/offer';
import { adaptOfferToClient, adaptUserToClient } from '../services/adapter';
import { UserResponse } from '../types/user';
import {toast} from 'react-toastify';

const fetchOffers = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<OfferResponse[]>(APIRoute.Offers);
    dispatch(loadOffers(data.map((hotel) => adaptOfferToClient(hotel))));
  };

const checkAuth = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    try {
      const response = await api.get(APIRoute.Login);
      if (response.status === 200) {
        dispatch(userLogin(adaptUserToClient(response.data)));
      }
    } catch {
      toast.info(AUTH_FAIL_MESSAGE);
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
      toast.warn(LOGIN_FAIL_MESSAGE);
    }
  };

const logout = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireLogout());
  };

export {fetchOffers, checkAuth, login, logout};
