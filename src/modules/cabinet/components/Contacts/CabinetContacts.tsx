import React from 'react';
import * as Styled from './CabinetContacts.styled';
import { CabinetContactsForm } from './CabinetContactsForm';

const CabinetContacts: React.FC = () => (
  <>
    <Styled.Header className="tab-link mobile active" data-for="tab-contacts">
      Контактна інформація
    </Styled.Header>
    <Styled.Wrapper className="tab contacts active" id="tab-contacts">
      <CabinetContactsForm />
    </Styled.Wrapper>
  </>
);

export default CabinetContacts;
