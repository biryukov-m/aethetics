import React from 'react';
import * as Styled from './CabinetAddressBlock.styled';
import { IAddress } from '../../../../types/address';

interface IProps {
  address: IAddress;
  removeHandler(id: number): void;
  updateHandler(address: IAddress): void;
}

const CabinetAddressBlock: React.FC<IProps> = ({ address, removeHandler, updateHandler }) => (
  <Styled.Item>
    <Styled.Index>{address.id}</Styled.Index>
    <Styled.Text>{address.city}</Styled.Text>
    <Styled.Text>
      {address.street}, {address.house} {address.apartment ? ` ,${address.apartment}` : ''}
    </Styled.Text>
    <Styled.Text>{address.postal}</Styled.Text>
    <Styled.ButtonsContainer>
      <Styled.Button type="button" onClick={() => updateHandler(address)}>
        Редагувати
      </Styled.Button>
      <Styled.Button type="button" onClick={() => removeHandler(address.id)}>
        Видалити
      </Styled.Button>
    </Styled.ButtonsContainer>
  </Styled.Item>
);

export default CabinetAddressBlock;
