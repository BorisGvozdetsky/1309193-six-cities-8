type CityLocation = {
  latitude: number;
  longitude: number;
  zoom: number;

}

type City = {
  location: CityLocation;
  name: string;
}

type Host = {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
}

type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}

type Offer = {
  bedrooms: number;
  city: City;
  description: string;
  goods: string[];
  host: Host;
  id: number;
  images: string[];
  isFavorite: boolean;
  isPremium: boolean;
  location: Location;
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
};

type OfferResponse = Omit<
  Offer,
  | 'host'
  | 'isFavorite'
  | 'isPremium'
  | 'maxAdults'
  | 'previewImage'
> & {
  host: {
    'avatar_url': string,
    'id': number,
    'is_pro': boolean,
    'name': string,
  },
  'is_favorite': boolean,
  'is_premium': boolean,
  'max_adults': number,
  'preview_image': string,
}

export type {Offer, Host, OfferResponse};
