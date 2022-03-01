import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home/Home';
import Cart from './Cart';
import Header from './Header';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { StoreControllerProvider } from "../context";

import "../styles/main.scss";

const App = () => (
  <BrowserRouter>
    <StoreControllerProvider>
      <div className="container py-3">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </StoreControllerProvider>
  </BrowserRouter>
);

export default App;
