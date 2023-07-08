export interface IAddNewAddress {
  city: string;
  street: string;
  house: string;
  apartment?: string;
  postal: string;
}

export interface IAddress {
  id: number;
  city: string;
  street: string;
  house: string;
  apartment?: string;
  postal: string;
}
