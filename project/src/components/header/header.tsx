import Logo from '../logo/logo';
import {useDispatch, useSelector} from 'react-redux';
import {AppRoute, AuthorizationStatus} from '../../const';
import { Link } from 'react-router-dom';
import { logout } from '../../store/api-action';
import { getAuthorizationStatus, getUser } from '../../store/user-data/selectors';
import React from 'react';

type HeaderProps = {
  isPageLogin: boolean;
}

function Header(props: HeaderProps): JSX.Element {
  const {isPageLogin} = props;
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const user = useSelector(getUser);
  const dispatch = useDispatch();

  const handleLogOutClick = (evt: React.MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    dispatch(logout());
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
                    <Link to={AppRoute.Favorites} className="header__nav-link header__nav-link--profile" href="#/">
                      <div className="header__avatar-wrapper user__avatar-wrapper" style={{backgroundImage: `url(${user?.avatarUrl})`}}>
                      </div>
                      <span className="header__user-name user__name">{user?.email}</span>
                    </Link>
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

export default React.memo(Header);
