import React from "react";
import { useState } from "react";

export type Props = {
  rating: number;
};
const RatingBar: React.FC<Props> = ({ rating }) => {
  const [frontRating, setRating] = useState(rating);

  return (
    <div className="rating">
      <span
        className={frontRating > 0 ? "star rated" : "star unrated"}
        onMouseOver={(e) => setRating(1)}
        onMouseLeave={(e) => setRating(rating)}
      />
      <span
        className={frontRating > 1 ? "star rated" : "star unrated"}
        onMouseOver={(e) => setRating(2)}
        onMouseLeave={(e) => setRating(rating)}
      />
      <span
        className={frontRating > 2 ? "star rated" : "star unrated"}
        onMouseOver={(e) => setRating(3)}
        onMouseLeave={(e) => setRating(rating)}
      />
      <span
        className={frontRating > 3 ? "star rated" : "star unrated"}
        onMouseOver={(e) => setRating(4)}
        onMouseLeave={(e) => setRating(rating)}
      />
      <span
        className={frontRating > 4 ? "star rated" : "star unrated"}
        onMouseOver={(e) => setRating(5)}
        onMouseLeave={(e) => setRating(rating)}
      />
    </div>
  );
};

export default RatingBar;
