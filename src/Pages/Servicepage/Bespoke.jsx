import React from "react";
import { projectdata } from "../../Components/Project/projectdata";

const Bespoke = () => {
  return (
    <div>
      <section class="project-details-area pt-130 pb-100">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="project-details-wrap">
                <div class="project-details-thumb">
                  <img src="assets/img/8.jpg" alt="" />
                </div>
                <div class="project-details-content">
                  <h2 class="title">Bespoke Services</h2>
                  <p>
                    We are able to customize cleaning solutions that are
                    tailored, planned and schedules to meet your specific needs
                    and requirements. We offer specialized cleaning services,
                    such as carpet cleaning, window cleaning, or upholstery
                    cleaning, after party cleaning, post-construction cleaning,
                    to mention a few, these can be added to the your cleaning
                    plan as needed. Your time and energy should not be wasted on
                    cleaning, we will do it. Contact us!
                  </p>

                  {/* <h4 class="title-two">Request Now!</h4> */}
               
                  <h4 class="title-two"><a href='/afterparty'>After Party Cleaning</a></h4>
                  <h4 class="title-two"><a href='/premovein'>Pre move-in Cleaning</a></h4>
                  <h4 class="title-two"><a href='/construction'></a>Post Construction Cleaning</h4>
                  <h4 class="title-two"><a href='/retainership'></a>Retainership</h4>
                  <h4 class="title-two"><a href='/'></a>Others</h4>
                

                
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Bespoke;
