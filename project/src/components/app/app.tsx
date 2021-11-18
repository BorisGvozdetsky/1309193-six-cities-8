import { AppRoute} from '../../const';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import Favorites from '../favorites/favorites';
import Property from '../property/property';
import PageMain from '../page-main/page-main';
import Login from '../login/login';
import NotFound from '../not-found/not-found';
import PrivateRoute from '../private-route/private-route';
import { State } from '../../types/state';
import { connect, ConnectedProps } from 'react-redux';
import browserHistory from '../../browser-history';

const mapStateToProps = ({offers}: State) => ({
  offers,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function App(props: PropsFromRedux): JSX.Element {
  const {offers} = props;
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <PageMain/>
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.Favorites}
          render={() => <Favorites offers={offers}/>}
        >
        </PrivateRoute>
        <Route exact path={`${AppRoute.Room}/:id`}>
          <Property />
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
