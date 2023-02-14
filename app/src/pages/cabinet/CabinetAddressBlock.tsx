import React from "react";

type Props = {
  id: number;
  name: string;
  city: string;
  street: string;
  telephone: string;
};

const CabinetAddressBlock: React.FC<Props> = ({
  id,
  name,
  city,
  street,
  telephone,
}) => (
  <div className="contact">
    <div className="nth">1</div>
    <p>{name}</p>
    <p>{city}</p>
    <p>{street}5</p>
    <p>{telephone}</p>
    <div className="buttons">
      <span>Редагувати</span>
      <span>Видалити</span>
    </div>
  </div>
);

export default CabinetAddressBlock;
