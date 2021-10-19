import {useRef, useEffect} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap';
import {Offer} from '../../types/offer';
import {URL_MARKER_DEFAULT} from './const';
import {MapType} from '../../const';

type MapProps = {
  offers: Offer[];
  mapType: string;
};

const defaultCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [14, 39],
});

function Map(props: MapProps): JSX.Element {
  const {offers, mapType} = props;
  const city = offers[0];
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  const isCityMap = mapType === MapType.City;
  const isPropertyMap = mapType === MapType.Property;

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        leaflet
          .marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          }, {
            icon: defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map, offers]);

  return (
    <section className={`map ${isCityMap ? 'cities__map' : ''} ${isPropertyMap ? 'property__map' : ''}`} ref={mapRef}></section>
  );
}

export default Map;
