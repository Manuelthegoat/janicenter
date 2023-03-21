import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./Pages/About";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home";
import Partners from "./Pages/Partners";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/our-partners" element={<Partners />} />
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </>
  );
};

export default Routing;
