import React from 'react';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { IProductFilters } from '../../types/products';

const useUrlFilters = (setFilters: React.Dispatch<React.SetStateAction<IProductFilters>>) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const initialFilters: IProductFilters = {
      category: params.get('category')?.split(',') ?? [],
      skinType: params.get('skinType')?.split(',') ?? [],
      ageGroup: params.get('ageGroup')?.split(',') ?? [],
      purpose: params.get('purpose')?.split(',') ?? []
    };
    setFilters(initialFilters);
  }, [location.search, setFilters]);

  const updateUrlFilters = (newFilters: IProductFilters) => {
    const params = new URLSearchParams(location.search);
    Object.keys(newFilters).forEach((key) => {
      if ((newFilters[key as keyof IProductFilters]?.length ?? 0) > 0) {
        params.set(key, newFilters[key as keyof IProductFilters]!.join(','));
      } else {
        params.delete(key);
      }
    });
    navigate({ pathname: location.pathname, search: params.toString() });
  };

  return { updateUrlFilters };
};

export default useUrlFilters;
