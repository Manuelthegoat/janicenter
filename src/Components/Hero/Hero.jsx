import React from 'react'

const Hero = () => {
    return (
        <div>
            <section class="banner-area-three manuel jarallax banner-bg-three" data-background="assets/img/banner/h4_banner_bg.jpg">
                <div class="container">
                    <div class="row align-items-center justify-content-center">
                        <div class="col-lg-6 col-md-10 order-0 order-lg-2">
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
                                <h2 class="title" data-aos="fade-right" data-aos-delay="0">Janicenter Africa Cleaning Services</h2>
                                <p data-aos="fade-right" data-aos-delay="300">Lorem ipsum dolor sit amet consectetur. Ut tellus suspendisse nulla aliquam. Risus rutrum tellus eget ultrices pretium nisi amet facilisis.</p>
                                <div class="banner-btn" data-aos="fade-right" data-aos-delay="600">
                                    <a href="services.html" class="btn">Discover MORE</a>
                                    <a href="services.html" class="btn btn-two">Our service</a>
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
