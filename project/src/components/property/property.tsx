import { Offer } from '../../types/offer';
import { addRatingPercent } from '../../utils/utils';
import CommentList from '../comment-list/comment-list';
import CommentForm from '../comment-form/comment-form';
import Map from '../map/map';
import { Review } from '../../types/review';
import { MapType, PlaceType } from '../../const';
import PlaceList from '../place-list/place-list';
import Header from '../header/header';

type PropertyProps = {
  offer: Offer;
  offers: Offer[];
  reviews: Review[];
}

function Property(props: PropertyProps): JSX.Element {
  const {offer, offers, reviews} = props;
  const {id, rating, isPremium, images, title, price, host, isFavorite, type, bedrooms, maxAdults, goods, description} = offer;
  const nearPlaces = offers.slice(0,3);
  return (
    <div className="page">
      <Header isPageLogin={false}/>
      <main className="page__main page__main--property">
        <section id={`${id}`} className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {
                images.map((image) => (
                  <div key={Math.random()} className="property__image-wrapper">
                    <img className="property__image" src={image} alt="studio" />
                  </div>
                ))
              }
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium ?
                <div className="property__mark">
                  <span>Premium</span>
                </div> : ''}
              <div className="property__name-wrapper">
                <h1 className="property__name">{title}</h1>
                <button className={`property__bookmark-button button ${isFavorite ? 'property__bookmark-button--active' : ''}`} type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{ width: `${addRatingPercent(rating)}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">{type}</li>
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
                  {
                    goods.map((product) =>(
                      <li  key={Math.random()} className="property__inside-item">{product}</li>
                    ))
                  }
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={`property__avatar-wrapper user__avatar-wrapper ${host.isPro ? ' property__avatar-wrapper--pro' : ''}`}>
                    <img className="property__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    Angelina
                  </span>
                  {host.isPro ?
                    <span className="property__user-status">
                      Pro
                    </span> : ''}
                </div>
                <div className="property__description">
                  <p className="property__text">{description}</p>
                </div>
              </div>
            </div>
            <section className="property__reviews reviews">
              <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
              { reviews.length > 0 ? <CommentList reviews={reviews}/> : '' }
              <CommentForm/>
            </section>
          </div>
          <Map offers={offers} mapType={MapType.Property}/>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <PlaceList offers={nearPlaces} placeType={PlaceType.Near}/>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Property;
