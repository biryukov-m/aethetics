import React from "react";
import ButtonArrowRight from "../../components/buttonArrowRight/ButtonArrowRight";

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
        <ButtonArrowRight
          text="Детальніше"
          path={`/blog/${id}`}
        ></ButtonArrowRight>
      </div>
    </div>
  </article>
);

export default BlogFeedArticle;
