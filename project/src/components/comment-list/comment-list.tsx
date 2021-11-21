import { useMemo } from 'react';
import { Review } from '../../types/review';
import Comment from '../comment/comment';

const MAX_REVIEWS_AMOUNT = 10;

type CommentListProps = {
  reviews: Review[];
}

function CommentList(props: CommentListProps): JSX.Element {
  const {reviews} = props;

  const reviewsVisible = useMemo(() =>
    [...reviews]
      .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
      .slice(0, MAX_REVIEWS_AMOUNT),
  [reviews]);

  return (
    <ul className="reviews__list">
      {reviewsVisible.map((review) => <Comment key={review.id} review={review}/>)}
    </ul>
  );
}

export default CommentList;
