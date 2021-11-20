import {FormEvent, Fragment, useState, ChangeEvent, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ReviewStatus} from '../../const';
import {ratingStars} from './const';
import {postReview} from '../../store/api-action';
import { getReviewStatus } from '../../store/review-data/selectors';

const MIN_COMMENT_LENGTH = 50;
const MAX_COMMENT_LENGTH = 300;

type CommentFormProps = {
  id: string,
}

function CommentForm(props: CommentFormProps): JSX.Element {
  const reviewStatus = useSelector(getReviewStatus);
  const dispatch = useDispatch();

  const [isReviewUploading, isReviewUploaded, isReviewNotUploaded] = [
    reviewStatus === ReviewStatus.Uploading,
    reviewStatus === ReviewStatus.Uploaded,
    reviewStatus === ReviewStatus.NotUploaded,
  ];

  const {id} = props;
  const [rating, setRating] = useState(0);

  const [comment, setComment] = useState('');
  const isFormComplete = comment.length > MIN_COMMENT_LENGTH && rating > 0;

  const handleTextareaChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(evt.target.value);
  };

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setRating(Number(evt.target.value));
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(postReview({comment, rating}, id));
  };

  useEffect(() => {
    if (isReviewUploaded) {
      setRating(0);
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
              checked={star.value === rating}
              onChange={handleInputChange}
              disabled={isReviewUploading}
            />
            <label htmlFor={star.id} className="reviews__rating-label form__rating-label" title="perfect">
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
        maxLength={MAX_COMMENT_LENGTH}
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

export default CommentForm;
