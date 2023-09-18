import React from 'react';
import { Outlet } from 'react-router-dom';
import CabinetTabs from '../components/Tabs/CabinetTabs';
import * as Styled from './Cabinet.styled';

const Cabinet: React.FC = () => (
  <Styled.Section>
    <Styled.Layout>
      <Styled.Wrapper>
        <Styled.Header>Особистий кабінет</Styled.Header>
        <CabinetTabs />
        <Outlet />
      </Styled.Wrapper>
    </Styled.Layout>
  </Styled.Section>
);
export default Cabinet;
