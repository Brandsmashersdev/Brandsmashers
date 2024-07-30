import React from "react";
import Hero from "../../hero/Hero"
import HeaderHorizontal from "../../header/HeaderHorizontal";
import About from "../../design-updation/About";
import TechAdvantage from "../tech-advantage";
import Industries from "../../design-updation/industries";
import NewProject from "../../design-updation/NewProject";
import NewProjectMobile from "../../design-updation/NewProjectMobile";
import Testimonial from "../../pages/testimonials";
import Footer from "../../footer/Footer";
import Footer1 from "../../pages/Footer1";


const Home = () => {
  return (
    <>
    <div>
    <HeaderHorizontal />
      <Hero />
      <div className="techAdvantageContainer">
        <h2 className="techAdvantageheading">Our Tech Advantage</h2>
            <p className="techAdvantangedesccription">
            Our expertise spans cutting-edge technologies across various industries, ensuring innovative solutions tailored to your specific needs. We transform challenges into opportunities for growth and efficiency.
            </p>
          </div>
          <TechAdvantage />{/* <Industries /> */}
      
      

      <div className="redesign_project" id="portfolio">
        <div className="container">
          <div className="">
            <h3 style={{color:"#7645ff", textAlign: "center"}}>Explore our Projects</h3>
            <p style={{textAlign: "center", margin: "auto"}}>
              Explore our diverse projects of software solutions, showcasing our expertise in custom development, cloud services, and digital transformation. Discover how we&apos;ve empowered businesses to thrive in the digital age.
            </p>
          </div>
          <div className="desktop-project-view">
            <NewProject />
          </div>
          <div className="mobile-project-view">
            <NewProjectMobile />
          </div>
        </div>
      </div>

      <div className="testimonialsContainer" id="testimonial">
       {/* <Testimonial /> */}
              <Testimonial /> 
     
      </div>

      <div className="footer-container">
        {/* <Footer /> */}
        <Footer1 />
      </div>
      </div>
    </>
  );
};
export default Home;