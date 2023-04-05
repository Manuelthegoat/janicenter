import React from "react";
import { Link } from "react-router-dom";

const Achiever = () => {
  return (
    <>
      <section
        class="breadcrumb-area breadcrumb-bg manuelbread"
        data-background="assets/img/bg/breadcrumb_bg.jpg"
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="breadcrumb-content">
                <h2 class="title">Become An Achiever</h2>
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <a href="index.html">Home</a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      Corporate Organization
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="project-details-area pt-20 pb-100">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="project-details-wrap">
                <div class="project-details-content">
                  <h2 class="title">Our Achievers</h2>
                  <p>
                  Our achievers are professional cleaners and janitors who maintain buildings, facilities, and other commercial or residential spaces. 
                  <br/>
                  <br/>
                  Our Achievers don't only work in a variety of settings, including office buildings, schools, hospitals, airports, hotels, and more but are able to identify and report any maintenance or repair needs, such as broken light fixtures or leaky faucets 
                  <img src="assets/img/achiever.jpg" alt="" />
                  <br/>
                  <br/>
                  Our Achievers are trained to perform basic maintenance tasks, such as changing air filters or replacing light bulbs and are also able maintain outdoor areas, such as sidewalks, parking lots, and landscaping.
                  <br/>
                  <br/>
                  </p>

                  <h4 class="title-two">Become An Achiever</h4>
                  <br/>
                  <br/>
                  <h4 class="title">Would you like to join us, learn and become a professional Janitor?<Link to="/contact" className="color6"> Contact us here!</Link></h4>

                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Achiever;
