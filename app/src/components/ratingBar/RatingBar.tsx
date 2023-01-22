import React from "react";
import { useState } from "react";

export type Props = {
  rating: number;
  rateable?: boolean;
};
const RatingBar: React.FC<Props> = ({ rating, rateable }) => {
  const [frontRating, setRating] = useState(rating);

  if (rateable === undefined) {
    rateable = true;
  }

  const generatedRates = [1, 2, 3, 4, 5].map((i) => (
    <span
      key={i}
      className={frontRating >= i ? "star rated" : "star unrated"}
      onMouseOver={rateable ? (e) => setRating(i) : undefined}
      onMouseLeave={rateable ? (e) => setRating(rating) : undefined}
    />
  ));

  return <div className="rating">{generatedRates}</div>;
};

export default RatingBar;
