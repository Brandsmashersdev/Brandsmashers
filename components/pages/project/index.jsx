import React from "react";
import Slider from "react-slick";
import ReactTooltip from "react-tooltip";
import Image from "next/image";
import Link from "next/link";
import portfolioData from "../../../data/portfolio";

const Project = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="portfolio_inner gallery_zoom">
      <h2 className="section-title">Our Proud Projects</h2>
      <p className="section-description">
        Explore our diverse projects of software solutions, showcasing our expertise in custom
        development, cloud services, and digital transformation. Discover how we've empowered
        businesses to thrive in the digital age.
      </p>
      <div data-aos="fade-right" data-aos-duration="1200" className="project-container">
        <Slider {...settings}>
          {portfolioData.map((item) => (
            <div className="project-list-item" key={item.id}>
              <div className="list_inner">
                <div className="image">
                  <Image
                    width={357}
                    height={357}
                    src={item.portfolioImage}
                    data-tip
                    data-for={item.tooltipId}
                    alt="portfolio"
                    className={item.classname}
                  />
                </div>
                <div className="details">
                  <div className="title-container">
                    <h1>{item.projectName}</h1>
                    {item.projectName !== "Tasker Web Qoda" && (
                      <div className="app-icons">
                        <img src="/img/Android-icon.png" alt="Android App" />
                        <img src="/img/iOS-icon.png" alt="iOS App" />
                      </div>
                    )}
                  </div>
                  <h2>{item.category}</h2>
                  <p>{item.projectDescriptions}</p>
                  <Link target="_blank" href={`projects/${item.projectName}`} key={item.id}>
                    <button className="details-button">Get Details</button>
                  </Link>
                  <ReactTooltip
                    id={item.tooltipId}
                    place="bottom"
                    type="light"
                    effect="float"
                    className="tooltip-wrapper"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Project;
