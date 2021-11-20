import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppRoute, PlaceType } from '../../const';
import { switchCity, updateFavorites } from '../../store/action';
import { changeFavoriteStatus, fetchFavorites } from '../../store/api-action';
import { getIsOffersFavoriteLoaded, getOffersFavorite } from '../../store/favorites-data/selector';
import Header from '../header/header';
import PlaceList from '../place-list/place-list';
import Spinner from '../spinner/spinner';
import FavoritesEmpty from '../favorites-empty/favorites-empty';

function Favorites(): JSX.Element {
  const offersFavoriteInitial = useSelector(getOffersFavorite);
  const offersFavorite = offersFavoriteInitial.filter((offer) => offer.isFavorite);
  const isOffersFavoriteLoaded = useSelector(getIsOffersFavoriteLoaded);

  const hasNoOffers = offersFavorite.length === 0;
  const cities = [...new Set(offersFavorite.map((offer) => offer.city.name))];

  const dispatch = useDispatch();

  const handleFavoriteClick = (offerId: number, isFavorite: boolean) => {
    dispatch(changeFavoriteStatus(
      offerId,
      isFavorite,
      (updatedOffer) => {
        dispatch(updateFavorites(updatedOffer));
      },
    ));
  };

  const handleCitySwitch = (city: string) => {
    dispatch(switchCity(city));
  };

  useEffect(() => {
    dispatch(fetchFavorites());
  },[dispatch]);

  const renderFavorites = () => (
    <div className="page__favorites-container container">
      {hasNoOffers ?
        <FavoritesEmpty /> :
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {cities.map((place) => {
              const cityOffers = offersFavorite.filter((offer) => offer.city.name === place);
              return (
                <li key={Math.random()} className="favorites__locations-items">
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <Link
                        to={AppRoute.Main}
                        className="locations__item-link" href="#/"
                        onClick={() => {
                          handleCitySwitch(place as string);
                        }}
                      >
                        <span>{place}</span>
                      </Link>
                    </div>
                  </div>
                  <div className="favorites__places">
                    <PlaceList offers={cityOffers} placeType={PlaceType.Favorite} handleFavoriteClick={handleFavoriteClick}/>
                  </div>
                </li>
              );
            })};
          </ul>
        </section>}
    </div>
  );
  return (
    <div className={`page ${hasNoOffers ? 'page--favorites-empty' : ''}`}>
      <Header isPageLogin={false} />
      <main className={`page__main page__main--favorites ${hasNoOffers ? 'page__main--favorites-empty' : ''}`}>
        {!isOffersFavoriteLoaded ?
          <Spinner /> :
          renderFavorites()}
      </main>
      <footer className="footer container">
        <Link to={AppRoute.Main} className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </div>
  );
}

export default Favorites;
