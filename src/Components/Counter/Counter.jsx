import React from 'react'

const Counter = () => {
  return (
    <div>
       <section class="counter-area-three counter-bg jarallax" data-background="assets/img/bg/counter_bg02.jpg">
                <div class="container">
                <div class="row justify-content-center">
                        <div class="col-lg-12 col-md-10 pb-25">
                            <div class="section-title-three text-center">
                                {/* <span class="sub-title">Our Services</span> */}
                                <h2 class="title text-light">Our mobile App is available on playstore and appstore, click below to download</h2>
                                <p></p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6 col-sm-6">
                            <div class="counter-item">
                                <div class="icons">
                                    {/* <svg viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M32.5 40.6251C42.5965 40.6251 50.7812 32.7434 50.7812 23.0209C50.7812 13.2984 42.5965 5.41675 32.5 5.41675C22.4035 5.41675 14.2188 13.2984 14.2188 23.0209C14.2188 32.7434 22.4035 40.6251 32.5 40.6251Z" stroke="currentcolor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M20.3666 36.6164L20.3396 56.6039C20.3396 59.0414 22.0459 60.2331 24.1584 59.231L31.4167 55.7914C32.0125 55.4935 33.0146 55.4935 33.6104 55.7914L40.8959 59.231C42.9813 60.206 44.7146 59.0414 44.7146 56.6039V36.1289" stroke="currentcolor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg> */}
                                    <img src="assets/img/appstore.png" className='wi50' alt="" />
                                </div>
                               
                            </div>
                        </div>
                        <div class="col-lg-6 col-sm-6">
                            <div class="counter-item">
                                <div class="icons">
                                <img src="assets/img/playstore.png" className='wi50' alt="" />

                                </div>
                               
                            </div>
                        </div>
                       
                        
                    </div>
                </div>
            </section>
    </div>
  )
}

export default Counter
