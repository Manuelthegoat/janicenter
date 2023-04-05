import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../Img/logo2.png'

const Footer = () => {
  return (
    <div>
      <footer>
            <div class="footer-areLink footer-bg">
                <div class="footer-top">
                    <div class="container">
                        <div class="footer-logo-area">
                            <div class="row align-items-center">
                                <div class="col-md-4">
                                    <div class="logo">
                                        <Link to="/"><img src={logo} alt="" /></Link>
                                    </div>
                                </div>
                                <div class="col-md-8">
                                    <div class="footer-social-menu">
                                        <ul class="list-wrap">
                                            <li><Link to="/">Facebook</Link></li>
                                            <li><Link to="/">Twitter</Link></li>
                                            <li><Link to="/">LinkedIn</Link></li>
                                            <li><Link to="/">Instagram</Link></li>
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
                                        <p>NO 18 King George V street, Onikan Lagos</p>
                                        <div class="footer-contact">
                                            <ul class="list-wrap">
                                                <li class="phone-addess">
                                                    <i class="fas fa-phone-alt"></i>
                                                    <a href="tel:09095321394">(+234)9095321394</a>
                                                </li>
                                                <li class="email-addess"><Link href="mailto:support@janicenter.org">support@janicenter.org</Link>
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
                                            <li><Link to="/about">About</Link></li>
                                            <li><Link to="/achiever">Become An Achiever</Link></li>
                                            <li><Link to="/services">Our Partners</Link></li>
                                            <li><Link to="/contact">Contact</Link></li>
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
                                            <li><Link to="/houseservice">House Cleaning</Link></li>
                                            <li><Link to="/corporate">Corporate Cleaning</Link></li>
                                            <li><Link to="/bespoke">BeSpoke Services</Link></li>
                                            <li><Link to="/fumigation">Fumigation Services</Link></li>
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
                                    <p>2023 <Link to="index.html">Janicenter.</Link> All Rights Reserved by Janicenter Africa</p>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-5">
                                <div class="footer-bottom-menu">
                                    <ul class="list-wrap">
                                        <li><Link to="/">Privacy Policy</Link></li>
                                        <li><Link to="/">Terms & Conditions</Link></li>
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
