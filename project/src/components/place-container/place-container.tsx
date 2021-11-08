import { MapType, PlaceType } from '../../const';
import MainEmpty from '../main-empty/main-empty';
import PlaceList from '../place-list/place-list';
import Sort from '../sort/sort';

import {useState} from 'react';
import {Offer} from '../../types/offer';
import Map from '../map/map';


type PlaceContainerProps = {
  currentCity: string;
  cityOffers: Offer[];
  hasNoOffers: boolean;
}

function PlaceContainer(props: PlaceContainerProps): JSX.Element {
  const {currentCity, cityOffers, hasNoOffers} = props;

  const [selectedOffer, setSelectedOffer] = useState<Offer | undefined>(undefined);

  const handlePlaceMouseEnter = (offerId: number) => {
    const currentOffer = cityOffers.find((offer) => offer.id === offerId);
    setSelectedOffer(currentOffer);
  };

  const handlePlaceMouseLeave = () => {
    setSelectedOffer(undefined);
  };

  return (
    <div className="cities">
      { hasNoOffers ?  <MainEmpty cityName={currentCity}/> :
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
        </div>}
    </div>
  );
}

export default PlaceContainer;
