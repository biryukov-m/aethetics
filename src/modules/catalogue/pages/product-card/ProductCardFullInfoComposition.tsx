import React from 'react';
import { IProductComposition } from '../../../../types/products';

export type IProps = {
  composition: IProductComposition;
};

const ProductCardFullInfoComposition: React.FC<IProps> = ({ composition }) => (
  <article className="tabcontent" id="components">
    <h4 className="mobile">Склад</h4>
    <p>{composition}</p>
  </article>
);

export default ProductCardFullInfoComposition;
