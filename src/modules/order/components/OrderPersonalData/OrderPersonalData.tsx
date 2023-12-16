import React from 'react';

import * as Styled from './OrderPersonalData.styled';
import { Contacts } from '../../../common/Contacts/Contacts';
import { ROUTER_KEYS } from '../../../../constants/routerKeys';

export const OrderPersonalData: React.FC = () => (
  <Styled.Wrapper>
    <Contacts redirect={`/${ROUTER_KEYS.cabinet.root}`} />
  </Styled.Wrapper>
);
