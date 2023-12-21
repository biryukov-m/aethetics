import { useEffect, useState } from 'react';
import { IProduct, IProductId } from '../../../types/products';
import productService from '../../../services/products.service';

const useFetchProduct = (id: IProductId) => {
  const [product, setProduct] = useState<IProduct | null>(null);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        if (!(typeof id === 'string') || !(id.length > 0)) {
          throw new Error(`Error fetching product with ID ${id}`);
        }
        const fetchedProduct = await productService.getById(id);
        setProduct(fetchedProduct);
      } catch (e) {
        console.error(e);
        setProduct(null);
        if (typeof e === 'string') setError(e);
      }
    };

    fetchProduct();
  }, [id]);

  return { product, error };
};

export default useFetchProduct;
