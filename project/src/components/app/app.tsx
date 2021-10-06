import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import Favorites from '../favorites/favorites';
import Offer from '../offer/offer';
import PageMain from '../page-main/page-main';
import Login from '../login/login';
import NotFound from '../not-found/not-found';
import PrivateRoute from '../private-route/private-route';

type AppScreenProps = {
  placeCount: number,
  offerCount: number,
}

function App({ placeCount, offerCount }: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <PageMain placeCount={placeCount} offerCount={offerCount} />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.Favorites}
          render={() => <Favorites />}
          authorizationStatus={AuthorizationStatus.NoAuth}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.Room}>
          <Offer />
        </Route>
        <Route exact path={AppRoute.SignIn}>
          <Login/>
        </Route>
        <Route>
          <NotFound/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
