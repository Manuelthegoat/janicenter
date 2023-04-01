import React, { useRef, useState } from 'react';
import { projectdata } from "../Project/projectdata";
import emailjs from '@emailjs/browser';

const Hero = () => {
    const [done, setdone] = useState(false)
    const form = useRef();

    const handleclick = (item) => {
        console.log(item)
    }
     const handleChange = (e) => {
    setValue(e.target.value);
  };


    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_pm4xgdp', 'template_zyovrzk', form.current, 'RpW_lOlcbPmxSuC9d')
          .then((result) => {
              console.log(result.text);
              setdone(true)
          }, (error) => {
              console.log(error.text);
          });
      };

  return (
    <div>
      <section
        class="banner-area-three manuel jarallax banner-bg-three pt-0"
        data-background="assets/img/banner/h4_banner_bg.jpg"
      >
        <div class="container">
          <div class="row align-items-center justify-content-center">
            <div class="col-lg-6 col-md-10 order-2 ">
              <div class="banner-form-wrap">
                <h2 class="title">Get a Free Estimate</h2>
                <form ref={form} onSubmit={sendEmail}>
                  <div class="form-grp">
                    <input type="text" name="user_name" placeholder="Your name" />
                  </div>
                  <div class="form-grp">
                    <input type="email" name="user_email" placeholder="Email address" />
                  </div>
                  <div class="form-grp">
                    <input type="text" name="user_phone" placeholder="phone number" />
                  </div>
                  <div class="form-grp">
                    <select
                      id="shortBy"
                      name="user_service"
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option value="">Select Service</option>
                      {projectdata.slice(0, 4).map((item) => (
                        <option value="" onClick={()=>handleclick(item.title)}>{item.title}</option>
                      ))}
                    </select>
                  </div>
                  <button type="submit" class="btn btn-two">
                    Submit Your Request
                  </button>
                  <div className="form-grp">
                    {done && <p>Submitted</p>}
                  </div>
                </form>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="banner-content-three">
                <h2 class="title">Janicenter Africa Cleaning Services</h2>
                <h3>Cleaning to the last detail</h3>
                <div class="banner-btn">
                  <a href="/about" class="btn">
                    Discover MORE
                  </a>
                  <a href="/services" class="btn btn-two">
                    Our services
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
