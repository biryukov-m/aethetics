import { IFilter } from '../../types/filter';

export class FilterModel {
  constructor(public name: string) {}
}

export const createFilterModel = (filterFromServer: IFilter) =>
  new FilterModel(filterFromServer.name);
