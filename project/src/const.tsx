const CITIES = ['Paris','Cologne','Brussels','Amsterdam','Hamburg','Dusseldorf'];
const AUTH_FAIL_MESSAGE = 'Do not forget to log in';
const LOGIN_FAIL_MESSAGE = 'Please make sure all fields are filled correctly';


enum AppRoute {
  Favorites = '/favorites',
  Main = '/',
  Room = '/offer/:id',
  SignIn = '/login',
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

enum MapType {
  City = 'CITY',
  Property = 'PROPERTY',
}

enum PlaceType {
  City = 'CITY',
  Near = 'NEAR',
}

enum SortType {
  Popular = 'Popular',
  PriceLowToHigh = 'Price: low to high',
  PriceHighToLow = 'Price: high to low',
  TopRated = 'Top rated first',
}

enum APIRoute {
  Offers = '/hotels',
  Login = '/login',
  Logout = '/logout',
}

export {AppRoute, AuthorizationStatus, MapType, PlaceType, APIRoute, SortType, CITIES, LOGIN_FAIL_MESSAGE, AUTH_FAIL_MESSAGE};
