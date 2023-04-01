import React from 'react';
import ButtonWhite from '../../components/ButtonWhite/ButtonWhite';
import ButtonArrowBottom from '../../components/buttonArrowBottom/ButtonArrowBottom';
import RatingBar from '../../components/ratingBar/RatingBar';

export type Props = {
  reviews: {
    id: number;
    author: string;
    date: string;
    rating: number;
    text: string;
  }[];
};

const ProductCardFullInfoReviews: React.FC<Props> = ({ reviews }) => {
  const generatedReviews = reviews.map((review) => (
    <div className="review">
      <div className="author">
        <h4>{review.author}</h4>
        <p>{review.date}</p>
      </div>
      <RatingBar rating={review.rating} rateable={false} />
      <div className="text">
        <p>{review.text}</p>
      </div>
    </div>
  ));
  return (
    <div className="tabcontent reviews inactive" id="reviews">
      <div className="button-write-review">
        <ButtonWhite text="Залишити відгук" />
      </div>
      <h4 className="mobile">Відгуки</h4>
      <div className="content">{generatedReviews}</div>
      <div className="button-show-more">
        <ButtonArrowBottom text="Показати ще" />
      </div>
    </div>
  );
};

export default ProductCardFullInfoReviews;
