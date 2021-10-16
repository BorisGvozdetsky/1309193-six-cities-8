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

export {AppRoute, AuthorizationStatus};
