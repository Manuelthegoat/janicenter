import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./Pages/About";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home";
import Partners from "./Pages/Partners";
import Projects from "./Pages/Projects/Projects";
import Servicepage from "./Pages/Servicepage";
import Bespoke from "./Pages/Servicepage/Bespoke";
import Construction from "./Pages/Servicepage/Construction";
import Fumigation from "./Pages/Servicepage/Fumigation";
import House from "./Pages/Servicepage/House";
import Kitchen from "./Pages/Servicepage/Kitchen";
import Party from "./Pages/Servicepage/Party";
import Premovein from "./Pages/Servicepage/Premovein";
import Toilet from "./Pages/Servicepage/Toilet";
import Window from './Pages/Servicepage/Window'

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/our-partners" element={<Partners />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/corporate" element={<Servicepage />} />
        <Route path="/houseservice" element={<House />} />
        <Route path="/services" element={<Projects />} />
        <Route path="/bespoke" element={<Bespoke />} />
        <Route path="/fumigation" element={<Fumigation />} />
        <Route path="/construction" element={<Construction />} />
        <Route path='/window' element={<Window />} />
        <Route path='/afterparty' element={<Party />} />
        <Route path="/toilet" element={<Toilet />} />
        <Route path="/premovein" element={<Premovein />} />
        <Route path="/kitchen" element={<Kitchen />} />
      </Routes>
    </>
  );
};

export default Routing;
