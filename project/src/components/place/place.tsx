import { Link } from 'react-router-dom';
import { AppRoute, PlaceType } from '../../const';
import {Offer} from '../../types/offer';
import { addRatingPercent } from '../../utils/utils';

const CardImageSize = {
  default: {
    height: '200',
    width: '260',
  },
  favorite: {
    height: '110',
    width: '150',
  },
};

type PlaceProps = {
  offer: Offer;
  placeType: string;
  onMouseEnter?: (offerId: number) => void;
  onMouseLeave?: () => void;
  onFavoriteClick?: (offerId: number, isFavorite: boolean) => void;
}

function Place(props: PlaceProps): JSX.Element {
  const {offer, placeType, onMouseEnter, onMouseLeave, onFavoriteClick} = props;
  const {id, price, type, title, previewImage, isPremium, rating, isFavorite} = offer;
  const isCityPlace = placeType === PlaceType.City;
  const isNearPlace = placeType === PlaceType.Near;
  const isFavoritePlace = placeType === PlaceType.Favorite;

  const handleMouseEnter = () => {
    onMouseEnter && onMouseEnter(offer.id);
  };
  const handleMouseLeave = () => {
    onMouseLeave && onMouseLeave();
  };

  const handleFavoriteClick = () => {
    onFavoriteClick && onFavoriteClick(id, isFavorite);
  };

  return (
    <article
      className={`place-card ${isCityPlace ? 'cities__place-card' : ''} ${isNearPlace ? 'near-places__card' : ''} ${isFavoritePlace ? 'favorites__card' : ''}`}
      id={`${id}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isPremium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div> : ''}
      <div className={`place-card__image-wrapper ${isCityPlace ? 'cities__image-wrapper' : ''} ${isFavoritePlace ? 'favorites__image-wrapper' : ''}`}>
        <Link to={`${AppRoute.Room}/${id}`}>
          <img className="place-card__image"
            src={previewImage}
            width={!isFavoritePlace ? CardImageSize.default.width : CardImageSize.favorite.width}
            height={!isFavoritePlace ? CardImageSize.default.height : CardImageSize.favorite.height}
            alt="Place"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${isFavorite ? 'place-card__bookmark-button--active' : ''}`} onClick={handleFavoriteClick} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          {
            <div className="place-card__stars rating__stars">
              <span style={{ width: `${addRatingPercent(rating)}%`}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          }
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Room}/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default Place;
