import React,{ useState } from "react";
import Modal from "react-modal";
import ReactTooltip from "react-tooltip";
import portfolioData from "../../data/portfolio";
import Image from "next/image";
import Link from "next/link";


const Project = () => {
  return (
    <div className="portfolio_inner gallery_zoom">
      <div data-aos="fade-right" data-aos-duration="1200" className="project-container">
      
          {portfolioData.map((item) => (
            <div className="project-list-item">
              <div className="list_inner">
                <div className="image">
                  <div
                    className="details"
                  >
                    <Image
                      width={357}
                      height={357}
                      src={item.portfolioImage}
                      data-tip
                      data-for={item.tooltipId}
                      alt="portfolio"
                      className={item.classname}
                    />
                      <h1 style={{marginTop:"20px"}}>{item.projectName}</h1>
                      <p>{item.category}</p>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi impedit quos nobis nostrum amet! Excepturi repudiandae facilis quae magni tenetur fugiat numquam, id impedit corrupti consequatur saepe. Eius velit voluptatem cumque nulla.</p>
                      <Link target="_blank" href={`projects/${item.projectName}`} key={item.id} style={{marginTop:"20px"}}>
                        <h5 style={{marginTop: "20px"}}>Learn more</h5>
                      </Link>
                    <ReactTooltip
                      id={item.tooltipId}
                      place="bottom"
                      type="light"
                      effect="float"
                      className="tooltip-wrapper"
                    >
                    </ReactTooltip>
                  </div>
                </div>
              </div>
            </div>
          ))}
   
      </div>
      {/* End ul */}
    </div>
  );
};

export default Project;
