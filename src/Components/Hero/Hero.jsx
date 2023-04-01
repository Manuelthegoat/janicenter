import React from 'react'

const Hero = () => {
    return (
        <div>
            <section class="banner-area-three manuel jarallax banner-bg-three pt-0" data-background="assets/img/banner/h4_banner_bg.jpg">
                <div class="container">
                    <div class="row align-items-center justify-content-center">
                        <div class="col-lg-6 col-md-10 order-2 ">
                            <div class="banner-form-wrap">
                                <h2 class="title">Get a Free Estimate</h2>
                                <form action="#">
                                    <div class="form-grp">
                                        <input type="text" placeholder="Your name" />
                                    </div>
                                    <div class="form-grp">
                                        <input type="email" placeholder="Email address" />
                                    </div>
                                    <div class="form-grp">
                                        <input type="text" placeholder="phone number" />
                                    </div>
                                    <div class="form-grp">
                                        <select id="shortBy" name="select" class="form-select" aria-label="Default select example">
                                            <option value="">Select Service</option>
                                            <option>Office Service</option>
                                            <option>Home Service</option>
                                            <option>Others Service</option>
                                        </select>
                                    </div>
                                    <button type="submit" class="btn btn-two">Submit Your Request</button>
                                </form>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="banner-content-three">
                                <h2 class="title">Janicenter Africa Cleaning Services</h2>
                                <h3 >Cleaning to the last detail</h3>
                                <div class="banner-btn" >
                                    <a href="/about" class="btn">Discover MORE</a>
                                    <a href="/services" class="btn btn-two">Our services</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero
