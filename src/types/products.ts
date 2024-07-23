export type IProductId = string;
export type IProductName = string;
export type IProductImageUrl = string;
export type IProductAlt = string;
export type IProductRating = number;
export type IProductPrice = number;
export type IProductDescription = string;
export type IProductComposition = string;

export interface IProduct {
  _id: IProductId;
  name: IProductName;
  image: { imageAlt: string; asset: { _ref: string } };
  price: IProductPrice;
  description: IProductDescription;
  composition: IProductComposition;
}

export interface IProductFilters {
  category?: string;
  skinType?: string;
  ageGroup?: string;
  purpose?: string;
}
