import { Offer } from '../../types/offer';
import Place from '../place/place';

type PlaceListProps = {
  offers: Offer[];
  placeType: string;
  onPlaceMouseEnter?: (placeId: number) => void;
  onPlaceMouseLeave?: () => void;
  onFavoriteClick?: (offerId: number, isFavorite: boolean) => void;
}

function PlaceList({offers, placeType, onPlaceMouseEnter, onPlaceMouseLeave, onFavoriteClick}: PlaceListProps): JSX.Element {
  return (
    <>
      {offers.map((offer) => <Place key={offer.id} offer={offer} placeType={placeType} onMouseEnter={onPlaceMouseEnter} onMouseLeave={onPlaceMouseLeave} onFavoriteClick={onFavoriteClick}/>)}
    </>
  );
}

export default PlaceList;
