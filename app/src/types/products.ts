export type IProductId = number;
export type IProductName = string;
export type IProductImageUrl = string;
export type IProductAlt = string;
export type IProductRating = number;
export type IProductPrice = number;
export type IProductDescription = string;
export type IProductComposition = string;

export interface IProduct {
  id: IProductId;
  name: IProductName;
  imageUrl: IProductImageUrl;
  imageAlt: IProductAlt;
  rating: IProductRating;
  price: IProductPrice;
  description: IProductDescription;
  composition: IProductComposition;
}
