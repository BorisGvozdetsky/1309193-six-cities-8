import CitiesList from '../cities-list/cities-list';
import { switchCity } from '../../store/action';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../header/header';
import PlaceContainer from '../place-container/place-container';
import Spinner from '../spinner/spinner';
import { getCurrentCity } from '../../store/app-data/selectors';
import { getIsDataLoaded, getSortedOffers } from '../../store/offer-data/selectors';

function PageMain(): JSX.Element {
  const currentCity = useSelector(getCurrentCity);
  const offers = useSelector(getSortedOffers);
  const isDataLoaded = useSelector(getIsDataLoaded);

  const dispatch = useDispatch();

  const handleCitySwitch = (city: string) => {
    dispatch(switchCity(city));
  };

  const hasNoOffers = offers.length === 0;

  return (
    <div className="page page--gray page--main">
      <Header isPageLogin={false}/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CitiesList currentCity={currentCity} handleCitySwitch={handleCitySwitch}/>
        {!isDataLoaded ? <Spinner/> : <PlaceContainer currentCity={currentCity} cityOffers={offers} hasNoOffers={hasNoOffers}/>}
      </main>
    </div>
  );
}

export default PageMain;

