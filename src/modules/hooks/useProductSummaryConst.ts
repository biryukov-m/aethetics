import { useEffect, useState } from 'react';

import basketService from '../../services/basket.service';
import { IProductId } from '../../types/products';

const useProductSummaryCost = (id: IProductId) => {
  const [productSummaryCost, setProductSummaryCost] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const calculateSummaryCost = async () => {
      try {
        const summaryCost = await basketService.getProductSummaryCost(id);
        if (summaryCost) {
          setProductSummaryCost(summaryCost);
        } else {
          throw new Error('Error fetching products summary cost');
        }
      } catch (e) {
        setProductSummaryCost(null);
        if (typeof e === 'string') setError(e);
      }
    };
    calculateSummaryCost();
  }, []);

  return { productSummaryCost, error };
};

export default useProductSummaryCost;
