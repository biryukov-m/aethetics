import { useEffect, useState } from 'react';
import productService from '../../../services/products.service';
import { ProductModel } from '../../models/Product.model';

const useFetchProducts = () => {
  const [products, setProducts] = useState<ProductModel[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await productService.getAll();
        if (fetchedProducts) {
          setProducts(fetchedProducts);
        } else {
          throw new Error('Cant fetch products');
        }
      } catch (e) {
        setProducts(null);
        if (typeof e === 'string') setError(e);
      }
    };
    fetchProducts();
  }, []);

  return { products, error };
};
export default useFetchProducts;
