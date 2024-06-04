import { useRouter } from "next/router";
import React from "react";
import projectsShowcase from "../../../data/projects-showcase.js";
import Image from "next/image";
import HeaderHorizontal from "../../header/InsideHeader.jsx";
import Footer from "../../footer/Footer.jsx";
// import bannerImg from '@/public/img/projects-showcase/close-to-buy/Banner.png'
const IntroAndParagraph = ({ title, paraDes }) => {
    return (
        <div className="introParaWrapper">
            <h1 className="paraTitle">{title}</h1>
            <h2 className="paraDescription">{paraDes}</h2>
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

const ProjectShowcase = () => {
    const { projectName } = useRouter().query;
    const data = projectName && projectsShowcase[projectName];
    return (
        <div>
            <HeaderHorizontal />
            <div className="container max-w-screen-lg introSectionWrapper">
                <h1 className="topTitleText">Projects.</h1>
                <div className="introSection">
                    <h1 className="projectTitle">
                        {
                            data?.projectTitle
                        }
                    </h1>
                    <div className="dateAndType">
                        <li>
                        {
                            data?.projectDate
                        }
                        </li>
                        <li>
                            {
                                data?.projectType
                            }
                        </li>
                    </div>
                    <div className="imageBox">
                        <img
                            src={ data?.projectThumbnail }
                            alt=""
                        />
                    </div>
                    <div className="timelinesWrapper">
                        {
                            data?.projectTimeline?.map((elem, index) => (
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
                        {data?.projectParaSections?.map((elem, index) => (
                            <IntroAndParagraph
                                key={index}
                                title={elem.title}
                                paraDes={elem.description}
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
                    <div className="paraAndPointsWrapper">
                        <h1 className="superTitle">Goals</h1>
                        <ParaAndPoints
                            des={
                                data?.projectGoals?.description
                            }
                            pointsArr={data?.projectGoals?.points}
                        />
                        <h1 className="superTitle">Process</h1>
                        <IntroAndParagraph
                            title={data?.projectResearch?.title}
                            paraDes={data?.projectResearch?.description}
                        />
                        {data?.projectDetailedSections?.map((elem, index) => (
                            <ParaAndPoints
                                key={index}
                                img={elem.images}
                                title={elem.title}
                                des={elem.description}
                                pointsHeading={elem.pointsHeading}
                                pointsArr={elem.points}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className="footer-container">
        <Footer />
      </div> 
        </div>
    );
};

export default ProjectShowcase;
