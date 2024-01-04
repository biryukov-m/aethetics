import React from 'react';

import * as Styled from './OrderPersonalData.styled';
import { Contacts } from '../../../common/components/Contacts/Contacts';
import { ROUTER_KEYS } from '../../../../constants/appKeys';

export const OrderPersonalData: React.FC = () => (
  <Styled.Wrapper>
    <Contacts redirect={`/${ROUTER_KEYS.order.root}/${ROUTER_KEYS.order.delivery}`} />
  </Styled.Wrapper>
);
