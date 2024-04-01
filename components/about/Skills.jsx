import React from "react";

const skillsContent = [
  {
    name: "MERN Stack Development",
    skillPercent: "95",
  },
  {
    name: "Backend Development",
    skillPercent: "90",
  },
  {
    name: "MEAN Stack Development",
    skillPercent: "80",
  },
  {
    name: "Desktop Applications",
    skillPercent: "80",
  },
  {
    name: "Mobile App Development",
    skillPercent: "95",
  },
  {
    name: "Cross-Platform Apps",
    skillPercent: "90",
  },
  {
    name: "Database Solutions",
    skillPercent: "95",
  },
  {
    name: "Cloud Services",
    skillPercent: "90",
  },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="progress_inner" key={i}>
          <span className="label" style={{ marginBottom: 0}}>{val.name}</span>
          {/* <div className="background">
            <div className="bar">
              <div
                className="bar_in"
                style={{ width: val.skillPercent + "%" }}
              ></div>
            </div>
          </div> */}
        </div>
      ))}
    </>
  );
};

export default Skills;
