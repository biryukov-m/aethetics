import { useQuery } from '@tanstack/react-query';
import productService from '../../services/products.service';
import { QUERY_KEYS } from '../../constants/appKeys';

const useFetchProducts = () => {
  const { isPending, data, error } = useQuery({
    queryKey: [QUERY_KEYS.products],
    queryFn: () => productService.getAll()
  });

  return { isPending, data, error };
};

export default useFetchProducts;
