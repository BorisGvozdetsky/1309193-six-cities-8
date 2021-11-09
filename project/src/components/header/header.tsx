import { State } from '../../types/state';
import Logo from '../logo/logo';
import {connect, ConnectedProps} from 'react-redux';
import {AppRoute, AuthorizationStatus} from '../../const';
import { Link } from 'react-router-dom';
import { ThunkAppDispatch } from '../../types/action';
import { logout } from '../../store/api-action';


type HeaderProps = {
  isPageLogin: boolean;
}

const mapStateToProps = ({authorizationStatus, user}: State) => ({
  authorizationStatus,
  user,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onLogOutClick() {
    dispatch(logout());
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & HeaderProps;

function Header(props: ConnectedComponentProps): JSX.Element {
  const {isPageLogin, authorizationStatus, user, onLogOutClick} = props;

  const handleLogOutClick = (evt: React.MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    onLogOutClick();
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo/>
          </div>
          {!isPageLogin &&
            <nav className="header__nav">
              {authorizationStatus === AuthorizationStatus.Auth ?
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <a className="header__nav-link header__nav-link--profile" href="#/">
                      <div className="header__avatar-wrapper user__avatar-wrapper" style={{backgroundImage: `url(${user?.avatarUrl})`}}>
                      </div>
                      <span className="header__user-name user__name">{user?.email}</span>
                    </a>
                  </li>
                  <li className="header__nav-item">
                    <Link to={AppRoute.Main} className="header__nav-link" onClick={handleLogOutClick}>
                      <span className="header__signout">Sign out</span>
                    </Link>
                  </li>
                </ul> :
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <Link className="header__nav-link header__nav-link--profile" to={AppRoute.SignIn}>
                      <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                      <span className="header__login">Sign in</span>
                    </Link>
                  </li>
                </ul>}
            </nav>}
        </div>
      </div>
    </header>
  );
}

export {Header};
export default connector(Header);
