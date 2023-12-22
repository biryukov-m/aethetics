import { useQuery } from '@tanstack/react-query';
import productService from '../../services/products.service';

const useFetchProducts = () => {
  const { isPending, data, error } = useQuery({
    queryKey: ['products'],
    queryFn: () => productService.getAll()
  });

  return { isPending, data, error };
};

export default useFetchProducts;
