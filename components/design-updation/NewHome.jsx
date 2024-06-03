import React from "react";
import Image from "next/image";
import HeaderHorizontal from "../header/HeaderHorizontal";


const heroContent = {
  name: "Brandsmashers",
  description: `Our company is a leading provider of front-end React development services based in the USA, with a team of highly skilled professionals`,
};

const Hero1 = () => {
  return (
   
    //    HERO

    <div className="redesign_hero" id="home">
      <div className="content">
        <div className="extra">
          <p className="slogan" style={{color: "white"}}>Unlocking innovation : Tailored Tech Solution</p>
          <h5
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="100"
            className="hello"
          >
            Your Software <br/> <span className="highlight-text">Solution</span> Partner
          </h5>
          <p
            className="text"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="300"
            style={{color: "white"}}
          >
            {heroContent.description}
          </p>

          <div
            className="social"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="400"
          >
            {/* <Social /> */}
          </div>
          <div
            className="edina_tm_button"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="500"
          >
            <a href="/img/brochure.pdf" download className="color brochure">
              Download Brochure
            </a>
          </div>
        </div>
      </div>
    </div>
    // /HERO
  );
};

export default Hero1;