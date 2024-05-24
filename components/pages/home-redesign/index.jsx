import React, { useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useState } from "react";
import HeaderHorizontal from "../../header/HeaderHorizontal";
import Hero from "../../hero/Hero";
import About from "../../redesign/About";
import Portfolio from "../../portfolio/Portfolio";
import HeaderMobile from "../../header/HeaderMobile";
import Hero1 from "../../redesign/Hero";
import Service from "../../redesign/Service";
import Project from "../../redesign/Project";
import Testimonial from "../../redesign/Testimonial";
import Address from "../../redesign/Address";
import Contact from "../../redesign/Contact";
import Map from "../../redesign/Map";
import Blog from "../../blog/Blog";
import Footer from "../../footer/Footer";
import MainFooter from "../../footer/MainFooter";

const HomeRedesign = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.querySelector("body").classList.remove("rtl");
  }, []);

  const handleLabelClick = () => {
    if (isDark) {
      localStorage.setItem("theme-color", "theme-light");
      document.querySelector("body").classList.add("theme-light");
      document.querySelector("body").classList.remove("theme-dark");
      setIsDark(false);
    } else {
      localStorage.setItem("theme-color", "theme-dark");
      document.querySelector("body").classList.add("theme-dark");
      document.querySelector("body").classList.remove("theme-light");
      setIsDark(true);
    }
  };

  return (
    <div id="redesign_home" className={`home-light ${isDark ? "theme-dark" : ""}`}>
      <header className="header-area">
        <div className="header-inner">
          <HeaderMobile />
        </div>
      </header>
      {/* End mobile-header */}

      <HeaderHorizontal />
      {/* End Header */}

      {/* <Hero /> */}
      <Hero1 />
      {/* End Hero */}

      <About />
      {/* End Hero */}

      <div className="redesign_service" id="service">
        <div className="container">
          <div className="section_title">
            <h3>What <span className="highlight-text">We</span> Do</h3>
            <p>
              We specialize in crafting innovative software solutions tailored to your business needs. From custom development to cloud solutions, let us drive your digital transformation.
            </p>
          </div>
          {/* End edian_tm_title */}
          <Service />
        </div>
      </div>
      {/* End Services */}

      <div className="redesign_project" id="portfolio">
        <div className="container">
          <div className="section_title">
            <h3>Explore our <span className="highlight-text">Projects</span></h3>
            <p>
              Explore our diverse projects of software solutions, showcasing our expertise in custom development, cloud services, and digital transformation. Discover how we&apos;ve empowered businesses to thrive in the digital age.
            </p>
          </div>
          {/* End edian_tm_title */}
          {/* <Portfolio /> */}
          <Project />
        </div>
      </div>
      {/* End Portfolio */}

      <div className="redesign_blog" id="blog">
        <div className="container">
          <div className="section_title">
            <h3><span class="highlight-text">Insights</span> & Inspiration</h3>
            <p>
              We prioritize simplicity, reliability, and user-centric design to ensure that our solutions not only solve problems but also enhance the overall user experience.
            </p>
          </div>
          {/* End edian_tm_title */}
          <Blog />
        </div>
      </div>
      {/* End Blog */}

      <div className="redesign_testimonials" id="testimonial">
        <div className="container">
          <div className="edina_tm_title">
            <h3>Testimonials</h3>
            <p>
              Explore testimonials that highlight our dedication to exceeding client expectations and delivering exceptional results.
            </p>
          </div>
          {/* End edian_tm_title */}
          <div className="list ">
            <ul>
              {/* <Testimonial /> */}
              <Testimonial />
            </ul>
          </div>
        </div>
      </div>
      {/* End Testimonial */}

      <div className="redesign_contact" id="contact">
        <div className="container">
          <div className="edina_tm_title">
            <h3>Contact</h3>
            <p>
              Get in touch with our expert team today to discuss your software needs and take the first step towards digital transformation.
            </p>
          </div>
          <div className="extra_info">
            <Address />
          </div>
          {/* End Address Info */}
          <div className="mainpart">
            <div
              className="left"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="300"
            >
              <div className="title">
                <p>
                  We are always open to discussing product
                  <br />
                  <span> design work or partnerships.</span>
                </p>
              </div>
              {/* End title */}
              <div className="fields">
                <Contact />
              </div>
              {/* End Contact Form */}
            </div>
            <div
              className="right"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="400"
            >
              <Map />
            </div>
            {/* End Map */}
          </div>
        </div>
      </div>
      {/* END CONTACT */}

      <div>
        <MainFooter />
      </div>
      {/* END MAIN FOOTER */}
    </div>
  );
};

export default HomeRedesign;
