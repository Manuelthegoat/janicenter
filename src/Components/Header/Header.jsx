import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../Img/logo2.png'

const Header = () => {
    return (
        <header>
            <div id="header-fixed-height"></div>
            <div id="sticky-header" class="menu-area menu-style-four">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="mobile-nav-toggler"><i class="fas fa-bars"></i></div>
                            <div class="menu-wrap">
                                <nav class="menu-nav">
                                    <div class="logo">
                                        <a href="index.html"><img src='logo4.svg' className='logos' alt="Logo" /></a>
                                    </div>
                                    <div class="navbar-wrap main-menu d-none d-lg-flex">
                                        <ul class="navigation">
                                            <li><Link to="/">Home</Link></li>
                                            <li><Link to="/about">About Us</Link></li>
                                            <li><Link to="/our-partners">Our Partners</Link></li>
                                            <li><Link to="/achiever">Become an achiever</Link></li>
                                            <li><Link to="/contact">contacts</Link></li>
                                        </ul>
                                    </div>
                                    <div class="header-action d-none d-md-block">
                                        <ul class="list-wrap">
                                            <li class="header-contact">
                                                <div class="icon">
                                                    <i class="fas fa-phone-alt"></i>
                                                </div>
                                                <div class="content">
                                                    <span>Call for help:</span>
                                                    <a href="tel:0123456789">(+234) 909 532 1394</a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>

                            <div class="mobile-menu">
                                <nav class="menu-box">
                                    <div class="close-btn"><i class="fas fa-times"></i></div>
                                    <div class="nav-logo">
                                        <a href="index.html"><img src="assets/img/logo/logo.svg" alt="Logo" /></a>
                                    </div>
                                    <div class="menu-outer">
                                    </div>
                                    <div class="social-links">
                                        <ul class="clearfix list-wrap">
                                            <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                            <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                            <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                                            <li><a href="#"><i class="fab fa-youtube"></i></a></li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                            <div class="menu-backdrop"></div>

                        </div>
                    </div>
                </div>
            </div>

            <div class="search-popup-wrap" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="search-close">
                    <span><i class="fas fa-times"></i></span>
                </div>
                <div class="search-wrap text-center">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <h2 class="title">... Search Here ...</h2>
                                <div class="search-form">
                                    <form action="#">
                                        <input type="text" name="search" placeholder="Type keywords here" />
                                        <button class="search-btn"><i class="fas fa-search"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
