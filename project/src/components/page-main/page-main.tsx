import PlaceList from '../place-list/place-list';
import Map from '../map/map';
import { MapType, PlaceType } from '../../const';
import CitiesList from '../cities-list/cities-list';
import { Dispatch } from 'redux';
import { switchCity } from '../../store/action';
import { connect, ConnectedProps } from 'react-redux';
import { Actions } from '../../types/action';
import { State } from '../../types/state';
import Header from '../header/header';
import MainEmpty from '../main-empty/main-empty';

const mapStateToProps = ({ currentCity, offers }: State) => (
  { currentCity, offers }
);

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  handleCitySwitch: (city: string) => {
    dispatch(switchCity(city));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function PageMain(props: PropsFromRedux): JSX.Element {
  const {offers, currentCity, handleCitySwitch} = props;
  const cityOffers = offers.filter((offer) => currentCity === offer.city.name);
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
                  <form className="places__sorting" action="#" method="get">
                    <span className="places__sorting-caption">Sort by</span>
                    <span className="places__sorting-type" tabIndex={0}>
                      Popular
                      <svg className="places__sorting-arrow" width="7" height="4">
                        <use xlinkHref="#icon-arrow-select"></use>
                      </svg>
                    </span>
                    <ul className="places__options places__options--custom places__options--opened">
                      <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                      <li className="places__option" tabIndex={0}>Price: low to high</li>
                      <li className="places__option" tabIndex={0}>Price: high to low</li>
                      <li className="places__option" tabIndex={0}>Top rated first</li>
                    </ul>
                  </form>
                  <div className="cities__places-list places__list tabs__content">
                    <PlaceList offers={cityOffers} placeType={PlaceType.City}/>
                  </div>
                </section>
                <div className="cities__right-section">
                  <Map offers={cityOffers} mapType={MapType.City}/>
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
