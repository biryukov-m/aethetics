import React from 'react';
import { IAddress } from '../../../../types/address';

interface IProps {
  address: IAddress;
  removeHandler(id: number): void;
}

const CabinetAddressBlock: React.FC<IProps> = ({ address, removeHandler }) => (
  <div className="contact">
    <div className="nth">{address.id}</div>
    <p>{address.city}</p>
    <p>
      {address.street}, {address.house} {address.apartment ? ` ,${address.apartment}` : ''}
    </p>
    <p>{address.postal}</p>
    <div className="buttons">
      <span>Редагувати</span>
      <button type="button" onClick={() => removeHandler(address.id)}>
        Видалити
      </button>
    </div>
  </div>
);

export default CabinetAddressBlock;
