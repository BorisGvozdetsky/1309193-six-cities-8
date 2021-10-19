import { Review } from '../../types/review';
import Comment from '../comment/comment';

type CommentListProps = {
  reviews: Review[];
}

function CommentList(props: CommentListProps): JSX.Element {
  const {reviews} = props;

  return (
    <ul className="reviews__list">
      {reviews.map((review) => <Comment key={review.id} review={review}/>)}
    </ul>
  );
}

export default CommentList;
