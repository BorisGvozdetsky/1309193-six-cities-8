import { Dispatch, useRef, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { SortType } from '../../const';
import { setSortType } from '../../store/action';
import { Actions } from '../../types/action';
import { State } from '../../types/state';

const mapStateToProps = ({activeSortType}: State) => (
  {activeSortType}
);

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  handleSortChange: (activeSortType: SortType) => {
    dispatch(setSortType(activeSortType));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function Sort(props: PropsFromRedux): JSX.Element {
  const {activeSortType, handleSortChange} = props;
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

export { Sort };
export default connector(Sort);
