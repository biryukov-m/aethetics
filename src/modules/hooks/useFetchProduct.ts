import { useEffect, useState } from 'react';
import { IProductId } from '../../types/products';
import productService from '../../services/products.service';
import { ProductModel } from '../models/Product.model';

const useFetchProduct = (id: IProductId) => {
  const [product, setProduct] = useState<ProductModel | null>(null);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        if (!(typeof id === 'string') || !(id.length > 0)) {
          throw new Error(`Error fetching product with ID ${id}`);
        }
        const fetchedProduct = await productService.getById(id);
        if (!fetchedProduct) {
          throw new Error(`Can't find product with id ${id}`);
        }
        setProduct(fetchedProduct);
      } catch (err) {
        setProduct(null);
        if (typeof err === 'string') setError(err);
      }
    };

    fetchProduct();
  }, [id]);

  return { product, error };
};

export default useFetchProduct;
