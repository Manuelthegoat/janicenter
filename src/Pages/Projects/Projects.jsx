import React from "react";
import { Link } from "react-router-dom";
import { projectdata } from "../../Components/Project/projectdata";
const Projects = () => {
  return (
    <div>
      <section
        class="breadcrumb-area breadcrumb-bg"
        data-background="assets/img/bg/breadcrumbbg.jpg"
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="breadcrumb-content">
                <h2 class="title">Services Page</h2>
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <a href="index.html">Home</a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      Services
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="inner-project-area-two pt-130 pb-130">
        <div className="container">
            <div className="project-item-wrap">
            <div class="row justify-content-center">
                        <div class="col-lg-6 col-md-10">
                            <div class="section-title-three text-center">
                                {/* <span class="sub-title">Our Services</span> */}
                                <h2 class="title">Click To See More</h2>
                            </div>
                        </div>
                    </div>
                <div className="row justify-content-center">
                    {projectdata.slice(0,4).map((item)=>(
                        <div className="col-lg-3 col-md-6 col-sm-10">
                            <div className="project-item inner-project-item">
                                <div className="project-thumb">
                                    <Link to={item.link}><img src={item.img} alt="" /></Link>
                                </div>
                                <div className="project-content">
                                    <h2 className="title"><Link to={item.link}>{item.title}</Link></h2>
                                    <span>{item.ex}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
