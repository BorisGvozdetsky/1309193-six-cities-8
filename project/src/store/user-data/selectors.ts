import { AuthorizationStatus } from '../../const';
import { State } from '../../types/state';
import { User } from '../../types/user';
import { NameSpace } from '../root-reducer';

const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.user].authorizationStatus;
const getUser = (state: State): User | null => state[NameSpace.user].user;

export {getAuthorizationStatus, getUser};
