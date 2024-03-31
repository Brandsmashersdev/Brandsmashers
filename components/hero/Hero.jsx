import React from "react";
import Social from "../Social";
import ReactTyped from "react-typed";
import Image from "next/image";
import shapeImage from "../../public/img/hero/1.jpg";
import heroImage from "../../public/img/logo/logo.png";


const heroContent = {
  shapeImage: shapeImage,
  heroImage: heroImage,
  name: "Brandsmashers",
  description: `Our company is a leading provider of front-end React development services based in the USA, with a team of highly skilled professionals`,
};

const Hero = () => {
  return (
   
    //    HERO
    <div className="edina_tm_hero" id="home">
     
      <div className="content">
        {/* <div className="img-shape" data-aos="fade-up" data-aos-duration="1200">
          <Image src={heroContent.heroImage} alt="brand" />
        </div> */}

        {/* <div className="Icon1">
          <Image src={require("../../public/Icon1.png")}/>
        </div>

        <div className="Icon2">
          <Image src={require("../../public/Icon2.png")}/>
        </div> */}


        <div className="extra">
          <h5
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="100"
            className="hello"
          >
            Your Software <span className="solution-text">Solution</span> Partner
          </h5>
          <h1
            className="name"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            <span className="typer-toper">
              <ReactTyped
                loop
                typeSpeed={150}
                backSpeed={60}
                strings={["Software Development", "Mobile App Development", "Web Development"]}
                smartBackspace
                shuffle={false}
                backDelay={1}
                fadeOut={false}
                fadeOutDelay={100}
                loopCount={0}
                showCursor
                cursorChar="|"
              />
            </span>
          </h1>
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
            <a href="/img/sample.pdf" download className="color">
              Download Brochure
            </a>
          </div>
        </div>
      </div>
    </div>
    // /HERO
  );
};

export default Hero;
