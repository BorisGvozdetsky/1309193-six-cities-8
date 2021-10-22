import {Offer} from '../../types/offer';
import Place from '../place/place';

type PlaceListProps = {
  offers: Offer[];
  placeType: string;
  handlePlaceMouseEnter: (placeId: number) => void;
  handlePlaceMouseLeave: () => void;
}

function PlaceList({offers, placeType, handlePlaceMouseEnter, handlePlaceMouseLeave}: PlaceListProps): JSX.Element {
  const handleMouseEnter = (place: Offer): void => {
    handlePlaceMouseEnter(place.id);
  };
  const handleMouseLeave = (): void => {
    handlePlaceMouseLeave();
  };
  return (
    <>
      {offers.map((offer) => <Place key={offer.id} offer={offer} placeType={placeType} handleMouseEnter={() => handleMouseEnter(offer)} handleMouseLeave={() => handleMouseLeave}/>)}
    </>
  );
}

export default PlaceList;
