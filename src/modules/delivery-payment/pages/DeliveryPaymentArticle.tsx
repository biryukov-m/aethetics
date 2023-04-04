import React from 'react';

export type Props = {
  header: string;
  subheader?: string;
  content: JSX.Element;
};

const DeliveryPaymentArticle: React.FC<Props> = ({ header, subheader, content }) => (
  <article>
    <div className="header">
      <h3>{header}</h3>
      {subheader && <p>{subheader}</p>}
    </div>
    <div className="content">{content}</div>
  </article>
);

export default DeliveryPaymentArticle;
