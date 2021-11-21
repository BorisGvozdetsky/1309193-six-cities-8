import { SortType } from '../../const';
import { State } from '../../types/state';
import { NameSpace } from '../root-reducer';

const getCurrentCity = (state: State): string => state[NameSpace.App].currentCity;
const getActiveSortType = (state: State): SortType => state[NameSpace.App].activeSortType;

export {getCurrentCity, getActiveSortType};
