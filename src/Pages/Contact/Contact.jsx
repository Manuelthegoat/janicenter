import React from "react";
import two from '../../Img/2.jpg'

const Contact = () => {
  return (
    <div>
      <section
        class="breadcrumb-area breadcrumb-bg"
        data-background="assets/img/bg/breadcrumb_bg.jpg"
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="breadcrumb-content">
                <h2 class="title">Contact Page</h2>
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <a href="index.html">Home</a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      Contact Page
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
                    <div class="inner-contact-info-wrap">
                        <div class="row justify-content-center">
                            <div class="col-lg-4 col-md-6 col-sm-10">
                                <div class="inner-contact-info-item">
                                    <div class="icon">
                                        <i class="fas fa-phone-volume"></i>
                                    </div>
                                    <div class="content">
                                        <a href="tel:0123456789">+23 (000) 68 603</a>
                                        <a href="tel:0123456789">+55 (000) 68 879</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-10">
                                <div class="inner-contact-info-item">
                                    <div class="icon">
                                        <i class="fas fa-envelope"></i>
                                    </div>
                                    <div class="content">
                                        <a href="mailto:Envato@gmail.com">Envato@gmail.com</a>
                                        <a href="mailto:Envato@gmail.com">Envato@gmail.com</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-10">
                                <div class="inner-contact-info-item">
                                    <div class="icon">
                                        <i class="fas fa-map-marker-alt"></i>
                                    </div>
                                    <div class="content">
                                        <p>66 broklyn golden street <br/> 600 New york. USA</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="contact-form-area">
                        <div class="row align-items-center g-0">
                            <div class="col-lg-6">
                                <div class="contact-img">
                                    <img src={two} alt=""/>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="contact-content">
                                    <h2 class="title">Contact for Services</h2>
                                    <form action="#">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-grp">
                                                    <input type="text" placeholder="Your Name"/>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-grp">
                                                    <input type="email" placeholder="Email address"/>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-grp">
                                                    <input type="text" placeholder="Phone number"/>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-grp">
                                                    <input type="text" placeholder="Subject"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-grp">
                                            <textarea name="message" placeholder="Write message"></textarea>
                                        </div>
                                        <button type="submit" class="btn">Send a message</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div id="contact-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d213.81628037300501!2d3.3441262326328074!3d6.664588295987869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMzknNTMuMyJOIDPCsDIwJzQwLjEiRQ!5e1!3m2!1sen!2sng!4v1679403464445!5m2!1sen!2sng" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>            </div>
    </div>
  );
};

export default Contact;