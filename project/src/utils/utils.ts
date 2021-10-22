const addRatingPercent = (value: number): number => {
  const minRating = Math.floor(value);
  const ratingPercent = (minRating * 100) / 5;
  return ratingPercent;
};

const formatDate = (date: string): string => new Date(date).toLocaleDateString('en-US', {month: 'long', year: 'numeric'});

const formatDateAttribute = (date: string): string => new Date(date).toLocaleDateString('en-CA');

export {addRatingPercent, formatDate, formatDateAttribute};
