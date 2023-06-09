import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { projectdata } from "../Components/Project/projectdata";

const Partners = () => {
  const [done, setdone] = useState(false)
  const getInitialState = () => {
    const value = "Select One";
    return value;
  };
  const [value, setValue] = useState(getInitialState);


  const form = useRef();

  const handleclick = (item) => {
      console.log(item)
  }
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_pm4xgdp', 'template_7k8ylqp', form.current, 'RpW_lOlcbPmxSuC9d')
        .then((result) => {
            console.log(result.text);
            setdone(true)
        }, (error) => {
            console.log(error.text);
        });
    };
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
                <h2 class="title">Our Partners</h2>
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <a href="index.html">Home</a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      Our Partners & Corporate Organization
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="estimate-area pt-50 pb-50">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-6 col-md-10">
              <div class="estimate-img-wrap">
                <img src="assets/img/maid.png" alt="" />
                <div class="office-loction-wrap">
                  <div class="row">
                    <div class="col-sm-12">
                      <div class="loction-item">
                        {/* <div class="icon">
                                                    <i class="fas fa-map-marker-alt"></i>
                                                </div> */}
                        <div class="content">
                          <h2 class="title">Corporate Organization</h2>
                          <a>
                            We offer customizable cleaning plans to meet the
                            specific needs and schedules of our clients.<br/>Scroll Down To See Our Partners
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-12">
                      <div class="loction-item">
                        <div class="icon">
                          <i class="fas fa-map-marker-alt"></i>
                        </div>
                        <div class="content">
                          <h2 class="title">Our Lagos Office</h2>
                          <a>No 18 King George V street, Onikan Lagos</a>
                          <br />
                          <a href="tel:0123456789">(+234) 909 532 1394</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="estimate-form">
                <h2 class="title">Join Us</h2>
                <form ref={form} onSubmit={sendEmail}>
                  <div class="row">
                    <div class="col-sm-12">
                      <div class="form-grp">
                        <input type="text" name='user_name' placeholder="Company Name*" />
                      </div>
                    </div>
                    {/* <div class="col-sm-6">
                      <div class="form-grp">
                        <input type="text" placeholder="Last Name*" />
                      </div>
                    </div> */}
                    <div class="col-sm-6">
                      <div class="form-grp">
                        <input type="text" name='user_phone' placeholder=" Phone number*" />
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-grp">
                        <input type="email" name='user_email' placeholder="Email*" />
                      </div>
                    </div>
                  </div>

                  <div class="form-grp select-grp">
                    <select
                      id="shortByOne"
                      name="user_service"
                      aria-label="Default select example"
                      value={value} onChange={handleChange}
                    >
                      <option value="">Select Services*</option>
                      {projectdata.slice(0, 4).map((item) => (
                        <option onClick={()=>handleclick(item.title)}>{item.title}</option>
                      ))}
                    </select>
                  </div>
                 

                  
                  <div class="form-grp">
                    <textarea
                      name="message"
                      placeholder="Comments/Questions*"
                    ></textarea>
                  </div>
                  <div className="form-grp">
                    {done && <p>Submitted</p>}
                  </div>
                  <button type="submit" class="btn btn-two">
                    Submit Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="brand-area pb-130 pt-50">
        <div class="container">
          <div class="row justify-content-center ">
            <div class="col-lg-6 col-md-10">
              <div class="section-title text-center mb-50">
                <span class="sub-title">
                  <svg
                    viewBox="0 0 41 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M35.2826 37.5886C36.6662 36.9737 38.8185 36.205 40.8939 36.205C38.8185 36.205 36.6662 35.4363 35.2826 34.8213C34.6676 33.4377 33.8989 31.2854 33.8989 29.21C33.8989 31.2854 33.1303 33.4377 32.5153 34.8213C31.1317 35.4363 28.9794 36.205 26.9039 36.205C28.9794 36.205 31.1317 36.9737 32.5153 37.5886C33.1303 38.9722 33.8989 41.1246 33.8989 43.2C33.8989 41.1246 34.6676 38.9722 35.2826 37.5886Z"
                      fill="currentcolor"
                    />
                    <path
                      d="M31.2085 13.5288C33.4377 12.5295 36.8968 11.2996 40.279 11.2996C36.8968 11.2996 33.4377 10.0698 31.2085 9.07046C30.2093 6.84128 28.9794 3.38221 28.9794 0C28.9794 3.38221 27.7495 6.84128 26.7502 9.07046C24.521 10.0698 21.0619 11.2996 17.6797 11.2996C21.0619 11.2996 24.521 12.5295 26.7502 13.5288C27.7495 15.758 28.9794 19.2171 28.9794 22.5993C28.9794 19.2171 30.2093 15.758 31.2085 13.5288Z"
                      fill="currentcolor"
                    />
                    <path
                      d="M16.6036 31.7467C19.2939 30.5936 23.5986 28.9794 27.6726 28.9794C23.5986 28.9794 19.2939 27.442 16.6036 26.2121C15.3737 23.5986 13.8363 19.294 13.8363 15.22C13.8363 19.294 12.2989 23.5986 11.069 26.289C8.37865 27.442 4.07402 29.0563 0 29.0563C4.07402 29.0563 8.37865 30.5936 11.069 31.8235C12.2989 34.4371 13.8363 38.7417 13.8363 42.8926C13.8363 38.7417 15.3737 34.4371 16.6036 31.7467Z"
                      fill="currentcolor"
                    />
                  </svg>
                  Our Loyal Partners
                </span>
                <h2 class="title">
                  Get to know Our
                  <span>
                    &nbsp;Partners
                    <svg
                      viewBox="0 0 173 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 22.9998C8.5 14.2152 90 -14 172 14.2148"
                        stroke-width="3"
                      />
                    </svg>
                  </span>
                </h2>
              </div>
            </div>
          </div>
          <div class="row brand-active">
            <div class="col-lg-2 col-sm-6">
              <div class="brand-item">
                <img src="assets/img/p1.png" alt="" />
              </div>
            </div>
            <div class="col-lg-2 col-sm-6">
              <div class="brand-item">
                <img src="assets/img/p10.png" alt="" />
              </div>
            </div>
            <div class="col-lg-2 col-sm-6">
              <div class="brand-item">
                <img src="assets/img/p2.png" alt="" />
              </div>
            </div>
            <div class="col-lg-2 col-sm-6">
              <div class="brand-item">
                <img src="assets/img/p3.png" alt="" />
              </div>
            </div>
            <div class="col-lg-2 col-sm-6">
              <div class="brand-item">
                <img src="assets/img/p4.png" alt="" />
              </div>
            </div>
            <div class="col-lg-2 col-sm-6">
              <div class="brand-item">
                <img src="assets/img/p5.png" alt="" />
              </div>
            </div>
          </div>
          <div class="row brand-active">
            <div class="col-lg-2 col-sm-6">
              <div class="brand-item">
                <img src="assets/img/p6.png" alt="" />
              </div>
            </div>

            <div class="col-lg-2 col-sm-6">
              <div class="brand-item">
                <img src="assets/img/p7.png" alt="" />
              </div>
            </div>
            <div class="col-lg-2 col-sm-6">
              <div class="brand-item">
                <img src="assets/img/p12.png" alt="" />
              </div>
            </div>
            <div class="col-lg-2 col-sm-6">
              <div class="brand-item">
                <img src="assets/img/p13.png" alt="" />
              </div>
            </div>
            <div class="col-lg-2 col-sm-6">
              <div class="brand-item">
                <img src="assets/img/p9.png" alt="" />
              </div>
            </div>

            <div class="col-lg-2 col-sm-6">
              <div class="brand-item">
                <img src="assets/img/p11.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Partners;
