import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Layout from './layout/Layout';
import Main from './pages/main/Main';
import Catalogue from './pages/catalogue/Catalogue';
import ProductCard from './pages/product-card/ProductCard';
import DeliveryPayment from './pages/delivery-payment/DeliveryPayment';
import Blog from './pages/blog/Blog';
import Contacts from './pages/contacts/Contacts';
import Cabinet from './pages/cabinet/Cabinet';

const App: React.FC = () => (
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

export default App;
