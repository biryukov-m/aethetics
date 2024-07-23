import { ICategory } from '../../types/category';

export class CategoryModel {
  constructor(public name: string) {}
}

export const createCategoryModel = (categoryFromServer: ICategory) =>
  new CategoryModel(categoryFromServer.name);
