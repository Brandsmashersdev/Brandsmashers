import { useState } from "react";
import Modal from "react-modal";
import HeaderHorizontal from "../components/header/HeaderHorizontal";
import Slider from "react-slick";
import teamData from "../data/team_data";
import Footer from "../components/footer/Footer";
import useScreenSize from "../data/useScreenSize";
import Link from "next/link";


Modal.setAppElement("#__next");

const About = () => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleModalOne() {
    setIsOpen(!isOpen);
  }

  const screenSize = useScreenSize();
  const size = screenSize.width>=320 && screenSize.width<=1050 ;
  const slidesView = size?1:3;
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesView,
    slidesToScroll: 1, 
    autoplay: true,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          arrow: false,
          slidesToShow: 1,
          speed: 300,
        },
      },
    ],
  };

  

  return (
    //    ABOUT
    <div id="about">
          <HeaderHorizontal />
        <div id="about1">
            <div className="subtitle">About us</div>
            <div className="description1">
                <p>
                Explore the diverse array of technologies we&apos;re passionately engaged with, shaping the future landscape of digital innovation.
                </p>
            </div>
            <div className="button1">
                <Link className="talk_to_us" href="/contact">Talk To Us</Link>
            </div>
        </div>
        
        <div className="aboutUs">
          <div className="heading">
            <h3>Our Mission</h3>
            <p>
              Our mission is to transform businesses through technology, providing cutting-edge software solutions that enhance efficiency and drive growth. We strive to understand our clients unique challenges and develop tailored solutions that deliver measurable results.
            </p>
          </div>
          <div className="heading">
            <h3>Our Vision</h3>
            <p>We envision a future where technology seamlessly integrates into every aspect of business, enabling unprecedented levels of productivity and innovation. Our goal is to be at the forefront of this transformation, setting new standards for excellence in the software industry.</p>
          </div>
          </div>
        <div className="client_data">
            <div className="div1">
                <h3>40+</h3>
                <h5>Clients</h5>
            </div>
            <div className="div1">
                <h3>50+</h3>
                <h5>Project Delivered</h5>
            </div>
            <div className="div1">
                <h3>70%</h3>
                <h5>Repeated Customers & Referrals</h5>
            </div>
            <div className="div1">
                <h3>30+</h3>
                <h5>Strong Team</h5>
            </div> 
        </div>
        <div className="Team_name">
          <div className="div2">Our Team</div>
          <div className="div3">Meet Our Team</div>
          <div className="redesign_testimonials" id="testimonial" >
            <div className="gtco-testimonials">
              <div className="container">
                <Slider  {...settings}>
                  {teamData.map((teamData, index) => (
                    <div key={index} className="testimonial-slide" >
                      <div className="card text-center">
                        <img className="card-img-top" src={teamData.image} alt="Member_photo" />
                        <div className="card-body">
                          <h5>{teamData.name}<br /><span>{teamData.role}</span></h5>
                          <p className="card-text">{teamData.text}</p>
                        <div className="member_social_links">
                          <div className="linkedin" >
                            <a href={teamData.linkedin} target="_blank" >
                              <img src="/img/Design-updation/about/linkedin.png" alt="linkedin" className="social-icons"/>
                            </a>
                          </div>
                        </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div> 
        </div>
        <div className="footer-container">
        <Footer />
      </div>
    </div>
    // /ABOUT
  );
};

export default About;
