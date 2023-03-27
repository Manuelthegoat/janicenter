import React from "react";
import { projectdata } from "../../Components/Project/projectdata";
const Projects = () => {
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
                <h2 class="title">Projects Masonry</h2>
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <a href="index.html">Home</a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      Projects Masonry
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
                <div className="row justify-content-center">
                    {projectdata.map((item)=>(
                        <div className="col-lg-4 col-md-6 col-sm-10">
                            <div className="project-item inner-project-item">
                                <div className="project-thumb">
                                    <a href={item.link}><img src={item.img} alt="" /></a>
                                </div>
                                <div className="project-content">
                                    <h2 className="title"><a href={item.link}>{item.title}</a></h2>
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
