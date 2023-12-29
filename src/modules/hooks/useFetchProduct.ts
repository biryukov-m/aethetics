import { useQuery } from '@tanstack/react-query';
import { IProductId } from '../../types/products';
import productService from '../../services/products.service';

const useFetchProduct = (id: IProductId) => {
  const { data, error, isPending } = useQuery({
    queryKey: ['product', id],
    queryFn: () => productService.getById(id),
    staleTime: 60000
  });

  return { data, error, isPending };
};

export default useFetchProduct;
