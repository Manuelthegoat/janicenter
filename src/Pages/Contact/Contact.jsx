import React from "react";
import two from "../../Img/2.jpg";

const Contact = () => {
  return (
    <div>
      <section
        class="breadcrumb-area breadcrumb-bg manuelbread"
        data-background="assets/img/bg/breadcrumb_bg.jpg"
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="breadcrumb-content">
                <h2 class="title">Customer Service Page</h2>
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <a href="index.html">Home</a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      Customer Service Page
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="contact-area pt-130 pb-130">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-12 col-md-10">
              <div class="section-title-three text-center">
                {/* <span class="sub-title">Our Services</span> */}
                <h2 class="title">Customer Service</h2>
                <p>
                  Our Customer service Team is available 24/7 to support you —
                  both before and after you use our services — the team ensures
                  that you have an easy, enjoyable experience when you use us.
                  We are a one-customer Janitorial service company!
                </p>
              </div>
            </div>
          </div>
          <div class="inner-contact-info-wrap">
            <div class="row justify-content-center">
              <div class="col-lg-4 col-md-6 col-sm-10">
                <div class="inner-contact-info-item">
                  <div class="icon">
                    <i class="fas fa-phone-volume"></i>
                  </div>
                  <div class="content">
                    <a href="tel:0123456789">(+234) 909 532 1394</a>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-10">
                <div class="inner-contact-info-item">
                  <div class="icon">
                    <i class="fas fa-envelope"></i>
                  </div>
                  <div class="content">
                    <a href="mailto:Envato@gmail.com">support@janicenter.org</a>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-10">
                <div class="inner-contact-info-item">
                  <div class="icon">
                    <i class="fas fa-map-marker-alt"></i>
                  </div>
                  <div class="content">
                    <p>
                    NO 18 King George V street,<br/> Onikan Lagos
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="contact-form-area">
            <div class="row align-items-center g-0">
              <div class="col-lg-6">
                <div class="contact-img">
                  <img src={two} alt="" />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="contact-content">
                  <h2 class="title">Contact for Services</h2>
                  <form action="#">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-grp">
                          <input type="text" placeholder="Your Name" />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-grp">
                          <input type="email" placeholder="Email address" />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-grp">
                          <input type="text" placeholder="Phone number" />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-grp">
                          <input type="text" placeholder="Subject" />
                        </div>
                      </div>
                    </div>
                    <div class="form-grp">
                      <textarea
                        name="message"
                        placeholder="Write message"
                      ></textarea>
                    </div>
                    <button type="submit" class="btn">
                      Send a message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6 col-sm-10" id="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.596368315712!2d3.403800314296764!3d6.445839225850751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2446aa8755%3A0x7de45fcb105921de!2s18%20King%20George%20V%20Rd%2C%20Lagos%20Island%20102273%2C%20Lagos!5e0!3m2!1sen!2sng!4v1679496919156!5m2!1sen!2sng"
            width="600"
            height="450"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="col-lg-12"></div>
    </div>
  );
};

export default Contact;
