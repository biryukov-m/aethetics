import React from 'react';
import { useParams } from 'react-router-dom';
import ProductCardMainInfo from './ProductCardMainInfo';
import ProductCardTabs from './ProductCardTabs';
import ProductCardRelatedProducts from './ProductCardRelatedProducts';
import useFetchProduct from '../../../hooks/useFetchProduct';

const ProductCard: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { product, error } = useFetchProduct(id || '');
  // TODO: implement favourite
  const isFavourite = false;
  // TODO: implement get review functionality
  const reviews = [
    {
      id: 1,
      author: 'Катерина',
      date: '5.08.2022',
      rating: 5,
      text: 'Цей крем замовляю вдруге, дуже задоволена. Дякую за швидку доставку!'
    },
    {
      id: 2,
      author: 'Поліна',
      date: '3.08.2022',
      rating: 4,
      text: 'Товар дуже якісний, крем не залишає липку плівку. Дякую!'
    },
    {
      id: 3,
      author: 'Олена',
      date: '28.07.2022',
      rating: 5,
      text: `Почитала відгуки і вирішила спробувати цей засіб. Я дуже вдячна
              магазину за такий якісний продукт!`
    }
  ];

  return product ? (
    <>
      <ProductCardMainInfo product={product} favourite={isFavourite} />
      <ProductCardTabs {...product} {...{ reviews }} />
      <ProductCardRelatedProducts />
    </>
  ) : (
    <h3>{error}</h3>
  );
};

export default ProductCard;
