import React from 'react'
import logo from '../../Img/logo2.png'

const Footer = () => {
  return (
    <div>
      <footer>
            <div class="footer-area footer-bg">
                <div class="footer-top">
                    <div class="container">
                        <div class="footer-logo-area">
                            <div class="row align-items-center">
                                <div class="col-md-4">
                                    <div class="logo">
                                        <a href="index.html"><img src={logo} alt="" /></a>
                                    </div>
                                </div>
                                <div class="col-md-8">
                                    <div class="footer-social-menu">
                                        <ul class="list-wrap">
                                            <li><a href="#">Facebook</a></li>
                                            <li><a href="#">Twitter</a></li>
                                            <li><a href="#">LinkedIn</a></li>
                                            <li><a href="#">Instagram</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-3 col-sm-6">
                                <div class="footer-widget">
                                    <div class="fw-title">
                                        <h4 class="title">Contact Us</h4>
                                    </div>
                                    <div class="footer-content">
                                        <p>NO18 King George V street, Onikan Lagos</p>
                                        <div class="footer-contact">
                                            <ul class="list-wrap">
                                                <li class="phone-addess">
                                                    <i class="fas fa-phone-alt"></i>
                                                    <a href="tel:09095321394">(+234)9095321394</a>
                                                </li>
                                                <li class="email-addess"><a href="mailto:support@janicentre.com">support@janicentre.com</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6">
                                <div class="footer-widget">
                                    <div class="fw-title">
                                        <h4 class="title">Our Links</h4>
                                    </div>
                                    <div class="fw-link-list">
                                        <ul class="list-wrap">
                                            <li><a href="about.html">About</a></li>
                                            <li><a href="team.html">Meet Our Team</a></li>
                                            <li><a href="contact.html">What We Do</a></li>
                                            <li><a href="blog.html">News</a></li>
                                            <li><a href="contact.html">Contact</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6">
                                <div class="footer-widget">
                                    <div class="fw-title">
                                        <h4 class="title">Our Services</h4>
                                    </div>
                                    <div class="fw-link-list">
                                        <ul class="list-wrap">
                                            <li><a href="services.html">Apartment Cleaning</a></li>
                                            <li><a href="services.html">House Cleaning</a></li>
                                            <li><a href="services.html">Carpet Cleaning</a></li>
                                            <li><a href="services.html">After Renovation</a></li>
                                            <li><a href="services.html">Curtain Cleaning</a></li>
                                            <li><a href="services.html">Window Cleaning</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6">
                                <div class="footer-widget">
                                    <div class="fw-title">
                                        <h4 class="title">Newsletter</h4>
                                    </div>
                                    <div class="footer-newsletter">
                                        <p>Subscribe our newsletter to get our latest update & news</p>
                                        <form action="#">
                                            <input type="text" placeholder="Your mail address" />
                                            <button type="submit" class="btn">Subscribe</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-bottom">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6 col-md-7">
                                <div class="copyright-text">
                                    <p>2023 <a href="index.html">Janicenter.</a> All Rights Reserved by Profile Name.</p>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-5">
                                <div class="footer-bottom-menu">
                                    <ul class="list-wrap">
                                        <li><a href="contact.html">Privacy Policy</a></li>
                                        <li><a href="contact.html">Terms & Conditions</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer
