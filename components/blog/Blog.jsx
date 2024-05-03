import React, { useState } from "react";
import Modal from "react-modal";
import Slider from "react-slick";
import blogsData from "../../data/blogs";
import Social from "../Social";
import Image from "next/image";

import blogShowcaseData from "../../data/blogs-showcase"
import Link from "next/link";


Modal.setAppElement("#__next");

const Blog = () => {
  var settings = {
    dots: false,
    arrow: true,
    infinite: true,
    speed: 800,
    slidesToShow: 2,
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
          speed: 300,
          draggable: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <>
      <div className="news_inner my_carousel" id="modal">
        <ul>
          <Slider {...settings}>
            {blogsData.map((item) => (
              <Link href={`/blogs/${item.routeName}`} target="_blank">
              <li
                data-aos="fade-right"
                data-aos-duration="1200"
                data-aos-delay="150"
                key={item.id}
              >
                <div className="list_inner">
                  <div className="image" style={{height: "357px", width: "100%"}}>
                    <div
                      className="main"
                      style={{
                        backgroundImage: `url(${item.img})`,
                      }}
                    ></div>
                  </div>
                  {/* End image */}

                  <div className="news_details">
                    <h4 className="title">
                      {item.title}
                    </h4>
                    <span>
                      {item.date}
                    </span>
                  </div>
                  {/* End details */}
                </div>
                {/* End list inner */}
              </li>
              </Link>
            ))}
          </Slider>
        </ul>
      </div>
    </>
  );
};

export default Blog;
