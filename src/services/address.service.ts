import STORAGE_KEYS from '../constants/storageKeys';
import { IAddNewAddress, IAddress } from '../types/address';

class AddressService {
  get addresses() {
    const addresses = localStorage.getItem(STORAGE_KEYS.address);
    return addresses ? (JSON.parse(addresses) as IAddress[]) : [];
  }

  set addresses(addresses: IAddress[]) {
    localStorage.setItem(STORAGE_KEYS.address, JSON.stringify(addresses));
  }

  getById(id: number) {
    return this.addresses.find((address) => address.id === id);
  }

  private getNextId() {
    if (this.addresses.length === 0) {
      return 0;
    }
    const ids = this.addresses.map((address) => address.id);
    return Math.max(...ids) + 1;
  }

  add(address: IAddNewAddress) {
    const addressWithId = { ...address, id: this.getNextId() };
    this.addresses = [...this.addresses, addressWithId];
  }

  remove(id: number) {
    const foundAddress = this.getById(id);
    if (foundAddress) {
      this.addresses = this.addresses.filter((address) => address.id !== id);
    }
  }

  update(address: IAddress) {
    const { addresses } = this;
    const foundAddress = this.getById(address.id);
    if (foundAddress) {
      const updatedAddress = { ...foundAddress, ...address };
      this.addresses = addresses.map((item) => {
        if (item.id === address.id) {
          return updatedAddress;
        }
        return item;
      });
    }
  }
}

export default new AddressService();
