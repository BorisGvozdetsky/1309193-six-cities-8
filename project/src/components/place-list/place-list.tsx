import {Offer} from '../../types/offer';
import Place from '../place/place';

type PlaceListProps = {
  offers: Offer[];
  placeType: string;
  handlePlaceMouseEnter?: (placeId: number) => void;
  handlePlaceMouseLeave?: () => void;
  handleFavoriteClick?: (offerId: number, isFavorite: boolean) => void;
}

function PlaceList({offers, placeType, handlePlaceMouseEnter, handlePlaceMouseLeave, handleFavoriteClick}: PlaceListProps): JSX.Element {
  return (
    <>
      {offers.map((offer) => <Place key={offer.id} offer={offer} placeType={placeType} onMouseEnter={handlePlaceMouseEnter} onMouseLeave={handlePlaceMouseLeave} onFavoriteClick={handleFavoriteClick}/>)}
    </>
  );
}

export default PlaceList;
