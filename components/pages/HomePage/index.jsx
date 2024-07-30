import React from "react";
import Hero from "../../hero/Hero"
import HeaderHorizontal from "../../header/HeaderHorizontal";
import About from "../../design-updation/About";
import Industries from "../../design-updation/industries";
import Project from "../project";
import NewProjectMobile from "../../design-updation/NewProjectMobile";
import Testimonial from "../testimonials";
import Footer from "../../footer/Footer";


const Home = () => {
  return (
    <>
    <div>
    <HeaderHorizontal />
      <Hero />
      <div className="industries-section">
      <div className="industry-head">
            <h3 style={{color:"#7645ff", textAlign: "center"}}>Our Tech Advantage</h3>
            <p style={{textAlign: "center", margin: "auto"}}>
            Our expertise spans cutting-edge technologies across various industries, ensuring innovative solutions tailored to your specific needs. We transform challenges into opportunities for growth and efficiency.
            </p>
          </div>
        <Industries />
      </div>

      {/* <div className="redesign_project" id="portfolio">
        <div className="container">
          <div className="">
            <h3 style={{color:"#7645ff", textAlign: "center"}}>Our Proud Projects</h3>
            <p style={{textAlign: "center", margin: "auto"}}>
              Explore our diverse projects of software solutions, showcasing our expertise in custom development, cloud services, and digital transformation. Discover how we&apos;ve empowered businesses to thrive in the digital age.
            </p>
          </div>
          <div className="desktop-project-view">
            
          </div>
          <div className="mobile-project-view">
            <NewProjectMobile />
          </div>
        </div>
      </div> */}

         <Project />

      <div className="redesign_testimonials" id="testimonial">
        <div className="container">
          <div className="edina_tm_title">
            <h3 style={{color:"#7645ff", textAlign: "center", fontSize: "30px"}}>Testimonials</h3>
            <p style={{textAlign: "center", margin: "auto"}}>
              Explore testimonials that highlight our dedication to exceeding client expectations and delivering exceptional results.
            </p>
          </div>
          {/* End edian_tm_title */}
          <div className="list ">
            
              {/* <Testimonial /> */}
              <Testimonial />
            
          </div>
        </div>
      </div>

      <div className="footer-container">
        <Footer />
      </div>
      </div>
    </>
  );
};
export default Home;