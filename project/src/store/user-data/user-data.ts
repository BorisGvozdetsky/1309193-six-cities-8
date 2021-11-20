import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../../const';
import { UserData } from '../../types/state';
import { requireLogout, userLogin } from '../action';

const initialState: UserData = {
  authorizationStatus: AuthorizationStatus.Unknown,
  user: null,
};

const userDataReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(requireLogout, (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    })
    .addCase(userLogin, (state, action) => {
      state.user = action.payload;
      state.authorizationStatus = AuthorizationStatus.Auth;
    });
});

export {userDataReducer};
