import React from 'react';
import { IAddress } from '../../../../types/address';

const CabinetAddressBlock: React.FC<IAddress> = ({
  city,
  street,
  house,
  id,
  postal,
  apartment
}) => (
  <div className="contact">
    <div className="nth">{id}</div>
    <p>{city}</p>
    <p>
      {street}, {house} {apartment ? ` ,${apartment}` : ''}
    </p>
    <p>{postal}</p>
    <div className="buttons">
      <span>Редагувати</span>
      <span>Видалити</span>
    </div>
  </div>
);

export default CabinetAddressBlock;
