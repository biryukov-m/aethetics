import React from 'react';
import { Outlet } from 'react-router-dom';
import CabinetTabs from '../components/Tabs/CabinetTabs';
import * as Styled from './Cabinet.styled';

const Cabinet: React.FC = () => (
  <Styled.Layout>
    <Styled.Header>Особистий кабінет</Styled.Header>
    <CabinetTabs />
    <Outlet />
  </Styled.Layout>
);
export default Cabinet;
