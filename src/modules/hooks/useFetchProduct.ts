import { useQuery } from '@tanstack/react-query';
import { IProductId } from '../../types/products';
import productService from '../../services/products.service';
import { QUERY_KEYS } from '../../constants/appKeys';

const useFetchProduct = (id: IProductId) => {
  const { data, error, isPending } = useQuery({
    queryKey: [QUERY_KEYS.product.name, QUERY_KEYS.product.options.full, id],
    queryFn: () => productService.getById(id),
    staleTime: 60000
  });

  return { data, error, isPending };
};

export default useFetchProduct;
