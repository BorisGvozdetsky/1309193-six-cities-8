import PlaceList from '../place-list/place-list';
import Map from '../map/map';
import { MapType, PlaceType, SortType } from '../../const';
import CitiesList from '../cities-list/cities-list';
import { Dispatch } from 'redux';
import { switchCity } from '../../store/action';
import { connect, ConnectedProps } from 'react-redux';
import { Actions } from '../../types/action';
import { State } from '../../types/state';
import Header from '../header/header';
import MainEmpty from '../main-empty/main-empty';
import Sort from '../sort/sort';
import { Offer } from '../../types/offer';
import { useState } from 'react';


const mapStateToProps = ({ currentCity, offers, activeSortType }: State) => (
  { currentCity, offers, activeSortType }
);

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  handleCitySwitch: (city: string) => {
    dispatch(switchCity(city));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function PageMain(props: PropsFromRedux): JSX.Element {
  const {offers, currentCity, activeSortType, handleCitySwitch} = props;
  const cityOffers = offers.filter((offer) => currentCity === offer.city.name);

  const [selectedOffer, setSelectedOffer] = useState<Offer | undefined>(undefined);
  const handlePlaceMouseEnter = (placeId: number) => {
    const currentOffer = offers.find((offer) => offer.id === placeId);
    setSelectedOffer(currentOffer);
  };

  const handlePlaceMouseLeave = () => {
    setSelectedOffer(undefined);
  };

  switch(activeSortType){
    case SortType.PriceHighToLow:
      cityOffers.sort((a, b) => b.price - a.price);
      break;
    case SortType.PriceLowToHigh:
      cityOffers.sort((a, b) => a.price - b.price);
      break;
    case SortType.TopRated:
      cityOffers.sort((a, b) => b.rating - a.rating);
      break;
    default:
      break;
  }
  return (
    <div className="page page--gray page--main">
      <Header isPageLogin={false}/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CitiesList currentCity={currentCity} handleCitySwitch={handleCitySwitch}/>
        {
          cityOffers.length > 0 ?
            <div className="cities">
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{cityOffers.length} places to stay in {currentCity}</b>
                  <Sort/>
                  <div className="cities__places-list places__list tabs__content">
                    <PlaceList offers={cityOffers} placeType={PlaceType.City} handlePlaceMouseEnter={handlePlaceMouseEnter} handlePlaceMouseLeave={handlePlaceMouseLeave}/>
                  </div>
                </section>
                <div className="cities__right-section">
                  <Map offers={cityOffers} mapType={MapType.City} selectedOffer={selectedOffer}/>
                </div>
              </div>
            </div>
            : <MainEmpty cityName={currentCity}/>
        }
      </main>
    </div>
  );
}

export {PageMain};
export default connector(PageMain);
