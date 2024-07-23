export interface IFilter {
  _id: string;
  name: string;
}

export interface IAllFilters {
  ageGroups: IFilter[];
  categories: IFilter[];
  skinTypes: IFilter[];
  purposes: IFilter[];
}
