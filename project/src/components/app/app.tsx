import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import Favorites from '../favorites/favorites';
import Property from '../property/property';
import PageMain from '../page-main/page-main';
import Login from '../login/login';
import NotFound from '../not-found/not-found';
import PrivateRoute from '../private-route/private-route';
import {Offer} from '../../types/offer';
import { Review } from '../../types/review';

type AppScreenProps = {
  offerCount: number;
  offers: Offer[];
  reviews: Review[],
}

function App({offerCount, offers, reviews }: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <PageMain offerCount={offerCount} offers={offers}/>
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.Favorites}
          render={() => <Favorites offers={offers}/>}
          authorizationStatus={AuthorizationStatus.Auth}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.Room}>
          <Property offer={offers[0]} reviews={reviews} />
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
