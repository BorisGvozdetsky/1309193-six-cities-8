import { createReducer } from '@reduxjs/toolkit';
import { ReviewStatus } from '../../const';
import { ReviewData } from '../../types/state';
import { loadReviews, uploadReview } from '../action';

const initialState: ReviewData = {
  reviews: [],
  isReviewsLoaded: false,
  isPostReviewError: false,
  reviewStatus: ReviewStatus.Unknown,
};

const reviewDataReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
      state.isReviewsLoaded = true;
      state.isPostReviewError = false;
    })
    .addCase(uploadReview, (state, action) => {
      state.reviewStatus = action.payload;
    });
});

export {reviewDataReducer};
