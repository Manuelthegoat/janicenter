import React from "react";
import Abouta from "../Components/Abouta/Abouta";
import Aservice from "../Components/AnotherService/Aservice";
import Servicearea from "../Components/Servicearea/Servicearea";
import Timeline from "../Components/Timeline/Timeline";

const AboutPage = () => {
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
                <h2 class="title">About us</h2>
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <a href="index.html">Home</a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      About Us
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Abouta />
      {/* <Servicearea /> */}
      <Aservice />
      <Timeline />
    </>
  );
};

export default AboutPage;
