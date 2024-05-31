import { useState } from "react";
import Modal from "react-modal";
import ReactTooltip from "react-tooltip";
import Slider from "react-slick";
import Social from "../Social";
import portfolioData from "../../data/portfolio";
import Image from "next/image";
import Link from "next/link";

Modal.setAppElement("#__next");

const Portfolio = () => {
  var settings = {
    dots: false,
    arrow: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    draggable: false,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          arrow: false,
          autoplay: false,
          draggable: true,
          speed: 300,
          dots: true,
        },
      },
    ],
  };

  const [singleData, setSingleData] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const handlePortfolioData = (id) => {
    const find = portfolioData.find((item) => item?.id === id);
    setSingleData(find);
    setIsOpen(true);
  };

  const handleModle = (id) => {
    handlePortfolioData(id);
  };

  return (
    <div className="portfolio_inner my_carousel gallery_zoom">
      <ul data-aos="fade-right" data-aos-duration="1200">
        <Slider {...settings}>
          {portfolioData.map((item) => (
            <Link target="_blank" href={`projects/${item.projectName}`} key={item.id}>
              <li>
                <div className="list_inner">
                  <div className="image">
                    <div
                      // onClick={() => handleModle(item?.id)}
                      className="details"
                    >
                      <Image
                        width={357}
                        height={357}
                        src={item.portfolioImage}
                        data-tip
                        data-for={item.tooltipId}
                        alt="portfolio"
                      />
                      <div style={{display:"flex", alignItems: "baseline",marginTop:"10px"}}>
                        <h1 style={{margin:"3px 5px 0px 0px"}}>{item.projectName}</h1>
                        <p>{item.category}</p>
                      </div>
                        <h5>Learn more</h5>
        
                      <ReactTooltip
                        id={item.tooltipId}
                        place="bottom"
                        type="light"
                        effect="float"
                        className="tooltip-wrapper"
                      >
                        <div>
                          <h5>{item.title}</h5>
                          <span>{item.meta}</span>
                        </div>
                      </ReactTooltip>
                    </div>
                  </div>
                </div>
              </li>
            </Link>
          ))}
        </Slider>
      </ul>
      {/* End ul */}
    </div>
  );
};

export default Portfolio;
