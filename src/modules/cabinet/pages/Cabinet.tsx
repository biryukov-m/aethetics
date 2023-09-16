import React from 'react';
import { Outlet } from 'react-router-dom';
import CabinetTabs from '../components/Tabs/CabinetTabs';
import * as Styled from './Cabinet.styled';

const Cabinet: React.FC = () => (
  <Styled.Section>
    <div className="layout">
      <Styled.Wrapper>
        <Styled.Header>Особистий кабінет</Styled.Header>
        <CabinetTabs />
        <Outlet />
      </Styled.Wrapper>
    </div>
  </Styled.Section>
);
export default Cabinet;
