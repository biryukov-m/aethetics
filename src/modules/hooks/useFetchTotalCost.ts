import { useEffect, useState } from 'react';
import basketService, { IBasketItem } from '../../services/basket.service';

const useFetchTotalCost = (basket: IBasketItem[]) => {
  const [totalCost, setTotalCost] = useState<number | null>(null);

  useEffect(() => {
    const fetchTotalCost = async () => {
      try {
        const cost = await basketService.getTotalCost();
        setTotalCost(cost);
      } catch (e) {
        setTotalCost(null);
      }
    };

    fetchTotalCost();
  }, [basket]);

  return totalCost;
};

export default useFetchTotalCost;
