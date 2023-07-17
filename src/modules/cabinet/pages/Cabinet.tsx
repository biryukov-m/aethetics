import React from 'react';
import { Outlet } from 'react-router-dom';
import CabinetTabs from '../components/Tabs/CabinetTabs';
import * as Styled from './Cabinet.styled';

const Cabinet: React.FC = () => {
  // eslint-disable-next-line no-console
  console.log('1');
  // const handleTabsClick = (event: React.MouseEvent) => {
  //   const target = event.target as Element;
  //   if (target.classList.contains('tab-link')) {
  //     document.querySelector('.tab.active')?.classList.remove('active');

  //     const id = target.getAttribute('data-for');
  //     if (id) {
  //       document.getElementById(id)?.classList.add('active');
  //     }

  //     const links = document.querySelectorAll('.tab-link');
  //     links?.forEach((link) => {
  //       if (link.getAttribute('data-for') === id) {
  //         link.classList.add('active');
  //       } else {
  //         link.classList.remove('active');
  //       }
  //     });
  //   }
  // };
  return (
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
};

export default Cabinet;
