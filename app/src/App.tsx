import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./layout/header/Header";
import Footer from "./layout/footer/Footer";
import Main from "./pages/main/Main";

const App: React.FC = () => (
  <>
    <Header />
    <Router>
      <div id="content">
        <Routes>
          <Route path="/" element={<Main />}></Route>
        </Routes>
      </div>
    </Router>

    <Footer />
  </>
);

export default App;
