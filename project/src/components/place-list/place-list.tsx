import { useState } from 'react';
import {Offer} from '../../types/offer';
import Place from '../place/place';

type PlaceListProps = {
  offers: Offer[];
  placeType: string;
}

function PlaceList({offers, placeType}: PlaceListProps): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activePlace, setActivePlace] = useState({});
  const handleMouseEnter = (place: Offer): void => {
    setActivePlace(place);
  };
  const handleMouseLeave = (): void => {
    setActivePlace({});
  };
  return (
    <>
      {offers.map((offer) => <Place key={offer.id} offer={offer} placeType={placeType} handleMouseEnter={() => handleMouseEnter(offer)} handleMouseLeave={() => handleMouseLeave()}/>)}
    </>
  );
}

export default PlaceList;
