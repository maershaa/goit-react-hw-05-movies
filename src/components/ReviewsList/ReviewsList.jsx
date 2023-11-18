import React from 'react';
import ReviewsListItem from 'components/ReviewsList//ReviewsListItem/ReviewsListItem';
import { StyledReviewsList } from 'components/ReviewsList/StyledReviewsList';

const ReviewsList = ({ reviews }) => {
  // Проверяем наличие отзывов или их пустоту
  if (!reviews || reviews.length === 0) {
    return (
      <StyledReviewsList>
        <div>
          <h2>No reviews found</h2>
          <p>Sorry, there are no reviews for this movie yet.</p>
        </div>
      </StyledReviewsList>
    );
  }

  // Отображение отзывов, если они доступны
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
