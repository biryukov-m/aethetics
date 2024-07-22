import React from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Layout from '../layout/Layout';
import Main from '../main/pages/Main';
import Catalogue from '../catalogue/pages/Catalogue/Catalogue';
import ProductCard from '../catalogue/pages/product-card/ProductCard';
import Blog from '../blog/pages/blog/Blog';
import Cabinet from '../cabinet/pages/Cabinet';
import ShopContacts from '../contacts/pages/ShopContacts';
import DeliveryPayment from '../delivery-payment/pages/DeliveryPayment';
import Order from '../order/pages/Order';
import CabinetAddress from '../cabinet/components/Address/CabinetAddress';
import CabinetContacts from '../cabinet/components/Contacts/CabinetContacts';
import CabinetFavourites from '../cabinet/components/Favourites/CabinetFavourites';
import CabinetHistory from '../cabinet/components/History/CabinetHistory';
import { ROUTER_KEYS } from '../../constants/appKeys';
import { OrderPersonalData } from '../order/components/OrderPersonalData/OrderPersonalData';
import { OrderPaymentAndDelivery } from '../order/components/OrderPaymentAndDelivery/OrderPaymentAndDelivery';

export const MainRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path={ROUTER_KEYS.catalogue} element={<Catalogue />} />
        <Route path={`${ROUTER_KEYS.product}/:id`} element={<ProductCard />} />
        <Route path={ROUTER_KEYS.deliveryAndPayment} element={<DeliveryPayment />} />
        <Route path={`${ROUTER_KEYS.blog}/:id`} element={<Blog />} />
        <Route path={ROUTER_KEYS.blog} element={<Blog />} />
        <Route path={ROUTER_KEYS.contacts} element={<ShopContacts />} />
        <Route path={ROUTER_KEYS.cabinet.root} element={<Cabinet />}>
          <Route index element={<Navigate to={ROUTER_KEYS.cabinet.contacts} />} />
          <Route path={ROUTER_KEYS.cabinet.address} element={<CabinetAddress />} />
          <Route path={ROUTER_KEYS.cabinet.contacts} element={<CabinetContacts />} />
          <Route path={ROUTER_KEYS.cabinet.favourites} element={<CabinetFavourites />} />
          <Route path={ROUTER_KEYS.cabinet.history} element={<CabinetHistory />} />
        </Route>
        <Route path={ROUTER_KEYS.order.root} element={<Order />}>
          <Route index element={<Navigate to={ROUTER_KEYS.order.contacts} />} />
          <Route path={ROUTER_KEYS.order.contacts} element={<OrderPersonalData />} />
          <Route path={ROUTER_KEYS.order.delivery} element={<OrderPaymentAndDelivery />} />
        </Route>
      </Route>
    </Routes>
  </Router>
);
