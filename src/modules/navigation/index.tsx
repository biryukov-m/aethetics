import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Layout from '../layout/Layout';
import Main from '../main/pages/Main';
import Catalogue from '../catalogue/pages/catalogue/Catalogue';
import ProductCard from '../catalogue/pages/product-card/ProductCard';
import Blog from '../blog/pages/blog/Blog';
import Cabinet from '../cabinet/pages/Cabinet';
import Contacts from '../contacts/pages/Contacts';
import DeliveryPayment from '../delivery-payment/pages/DeliveryPayment';

export const MainRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Main />} />
        <Route path="catalogue" element={<Catalogue />} />
        <Route path="product/:id" element={<ProductCard />} />
        <Route path="delivery-and-payment" element={<DeliveryPayment />} />
        <Route path="blog/:id" element={<Blog />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="cabinet" element={<Cabinet />} />
      </Route>
    </Routes>
  </Router>
);
