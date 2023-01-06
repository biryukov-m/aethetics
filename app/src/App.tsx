import React from "react";
import Header from "./layout/header/Header";
import Footer from "./layout/footer/Footer";
import FirstView from "./pages/first-view/FirstView";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App: React.FC = () => (
  <>
    <Header />
    <Router>
      <div id="content">
        <Routes>
          <Route path="/" element={<FirstView />}></Route>
        </Routes>
      </div>
    </Router>

    <Footer />
  </>
);

export default App;
