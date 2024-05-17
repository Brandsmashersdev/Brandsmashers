import React from "react";
import blogsShowcase from "../../../data/blogs-showcase";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { MdOutlineChat } from "react-icons/md";

const BlogShowcase = ({ blogName }) => {
  const data = blogName && blogsShowcase[blogName];

  return (
    <div className="blog-container">
      <div className="container max-w-screen-lg introSectionWrapper">
        <br></br><br></br>
        <div className="introSection">
          <h1 className="title">
            { data?.title }
          </h1>

          <div className="blogDetails">
            <div className="flexContainer">
              <div id="authorImg"></div>
              <p>{data?.author}</p>
            </div>
            <div className="flexContainer">
              <FaRegCalendarAlt className="blogDetailsIcon" />
              <p>{data?.date}</p>
            </div>
            <div className="flexContainer">
              <MdOutlineChat className="blogDetailsIcon" />
              <p>{data?.views}</p>
              <MdOutlineRemoveRedEye className="blogDetailsIcon" />
              <p>{data?.commentCount}</p>
            </div>
          </div>

          <div id="separator"></div>

          <p>{data?.description}</p>

          <div className="imageBox">
            <img
              src={data && data.thumbnail ? data.thumbnail : "/img/projects-showcase/close-to-buy/Banner.png"}
              alt=""
            />
          </div>
          <div className="timelinesWrapper">
            {
              data?.timeline?.map((elem, index) => (
                <div key={index} className="timelines">
                  <p className="timelineTitle">{elem?.title}</p>
                  <p className="timelineValue">{elem?.value}</p>
                </div>
              ))
            }
          </div>
        </div>
        <div className="bodySection container max-w-screen-md">
          <div className="paraSectionWrapper">
            {data?.headSections?.map((elem, index) => (
              // <div key={index} className="introParaWrapper">
              //   <h1 className="paraTitle">{elem.title}</h1>
              //   <h2 className="paraDescription">{elem.description}</h2>
              // </div>
              <Head
                key = {index}
                title1={elem.title}
                des1={elem.description}
                images1={elem.images}
              />
            ))}
          </div>
          <div className="featureSectionWrapper">
            {data?.projectFeatures?.map((elem, index) => (
              <Feature
                key={index}
                title={elem.title}
                des={elem.description}
                images={elem.images}
              />
            ))}
          </div>
          {data?.listSections?.map((elem, index) => (
            <ParaAndPoints
              key={index}
              img={elem.images}
              title={elem.title}
              des={elem.description}
              pointsHeading={elem.pointsHeading}
              pointsArr={elem.points}
            />
          ))}
          {data?.listSections?.map((elem, index) => (
            <ParaAndPointsForCookies
              key={index}
              pointsHeading={elem.pointsHeading}
              img={elem.images}
              pointsArr={elem.points}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Feature = ({ title, des, images }) => {
  return (
    <div className="featureWrapper">
      {title && <h1 className="featureTitle">{title}</h1>}
      <h2 className="featureDescription">{des}</h2>
      <div className="imagesWrapper">
        {images &&
          images.map((elem, index) => (
            <div key={index} className="featureImageBox">
              <img className="featureImage" src={elem} alt="" />
            </div>
          ))}
      </div>
    </div>
  );
};
const Head = ({ title1, des1, images1 }) => {
  return (
    <div className="featureWrapper">
      {title1 && <h1 className="featureTitle">{title1}</h1>}
      <h2 className="featureDescription">{des1}</h2>
      <div className="imagesWrapper">
        {images1 &&
          images1.map((elem, index) => (
            <div key={index} className="featureImageBox">
              <img className="featureImage" src={elem} alt="" />
            </div>
          ))}
      </div>
    </div>
  );
};

const ParaAndPoints = ({ title, des, img, pointsHeading, pointsArr }) => {
  return (
    <div className="paraAndPoints">
      <Feature title={title} des={des} images={img} />
      <h1 className="pointsTitle">{pointsHeading}</h1>
      {pointsArr && (
        <ul>
          {pointsArr.map((elem, index) => (
            <li key={index}>{elem}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

const ParaAndPointsForCookies = ({ img, pointsHeading, pointsArr }) => {
  return (
    <div className="paraAndPoints">
      <h1 className="pointsTitle">{pointsHeading}</h1>
      <Feature images={img} />
      {pointsArr && (
        <ul>
          {pointsArr.map((elem, index) => (
            <li key={index}>{elem}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BlogShowcase;
