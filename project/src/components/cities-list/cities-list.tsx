import React from 'react';
import { CITIES } from '../../const';

type CitiesListProps = {
  currentCity: string;
  handleCitySwitch: (city: string) => void;
}

function CitiesList(props: CitiesListProps): JSX.Element {
  const { currentCity, handleCitySwitch } = props;
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES.map((city) => {
            const isCurrent = currentCity === city;
            return (
              <li key={city} className="locations__item">
                <a
                  className={`locations__item-link tabs__item ${isCurrent ? 'tabs__item--active' : ''}`}
                  href="#/"
                  onClick={(evt) => {
                    evt.preventDefault();
                    handleCitySwitch(city);
                  }}
                >
                  <span>{city}</span>
                </a>
              </li>);
          })}
        </ul>
      </section>
    </div>
  );
}

export default React.memo(CitiesList, (prevProps, nextProps) => prevProps.currentCity === nextProps.currentCity);
