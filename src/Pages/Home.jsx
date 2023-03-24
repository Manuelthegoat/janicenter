import React from "react";
import Hero from "../Components/Hero/Hero";
import About from "../Components/About/About";
import Services from "../Components/Services/Services";
import Project from "../Components/Project/Project";
import Testimonials from "../Components/Testimonials/Testimonials";
import Counter from "../Components/Counter/Counter";
import Partners from '../Components/Partners/Partners'

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Project />
      <Services />
      <Testimonials />
      <Partners />
      {/* <Counter /> */}
    </div>
  );
};

export default Home;
