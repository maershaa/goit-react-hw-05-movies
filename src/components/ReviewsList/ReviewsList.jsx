import React from 'react';
import ReviewsListItem from 'components/ReviewsList//ReviewsListItem/ReviewsListItem';
import { StyledReviewsList } from 'components/ReviewsList/StyledReviewsList';

const ReviewsList = ({ reviews }) => {
  return (
    <StyledReviewsList>
      {reviews.map(review => (
        <ReviewsListItem
          key={review.id}
          userName={review.author}
          rating={review.author_details.rating}
          content={review.content}
          date={review.created_at}
        ></ReviewsListItem>
      ))}
    </StyledReviewsList>
  );
};

export default ReviewsList;
