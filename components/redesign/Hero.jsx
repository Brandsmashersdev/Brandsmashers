import React from "react";
import Social from "../Social";
import ReactTyped from "react-typed";
import Image from "next/image";
import shapeImage from "../../public/img/hero/1.jpg";
import heroImage from "../../public/img/logo/logo.png";
import graphic from "../../public/img/redesign/hero_graphic.svg";


const heroContent = {
  shapeImage: shapeImage,
  heroImage: heroImage,
  name: "Brandsmashers",
  description: `Our company is a leading provider of front-end React development services based in the USA, with a team of highly skilled professionals`,
};

const Hero1 = () => {
  return (
   
    //    HERO
    <div className="redesign_hero" id="home">
      <div className="content">

        <div className="extra">
          <p className="slogan">Unlocking innovation : Tailored Tech Solution</p>
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
            <a href="/img/brochure.pdf" download className="color">
              Download Brochure
            </a>
          </div>
        </div>
      </div>

      <div className="graphic_container">
        <div className="shape"></div>
        <Image height={600} src={graphic} />
      </div>
    </div>
    // /HERO
  );
};

export default Hero1;
