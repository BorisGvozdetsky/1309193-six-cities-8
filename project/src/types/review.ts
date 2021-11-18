type User = {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
}

type Review = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: User;
}

type ReviewFromServer = Omit<
  Review,
  | 'user'
> & {
  user: {
    'avatar_url': string,
    'id': number,
    'is_pro': boolean,
    'name': string,
  }
};

type PostReview = {
  comment: string;
  rating: number;
}

type Reviews = Review[];

export type {Review, User, ReviewFromServer, PostReview, Reviews};
