enum AppRoute {
  Favorites = '/favorites',
  Main =  '/',
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

export {AppRoute, AuthorizationStatus, MapType, PlaceType};
