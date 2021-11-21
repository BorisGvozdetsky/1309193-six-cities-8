import { Offer, OfferResponse } from '../types/offer';
import { User, UserResponse } from '../types/user';
import { Review, ReviewFromServer } from '../types/review';

const adaptOfferToClient = (offer: OfferResponse): Offer => ({
  bedrooms: offer.bedrooms,
  city: {
    location: {
      latitude: offer.city.location.latitude,
      longitude: offer.city.location.longitude,
      zoom: offer.city.location.zoom,
    },
    name: offer.city.name,
  },
  description: offer.description,
  goods: offer.goods,
  host: {
    avatarUrl: offer.host.avatar_url,
    id: offer.host.id,
    isPro: offer.host.is_pro,
    name: offer.host.name,
  },
  id: offer.id,
  images: offer.images,
  isFavorite: offer.is_favorite,
  isPremium: offer.is_premium,
  location: {
    latitude: offer.location.latitude,
    longitude: offer.location.longitude,
    zoom: offer.location.zoom,
  },
  maxAdults: offer.max_adults,
  previewImage: offer.preview_image,
  price: offer.price,
  rating: offer.rating,
  title: offer.title,
  type: offer.type,
});

const adaptUserToClient = (user: UserResponse): User => ({
  avatarUrl: user.avatar_url,
  email: user.email,
  id: user.id,
  isPro: user.is_pro,
  name: user.name,
  token: user.token,
});

const adaptReviewToClient = (review: ReviewFromServer): Review => ({
  comment: review.comment,
  date: review.date,
  id: review.id,
  rating: review.rating,
  user: {
    avatarUrl: review.user.avatar_url,
    id: review.user.id,
    isPro: review.user.is_pro,
    name: review.user.name,
  },
});

export {adaptOfferToClient, adaptUserToClient, adaptReviewToClient};
