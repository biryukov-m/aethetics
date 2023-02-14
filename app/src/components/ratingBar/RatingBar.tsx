import React from "react";
import { useState } from "react";

interface Rating {
  rating: number;
  rateable?: boolean;
}

const RatingBar: React.FC<Rating> = ({ rating, rateable = true }) => {
  const [frontRating, setRating] = useState(rating);
  const generatedRates = [1, 2, 3, 4, 5].map((i) => (
    <span
      key={i}
      className={frontRating >= i ? "star rated" : "star unrated"}
      onMouseOver={rateable ? () => setRating(i) : undefined}
      onMouseLeave={rateable ? () => setRating(rating) : undefined}
    />
  ));

  return <div className="rating">{generatedRates}</div>;
};

export default RatingBar;
