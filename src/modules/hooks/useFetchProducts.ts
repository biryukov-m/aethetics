import { useQuery } from '@tanstack/react-query';
import productService from '../../services/products.service';
import { QUERY_KEYS } from '../../constants/appKeys';
import { IProductFilters } from '../../types/products';

const useFetchProducts = (filters: IProductFilters) => {
  const { isPending, data, error } = useQuery({
    queryKey: [QUERY_KEYS.products.name, QUERY_KEYS.product.options.minimized, filters],
    queryFn: () => productService.getFiltered(filters)
  });

  return { isPending, data, error };
};

export default useFetchProducts;
