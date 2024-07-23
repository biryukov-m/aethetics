import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '../../constants/appKeys';
import categoriesService from '../../services/categories.service';

const useFetchCategories = () => {
  const { data, error, isPending } = useQuery({
    queryKey: [QUERY_KEYS.categories.name],
    queryFn: () => categoriesService.getCategories(),
    staleTime: 60000
  });

  return { data, error, isPending };
};

export default useFetchCategories;
