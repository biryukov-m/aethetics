import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonArrowRight as StyledButtonArrowRight } from '../../../common/styled/button.styled';
import { ROUTER_KEYS } from '../../../../constants/appKeys';

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
          <Link to={`/${ROUTER_KEYS.blog}/${id}`}>Детальніше</Link>
        </StyledButtonArrowRight>
      </div>
    </div>
  </article>
);

export default BlogFeedArticle;
