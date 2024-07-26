import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '../../constants/appKeys';
import filtersService from '../../services/filters.service';

const useFetchFilters = () => {
  const { data, error, isPending } = useQuery({
    queryKey: [QUERY_KEYS.categories.name],
    queryFn: () => filtersService.getAllFilters(),
    staleTime: 60000
  });

  return { data, error, isPending };
};

export default useFetchFilters;
