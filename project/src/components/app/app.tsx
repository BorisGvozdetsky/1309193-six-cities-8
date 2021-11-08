import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import Favorites from '../favorites/favorites';
import Property from '../property/property';
import PageMain from '../page-main/page-main';
import Login from '../login/login';
import NotFound from '../not-found/not-found';
import PrivateRoute from '../private-route/private-route';
import { Review } from '../../types/review';
import { State } from '../../types/state';
import { connect, ConnectedProps } from 'react-redux';

type AppScreenProps = {
  reviews: Review[],
}

const mapStateToProps = ({offers}: State) => ({
  offers,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ComponentConnectedProps = AppScreenProps & PropsFromRedux;

function App({offers, reviews }: ComponentConnectedProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <PageMain/>
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.Favorites}
          render={() => <Favorites offers={offers}/>}
          authorizationStatus={AuthorizationStatus.Auth}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.Room}>
          <Property offer={offers[0]} reviews={reviews} offers={offers}/>
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

export {App};
export default connector(App);
