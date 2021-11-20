import React from 'react';
import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SortType } from '../../const';
import { setSortType } from '../../store/action';
import { getActiveSortType } from '../../store/app-data/selectors';

function Sort(): JSX.Element {
  const activeSortType = useSelector(getActiveSortType);
  const dispatch = useDispatch();

  const handleSortChange = (sortType: SortType) => {
    dispatch(setSortType(sortType));
  };

  const [sortOptionActive, setSortOptionActive] = useState(false);
  const sortRef = useRef<HTMLFormElement | null >(null);
  const toggleSortDropdown = () => setSortOptionActive((prevSortOption) => !prevSortOption);
  return (
    <form className="places__sorting" action="#" method="get" ref={sortRef}>
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0} onClick={toggleSortDropdown}>
        {activeSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${sortOptionActive ? 'places__options--opened' : ''}`}>
        {
          Object.values(SortType).map((sortType) => {
            const isActiveType = activeSortType === sortType;
            return (
              <li
                key={sortType}
                className={`places__option ${isActiveType ? 'places__option--active' : ''}`}
                tabIndex={0}
                onClick={() => {
                  handleSortChange(sortType);
                }}
              >
                {sortType}
              </li>
            );
          })
        }
      </ul>
    </form>
  );
}

export default React.memo(Sort);
