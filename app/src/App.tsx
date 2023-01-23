import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./layout/header/Header";
import Footer from "./layout/footer/Footer";
import Main from "./pages/main/Main";
import Catalogue from "./pages/catalogue/Catalogue";
import ProductCard from "./pages/product-card/ProductCard";
import DeliveryPayment from "./pages/delivery-payment/DeliveryPayment";
import Blog from "./pages/blog/Blog";

const App: React.FC = () => (
  <Router>
    <Header />
    <div id="content">
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="catalogue" element={<Catalogue />}></Route>
        <Route path="product/1" element={<ProductCard />}></Route>
        <Route
          path="delivery-and-payment"
          element={<DeliveryPayment />}
        ></Route>
        <Route path="blog" element={<Blog />}></Route>
      </Routes>
    </div>
    <Footer />
  </Router>
);

export default App;
