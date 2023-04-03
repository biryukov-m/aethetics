export interface Review {
  id: number;
  author: string;
  date: string;
  rating: number;
  text: string;
}

export interface Product {
  name: string;
  imageUrl: string;
  imageAlt: string;
  rating: number;
  price: number;
  favourite: boolean;
  description: string;
  composition: string;
  availability: boolean;
  reviews: Review[];
}
