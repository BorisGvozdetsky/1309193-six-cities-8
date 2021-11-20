import { ReviewStatus } from '../../const';
import { Reviews } from '../../types/review';
import { State } from '../../types/state';
import { NameSpace } from '../root-reducer';

const getReviews = (state: State): Reviews => state[NameSpace.review].reviews;
const getIsReviewsLoaded = (state: State): boolean => state[NameSpace.review].isReviewsLoaded;
const getIsPostReviewError = (state: State): boolean => state[NameSpace.review].isPostReviewError;
const getReviewStatus = (state: State): ReviewStatus => state[NameSpace.review].reviewStatus;

export {getReviews, getIsReviewsLoaded, getIsPostReviewError, getReviewStatus};
