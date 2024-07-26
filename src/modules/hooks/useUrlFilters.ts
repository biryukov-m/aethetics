import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { IProductFilters } from '../../types/products';
import filtersService from '../../services/filters.service';

const useUrlFilters = (setFilters: React.Dispatch<React.SetStateAction<IProductFilters>>) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const initialFilters = filtersService.getInitialFilters(params);
    setFilters(initialFilters);
  }, [location.search, setFilters]);

  const updateUrlFilters = (newFilters: IProductFilters) => {
    const params = filtersService.updateUrlFilters(newFilters);
    navigate({ pathname: location.pathname, search: params.toString() });
  };

  return { updateUrlFilters };
};

export default useUrlFilters;
