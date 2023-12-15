import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonArrowRight as StyledButtonArrowRight } from '../../../common/button/button.styled';

type Props = {
  id: string;
  imageUrl: string;
  header: string;
  text: string | JSX.Element;
};
const BlogFeedArticle: React.FC<Props> = ({ id, imageUrl, header, text }) => (
  <article className={id}>
    <div className="image-holder">
      <img src={imageUrl} alt="article preview" />
    </div>
    <div className="text">
      <h3>{header}</h3>
      {text}
      <div className="button-show-details">
        <StyledButtonArrowRight>
          <Link to={`/blog/${id}`}>Детальніше</Link>
        </StyledButtonArrowRight>
      </div>
    </div>
  </article>
);

export default BlogFeedArticle;
