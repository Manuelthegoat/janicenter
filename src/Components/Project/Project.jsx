import React from 'react'
import { Link } from 'react-router-dom'
import { projectdata } from './projectdata'

const Project = () => {
  return (
    <div>
       <section class="project-area-three">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-12 mb-15 col-md-10">
                            <div class="section-title-three text-center">
                                {/* <span class="sub-title">Our Services</span> */}
                                <h2 class="title">Our Recommended Services</h2>
                                <p>Because Cleanliness matters the most to you, we have made available the unmatched value you are looking for </p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        {projectdata.slice(0,4).map((item)=>(
                        <div class="col-lg-3 col-md-6">
                            <div class="project-item-three">
                                <div class="project-thumb-three">
                                    <Link to={item.link}><img src={item.img} alt=""/></Link>
                                </div>
                                <div class="project-content-three">
                                    <h2 class="title"><Link to={item.link}>{item.title}</Link></h2>
                                    <span>{item.ex}</span>
                                </div>
                            </div>
                        </div>                   
                        ))}
                    </div>
                </div>
            </section>
    </div>
  )
}

export default Project
