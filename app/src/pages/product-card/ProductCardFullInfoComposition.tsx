import React from 'react';

export type Props = {
  composition: string;
};

const ProductCardFullInfoComposition: React.FC<Props> = ({ composition }) => (
  <article className="tabcontent" id="components">
    <h4 className="mobile">Склад</h4>
    <p>{composition}</p>
  </article>
);

export default ProductCardFullInfoComposition;
