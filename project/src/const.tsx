const CITIES = ['Paris','Cologne','Brussels','Amsterdam','Hamburg','Dusseldorf'];
const SERVER_RESPONSE_OK = 200;

enum AppRoute {
  Favorites = '/favorites',
  Main = '/',
  Room = '/offer',
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
  Favorite = 'FAVORITE'
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
  Comments = '/comments',
  Favorite = '/favorite',
}

enum ReviewStatus {
  Uploading = 'UPLOADING',
  Uploaded = 'UPLOADED',
  NotUploaded = 'NOT_UPLOADED',
  Unknown = 'UNKNOWN',
}

enum ServiceMessage {
  AuthFail = 'Do not forget to authorize',
  LoginFail = 'Please fill in all the fields correctly',
  PostReviewFail = 'Something went wrong, try again',
  ServerFail = 'Server is not responding'
}

enum CommentLength  {
  Min = 50,
  Max = 300,
}

export {AppRoute, AuthorizationStatus, MapType, PlaceType, APIRoute, SortType, ReviewStatus, ServiceMessage, CommentLength, CITIES, SERVER_RESPONSE_OK};
