import {useEffect, useState, MutableRefObject} from 'react';
import {Map, TileLayer} from 'leaflet';
import {Offer} from '../../types/offer';

const CITY_ZOOM = 13;

function useMap(mapRef: MutableRefObject<HTMLElement | null>, city: Offer): Map | null {
  const [map, setMap] = useState<Map | null>(null);

  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: city.location.latitude,
          lng: city.location.longitude,
        },
        zoom: city.location.zoom,
      });

      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'},
      );

      instance.addLayer(layer);

      setMap(instance);
    }
    map?.flyTo({
      lat: city.location.latitude,
      lng: city.location.longitude,
    }, CITY_ZOOM);
  }, [mapRef, map, city]);

  return map;
}

export default useMap;
