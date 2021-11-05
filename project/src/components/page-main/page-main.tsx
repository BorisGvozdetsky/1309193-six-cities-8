import {SortType } from '../../const';
import CitiesList from '../cities-list/cities-list';
import { Dispatch } from 'redux';
import { switchCity } from '../../store/action';
import { connect, ConnectedProps } from 'react-redux';
import { Actions } from '../../types/action';
import { State } from '../../types/state';
import Header from '../header/header';
import PlaceContainer from '../place-container/place-container';
import LoaderSpinner from '../loader-spinner/loader-spinner';


const mapStateToProps = ({ currentCity, offers, activeSortType, authorizationStatus, isDataLoaded}: State) => ({
  currentCity,
  offers,
  activeSortType,
  authorizationStatus,
  isDataLoaded,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  handleCitySwitch: (city: string) => {
    dispatch(switchCity(city));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function PageMain(props: PropsFromRedux): JSX.Element {

  const {offers, currentCity, activeSortType, isDataLoaded, handleCitySwitch} = props;
  const cityOffers = offers.filter((offer) => currentCity === offer.city.name);
  const hasNoOffers = cityOffers.length === 0;

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
        {!isDataLoaded ? <LoaderSpinner/> : <PlaceContainer currentCity={currentCity} cityOffers={cityOffers} hasNoOffers={hasNoOffers}/>}
      </main>
    </div>
  );
}

export {PageMain};
export default connector(PageMain);

