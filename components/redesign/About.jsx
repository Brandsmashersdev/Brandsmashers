import Skills from "./Skills";
import Modal from "react-modal";
import Image from "next/image";

Modal.setAppElement("#__next");

const About = () => {
  return (
    //    ABOUT
    <div className="redesign_about" id="about">
      <div className="side-blob">
        <svg width="129" height="190" viewBox="0 0 129 190" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="4.5" cy="153.5" r="7.5" fill="#EF5537" fill-opacity="0.6"/>
          <ellipse cx="34" cy="182.5" rx="7" ry="7.5" fill="#EF5537" fill-opacity="0.6"/>
          <ellipse cx="4.5" cy="95" rx="7.5" ry="7" fill="#EF5537" fill-opacity="0.6"/>
          <ellipse cx="34" cy="124.5" rx="7" ry="7.5" fill="#EF5537" fill-opacity="0.6"/>
          <circle cx="63.5" cy="153.5" r="7.5" fill="#EF5537" fill-opacity="0.6"/>
          <circle cx="4.5" cy="36.5" r="7.5" fill="#EF5537" fill-opacity="0.6"/>
          <ellipse cx="34" cy="65.5" rx="7" ry="7.5" fill="#EF5537" fill-opacity="0.6"/>
          <ellipse cx="63.5" cy="95" rx="7.5" ry="7" fill="#EF5537" fill-opacity="0.6"/>
          <circle cx="92.5" cy="124.5" r="7.5" fill="#EF5537" fill-opacity="0.6"/>
          <ellipse cx="34" cy="7.5" rx="7" ry="7.5" fill="#EF5537" fill-opacity="0.6"/>
          <circle cx="63.5" cy="36.5" r="7.5" fill="#EF5537" fill-opacity="0.6"/>
          <circle cx="92.5" cy="65.5" r="7.5" fill="#EF5537" fill-opacity="0.6"/>
          <ellipse cx="121.5" cy="95" rx="7.5" ry="7" fill="#EF5537" fill-opacity="0.6"/>
        </svg>

      </div>
      <div className="about_title">
        <h3>About Us</h3>
      </div>
      <div className="container">
        <div className="content">
          <div
            className="leftpart"
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            <div className="image">
              <Image
                width={400}
                height={400}
                src="\img\redesign\about\Vector.svg"
                alt="thumb"
              />

              <div className="blob">
                <svg width="253" height="269" viewBox="0 0 253 269" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M249.516 82.9393C261.468 127.51 230.841 177.808 181.788 216.901C132.735 255.994 65.0071 283.633 29.8981 259.729C-5.2109 235.825 -7.7009 160.378 14.2111 101.863C36.3721 43.5973 82.6861 2.26328 132.984 1.01828C183.282 -0.475715 237.564 38.3683 249.516 82.9393Z" fill="#FF0066" fill-opacity="0.22"/>
                </svg>
              </div>

              <div
                className="experience"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                <div className="info">
                  <h3>6+ Years</h3>
                  <span>Of Experience</span>
                </div>
              </div>

            </div>

          </div>
          {/* End leftpart */}

          <div className="rightpart">
            <div className="my_skills">
              <h3 className="title">We provide best solution in town</h3>
              <p className="desc">
                Explore the diverse array of technologies we&apos;re passionately engaged with, shaping the future landscape of digital innovation.
              </p>
              <div className="wrapper">
                <div className="dodo_progress">
                  <Skills />
                </div>
              </div>
            </div>
          </div>
          {/* End righttpart */}
        </div>
      </div>

    </div>
    // /ABOUT
  );
};

export default About;
