import React from 'react';
import * as Styled from './CabinetAddressBlock.styled';
import { IAddress, IUpdateAddress } from '../../../../types/address';

interface IProps {
  address: IAddress;
  removeHandler(uuid: string): void;
  updateHandler(address: IUpdateAddress): void;
  updating: boolean;
}

const CabinetAddressBlock: React.FC<IProps> = ({
  address,
  removeHandler,
  updateHandler,
  updating = false
}) => (
  <Styled.Item $updating={updating}>
    <Styled.Index>{address.id}</Styled.Index>
    <Styled.Text>{address.city}</Styled.Text>
    <Styled.Text>
      {address.street} {address.house}
      {address.apartment ? `, ${address.apartment}` : ''}
    </Styled.Text>
    <Styled.Text>{address.postal}</Styled.Text>
    <Styled.ButtonsContainer>
      <Styled.Button type="button" onClick={() => updateHandler(address)}>
        Редагувати
      </Styled.Button>
      <Styled.Button type="button" onClick={() => removeHandler(address.uuid)}>
        Видалити
      </Styled.Button>
    </Styled.ButtonsContainer>
  </Styled.Item>
);

export default CabinetAddressBlock;
