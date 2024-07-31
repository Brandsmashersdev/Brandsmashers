// components/pages/tech-advantage/index.jsx
import React from "react";
import Image from "next/image";
import techAdvantageData from "../../../data/techadvantage";

const TechAdvantage = () => {
    return (
        <div className="tech-advantage-container">
        {techAdvantageData.map((item, index) => (
            <div key={index} className="tech-advantage-item">
                <Image
                    src={item.img}
                    height={100}
                    width={100}
                    className="industryImg"
                    alt={item.industryName}
                />
                <p className="tech-advantage-title">{item.techName}</p>
                <p className="tech-advantage-description">{item.description}</p>
            </div>
        ))}
    </div>
    );
};

export default TechAdvantage;
