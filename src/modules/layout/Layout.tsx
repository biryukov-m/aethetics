import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header/Header';
import BottomContacts from '../common/components/bottom-contacts/BottomContacts';
import Footer from './footer/Footer';

const Layout: React.FC = () => (
  <>
    <Header />
    <div id="modal" />
    <Outlet />
    <BottomContacts />
    <Footer />
  </>
);

export default Layout;
