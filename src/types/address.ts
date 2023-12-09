export interface IAddNewAddress {
  city: string;
  street: string;
  house: string;
  apartment?: string;
  postal: string;
}

export interface IAddress {
  id: number;
  uuid: string;
  city: string;
  street: string;
  house: string;
  apartment?: string;
  postal: string;
}

export interface IUpdateAddress {
  id?: number;
  uuid: string;
  city?: string;
  street?: string;
  house?: string;
  apartment?: string;
  postal?: string;
}
