import React from 'react';

import * as Styled from './OrderPersonalData.styled';
import { Contacts } from '../../../common/Contacts/Contacts';

export const OrderPersonalData: React.FC = () => {
  // eslint-disable-next-line no-console
  console.log();

  return (
    <Styled.Wrapper>
      <Contacts />
    </Styled.Wrapper>
  );
};
