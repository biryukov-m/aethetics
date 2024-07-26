import { sanityClient } from '../constants/sanityConfig';
import { IProductFilters } from '../types/products';

class FiltersService {
  async getAllFilters() {
    try {
      const query = `
        {
          "ageGroup": *[_type == "ageGroup"] {
            _id,
            name 
          },
          "category": *[_type == "category"] {
            _id,
            name 
          },
          "skinType": *[_type == "skinType"] {
            _id,
            name 
          },
          "purpose": *[_type == "purpose"] {
            _id,
            name 
          }
        }
      `;
      const data = await sanityClient.fetch<IProductFilters>(query);
      const filters = Object.entries(data).map((obj) => ({ title: obj[0], options: obj[1] }));
      const idx = filters.findIndex((f) => f.title === 'category');
      if (idx !== -1) {
        const [typeFilter] = filters.splice(idx, 1);
        filters.unshift(typeFilter);
      }

      return filters || null;
    } catch {
      return null;
    }
  }

  getInitialFilters(searchParams: URLSearchParams): IProductFilters {
    return {
      category: searchParams.get('category')?.split(',') ?? [],
      skinType: searchParams.get('skinType')?.split(',') ?? [],
      ageGroup: searchParams.get('ageGroup')?.split(',') ?? [],
      purpose: searchParams.get('purpose')?.split(',') ?? [],
      minPrice: searchParams.get('minPrice')
        ? parseInt(searchParams.get('minPrice')!, 10)
        : undefined,
      maxPrice: searchParams.get('maxPrice')
        ? parseInt(searchParams.get('maxPrice')!, 10)
        : undefined
    };
  }

  updateUrlFilters(newFilters: IProductFilters): URLSearchParams {
    const params = new URLSearchParams();
    Object.keys(newFilters).forEach((key) => {
      const value = newFilters[key as keyof IProductFilters];
      if (Array.isArray(value) && value.length > 0) {
        params.set(key, value.join(','));
      } else if (value !== null && value !== undefined && !Array.isArray(value)) {
        params.set(key, value.toString());
      } else {
        params.delete(key);
      }
    });
    return params;
  }
}

const filtersService = new FiltersService();

export default filtersService;
