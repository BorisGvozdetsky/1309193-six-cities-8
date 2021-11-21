import { addRatingPercent, capitalizeString } from '../../utils/utils';
import CommentList from '../comment-list/comment-list';
import CommentForm from '../comment-form/comment-form';
import Map from '../map/map';
import PlaceList from '../place-list/place-list';
import Header from '../header/header';
import { useEffect, useMemo } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeFavoriteStatus, fetchOffer, fetchOffersNearby, fetchReviews } from '../../store/api-action';
import { AuthorizationStatus, PlaceType, MapType, AppRoute } from '../../const';
import Spinner from '../spinner/spinner';
import NotFound from '../not-found/not-found';
import { getIsOfferError, getIsOfferLoading, getIsOffersNearbyLoaded, getOffer, getOfferNearby } from '../../store/offer-data/selectors';
import { getAuthorizationStatus } from '../../store/user-data/selectors';
import { getIsReviewsLoaded, getReviews } from '../../store/review-data/selectors';
import { updateOffer, updateOffersNearby } from '../../store/action';

const MAX_IMAGES_COUNT = 6;

function Property(): JSX.Element {

  const authorizationStatus = useSelector(getAuthorizationStatus);
  const offer = useSelector(getOffer);
  const offersNearby = useSelector(getOfferNearby);
  const reviews = useSelector(getReviews);
  const isOfferLoading = useSelector(getIsOfferLoading);
  const isOfferError = useSelector(getIsOfferError);
  const isOffersNearbyLoaded = useSelector(getIsOffersNearbyLoaded);
  const isReviewsLoaded = useSelector(getIsReviewsLoaded);

  const {id} = useParams<{id: string}>();
  const dispatch = useDispatch();
  const history = useHistory();

  const handleFavoriteClick = () => {
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      history.push(AppRoute.SignIn);
      return;
    }
    if (offer) {
      dispatch(changeFavoriteStatus(
        offer.id,
        offer.isFavorite,
        (updatedOffer) => {
          dispatch(updateOffer(updatedOffer));
        },
      ));
    }
  };

  const handleNearbyOfferFavoriteClick = (offerId: number, isFavorite: boolean) => {
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      history.push(AppRoute.SignIn);
      return;
    }
    dispatch(changeFavoriteStatus(
      offerId,
      isFavorite,
      (updatedOffer) => {
        dispatch(updateOffersNearby(updatedOffer));
      },
    ));
  };

  useEffect(() => {
    dispatch(fetchOffer(id));
    dispatch(fetchOffersNearby(id));
    dispatch(fetchReviews(id));
  },[dispatch, id]);

  const offers = useMemo(() => {
    if (!offer) {
      return [];
    }
    return [...offersNearby, offer];
  }, [offer, offersNearby]);

  const renderOffer = () => {

    if (isOfferLoading) {
      return <Spinner />;
    }

    if (offer) {
      const {bedrooms, description, goods, host, images, isFavorite, isPremium, maxAdults, price, rating, title, type} = offer;
      return (
        <>
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {images.slice(0, MAX_IMAGES_COUNT).map((image) => (
                  <div key={Math.random()} className="property__image-wrapper">
                    <img className="property__image" src={image} alt="Studio" />
                  </div>
                ))}
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                {isPremium && <div className="property__mark"><span>Premium</span></div>}
                <div className="property__name-wrapper">
                  <h1 className="property__name">{title}</h1>
                  <button className={`property__bookmark-button button ${isFavorite ? 'property__bookmark-button--active' : ''}`} type="button" onClick={handleFavoriteClick}>
                    <svg className="property__bookmark-icon" width="31" height="33">
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{width: `${addRatingPercent(rating)}%`}}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">{rating}</span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">{capitalizeString(type)}</li>
                  <li className="property__feature property__feature--bedrooms">{bedrooms} Bedrooms</li>
                  <li className="property__feature property__feature--adults">Max {maxAdults} adults</li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">&euro;{price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    {goods.map((good) => (<li key={Math.random()} className="property__inside-item">{good}</li>))}
                  </ul>
                </div>
                <div className="property__host"  >
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className={`property__avatar-wrapper user__avatar-wrapper ${host.isPro ? 'property__avatar-wrapper--pro' : ''}`}>
                      <img className="property__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar" />
                    </div>
                    <span className="property__user-name">{host.name}</span>
                    {host.isPro && <span className="property__user-status">Pro</span>}
                  </div>
                  <div className="property__description">
                    <p className="property__text">{description}</p>
                  </div>
                </div>
                <section className="property__reviews reviews">
                  <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                  {!isReviewsLoaded ? <Spinner /> : <CommentList reviews={reviews} />}
                  {authorizationStatus === AuthorizationStatus.Auth && (<CommentForm  id={id} />)}
                </section>
              </div>
            </div>
            {!isOffersNearbyLoaded ? <Spinner /> : <Map offers={offers} mapType={MapType.Property} selectedOffer={offer}/>}
          </section>
          {!isOffersNearbyLoaded ?
            <Spinner /> :
            <div className="container">
              <section className="near-places places">
                <h2 className="near-places__title">Other places in the neighbourhood</h2>
                <div className="near-places__list places__list">
                  <PlaceList offers={offersNearby} placeType={PlaceType.Near} onFavoriteClick={handleNearbyOfferFavoriteClick}/>
                </div>
              </section>
            </div>}
        </>
      );
    }
  };

  return (
    <div>
      {isOfferError ?
        <NotFound /> :
        <div className="page">
          <Header isPageLogin={false} />
          <main className="page__main page__main--property">
            {renderOffer()}
          </main>
        </div>}
    </div>
  );
}

export default Property;
