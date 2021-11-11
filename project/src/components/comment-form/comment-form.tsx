import {FormEvent, Fragment, useState, ChangeEvent, useEffect} from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {ThunkAppDispatch} from '../../types/action';
import {PostReview} from '../../types/review';
import {ReviewStatus} from '../../const';
import {ratingStars} from './const';
import {postReview} from '../../store/api-action';
import {State} from '../../types/state';

const MIN_COMMENT_LENGTH = 50;

type CommentFormProps = {
  id: string,
}

const mapStateToProps = ({reviewStatus}: State) => ({
  isReviewUploading: reviewStatus === ReviewStatus.Uploading,
  isReviewUploaded: reviewStatus === ReviewStatus.Uploaded,
  isReviewNotUploaded: reviewStatus === ReviewStatus.NotUploaded,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  handlePostReview(review: PostReview, id: string) {
    dispatch(postReview(review, id));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = CommentFormProps & PropsFromRedux;

function CommentForm(props: ConnectedComponentProps): JSX.Element {

  const {id, isReviewUploading, isReviewUploaded, isReviewNotUploaded, handlePostReview} = props;
  const [rating, setRating] = useState('');

  const [comment, setComment] = useState('');
  const isFormComplete = comment.length > MIN_COMMENT_LENGTH && Boolean(rating);

  const handleTextareaChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(evt.target.value);
  };

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setRating(evt.target.value);
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    handlePostReview({comment, rating: Number(rating)}, id);
  };

  useEffect(() => {
    if (isReviewUploaded) {
      setRating('');
      setComment('');
    }
  }, [isReviewUploaded]);

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleFormSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {ratingStars.map((star) => (
          <Fragment key={`${star.value}`}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              type="radio"
              value={`${star.value}`}
              id={star.id}
              checked={star.value === Number(rating)}
              onChange={handleInputChange}
              disabled={isReviewUploading}
            />
            <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </Fragment>
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleTextareaChange}
        maxLength={300}
        value={comment}
        disabled={isReviewUploading}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!isReviewNotUploaded && (!isFormComplete || isReviewUploading)}>Submit</button>
      </div>
    </form>
  );
}

export {CommentForm};
export default connector(CommentForm);
