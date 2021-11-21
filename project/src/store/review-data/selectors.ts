import { ReviewStatus } from '../../const';
import { Reviews } from '../../types/review';
import { State } from '../../types/state';
import { NameSpace } from '../root-reducer';

const getReviews = (state: State): Reviews => state[NameSpace.Review].reviews;
const getIsReviewsLoaded = (state: State): boolean => state[NameSpace.Review].isReviewsLoaded;
const getIsPostReviewError = (state: State): boolean => state[NameSpace.Review].isPostReviewError;
const getReviewStatus = (state: State): ReviewStatus => state[NameSpace.Review].reviewStatus;

export {getReviews, getIsReviewsLoaded, getIsPostReviewError, getReviewStatus};
