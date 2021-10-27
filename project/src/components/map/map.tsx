import {useRef, useEffect} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap';
import {Offer} from '../../types/offer';
import {URL_MARKER_CURRENT, URL_MARKER_DEFAULT} from './const';
import {MapType} from '../../const';

type MapProps = {
  offers: Offer[];
  mapType: string;
  selectedOffer?: Offer | undefined;
};

const defaultCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [14, 39],
});

const currentCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [27, 39],
  iconAnchor: [14, 39],
});


function Map(props: MapProps): JSX.Element {
  const {offers, mapType, selectedOffer} = props;
  const city = offers[0];
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  const isCityMap = mapType === MapType.City;
  const isPropertyMap = mapType === MapType.Property;

  useEffect(() => {
    if (map) {
      const {location: {latitude, longitude, zoom}} = city;
      map.flyTo([latitude, longitude], zoom);
      offers.forEach((offer) => {
        leaflet
          .marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          }, {
            icon: (selectedOffer !== undefined && offer.id === selectedOffer.id) ? currentCustomIcon : defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map, city, offers, selectedOffer]);

  return (
    <section className={`map ${isCityMap ? 'cities__map' : ''} ${isPropertyMap ? 'property__map' : ''}`} ref={mapRef}></section>
  );
}

export default Map;
