import { v4 as uuidv4 } from 'uuid';
import { STORAGE_KEYS } from '../constants/appKeys';
import { IAddNewAddress, IAddress, IUpdateAddress } from '../types/address';

class AddressService {
  get addresses() {
    const addresses = localStorage.getItem(STORAGE_KEYS.address);
    return addresses ? (JSON.parse(addresses) as IAddress[]) : [];
  }

  set addresses(addresses: IAddress[]) {
    localStorage.setItem(STORAGE_KEYS.address, JSON.stringify(addresses));
  }

  getByUUID(uuid: string) {
    return this.addresses.find((address) => address.uuid === uuid);
  }

  private getNextId() {
    if (this.addresses.length === 0) {
      return 1;
    }
    const ids = this.addresses.map((address) => address.id);
    return Math.max(...ids) + 1;
  }

  private generateUUID(): string {
    return uuidv4();
  }

  private recalculateIds() {
    if (this.addresses.length > 0) {
      const recalculated = this.addresses.map((address, idx) => {
        address.id = idx + 1;
        return address;
      });
      this.addresses = [...recalculated];
    }
  }

  add(address: IAddNewAddress) {
    const newAddress = { ...address, id: this.getNextId(), uuid: this.generateUUID() };
    this.addresses = [...this.addresses, newAddress];
  }

  remove(uuid: string) {
    const foundAddress = this.getByUUID(uuid);
    if (foundAddress) {
      this.addresses = this.addresses.filter((address) => address.uuid !== uuid);
      this.recalculateIds();
    }
  }

  update(address: IUpdateAddress) {
    const { addresses } = this;
    const foundAddress = this.getByUUID(address.uuid);
    if (foundAddress) {
      const updatedAddress = { ...foundAddress, ...address };
      this.addresses = addresses.map((item) => {
        if (item.uuid === address.uuid) {
          return updatedAddress;
        }
        return item;
      });
      this.recalculateIds();
    }
  }
}

export default new AddressService();
