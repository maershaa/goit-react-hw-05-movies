import React from 'react';
import { StyledReviewsListItem } from 'components/ReviewsList/ReviewsListItem/StyledReviewsListItem.js';

const ReviewsListItem = ({ userName, rating, content, date }) => {
  return (
    <StyledReviewsListItem>
      <h3>@{userName}</h3>
      <p> Rating:{rating}</p>
      <p className="content">{content}</p>
      <p>{new Date(date).toLocaleString()}</p>
    </StyledReviewsListItem>
  );
};

export default ReviewsListItem;
