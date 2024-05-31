import React, { useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useState } from "react";
import HeaderHorizontal from "../../header/HeaderHorizontal";
import Hero from "../../hero/Hero";
import About from "../../redesign/About";
import Portfolio from "../../portfolio/Portfolio";
import HeaderMobile from "../../header/HeaderMobile";
import NewHome from "../../design-updation/NewHome";
import Industries from "../../design-updation/industries";
import NewProject from "../../design-updation/NewProject";
import NewProjectMobile from "../../design-updation/NewProjectMobile";
import Hero1 from "../../redesign/Hero";
import Service from "../../redesign/Service";
import Project from "../../redesign/Project";
import Testimonial from "../../redesign/Testimonial";
import Address from "../../redesign/Address";
import Contact from "../../redesign/Contact";
import Map from "../../redesign/Map";
import Blog from "../../blog/Blog";
import Footer from "../../footer/Footer";

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

      {/* <HeaderHorizontal /> */}
      {/* End Header */}

      {/* <Hero /> */}
      {/* <Hero1 /> */}
      <NewHome />
      {/* End Hero */}

      {/* <About /> */}
      {/* End Hero */}

      {/* <div className="redesign_service" id="service">
        <div className="container">
          <div className="section_title">
            <h3>What <span className="highlight-text">We</span> Do</h3>
            <p>
              We specialize in crafting innovative software solutions tailored to your business needs. From custom development to cloud solutions, let us drive your digital transformation.
            </p>
          </div>
   
          <Service />
        </div>
      </div> */}
      {/* End Services */}

      <div className="industries-section">
      <div className="industry-head">
            <h3 style={{color:"#7645ff", textAlign: "center"}}>Our Tech Advantage</h3>
            <p style={{textAlign: "center", margin: "auto"}}>
            Our expertise spans cutting-edge technologies across various industries, ensuring innovative solutions tailored to your specific needs. We transform challenges into opportunities for growth and efficiency.
            </p>
          </div>
        <Industries />
      </div>

      <div className="redesign_project" id="portfolio">
        <div className="container">
          <div className="">
            <h3 style={{color:"#7645ff", textAlign: "center"}}>Explore our Projects</h3>
            <p style={{textAlign: "center", margin: "auto"}}>
              Explore our diverse projects of software solutions, showcasing our expertise in custom development, cloud services, and digital transformation. Discover how we&apos;ve empowered businesses to thrive in the digital age.
            </p>
          </div>
          {/* End edian_tm_title */}
          {/* <Portfolio /> */}
          {/* <Project /> */}
          <div className="desktop-project-view">
            <NewProject />
          </div>
          <div className="mobile-project-view">
            <NewProjectMobile />
          </div>
        </div>
      </div> 
      {/* End Portfolio */}

      {/* <div className="redesign_blog" id="blog">
        <div className="container">
          <div className="section_title">
            <h3><span class="highlight-text">Insights</span> & Inspiration</h3>
            <p>
              We prioritize simplicity, reliability, and user-centric design to ensure that our solutions not only solve problems but also enhance the overall user experience.
            </p>
          </div>
          End edian_tm_title
          <Blog />
        </div>
      </div> */}
      {/* End Blog */}

      {/* <div className="redesign_testimonials" id="testimonial">
        <div className="container">
          <div className="edina_tm_title">
            <h3 style={{color:"#7645ff", textAlign: "center", fontSize: "30px"}}>Testimonials</h3>
            <p style={{textAlign: "center", margin: "auto"}}>
              Explore testimonials that highlight our dedication to exceeding client expectations and delivering exceptional results.
            </p>
          </div>
          End edian_tm_title
          <div className="list ">
            <ul>
              <Testimonial />
              <Testimonial />
            </ul>
          </div>
        </div>
      </div> */}
      {/* End Testimonial */}

      <div className="redesign_contact" id="contact" style={{padding:"0"}}>
        <div className="">
          <div className="edina_tm_title contactheader background">
        <HeaderHorizontal />
            <h3 style={{color:"#c9b6ff"}}>Contact</h3>
            <div className="description">
            <p style={{color:"white"}}>
              Get in touch with our expert team today to discuss <br/> your software needs and take the first step towards <br/>digital transformation.
            </p>

            </div>
            {/* <div >
              <Calendly/>
            </div> */}
            <div className="Calendly-container"> 
            <h4>Let's collaborate</h4>
            <p style={{padding:"40px 20px"}}> Networking is key, so let's touch base regularly to ensure we're synchronized and working towards our common goals. Whether we meet up in person or virtually, let's unite our efforts and make a significant impact together.</p>
            <Link href="https://calendly.com/brandsmashersdev/book-your-meeting" target="/blank" className="mainbtn"> 
              Book your meeting
            </Link>

            </div>
          </div>
          <div className="extra_info">
            <NewAddress />
            {/* <Address /> */}
          </div>
          End Address Info
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
              End title
              <div className="fields">
                <Contact />
              </div>
              End Contact Form
            </div>
            <div
              className="right"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="400"
            >
              <Map />
            </div>
            End Map
          </div>
        </div>
      </div>

      <div className="footer-container">
        <Footer />
      </div>
      {/* END FOOTER */}
    </div>
  );
};

export default HomeRedesign;
