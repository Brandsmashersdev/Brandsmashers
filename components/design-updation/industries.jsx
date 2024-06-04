import React,{ useState } from "react";
import Image from "next/image";
import industries from "../../data/industries";


const Industries = () => {
  return (
    <>
        <div className="industries">
          { industries.map((val, i) => (
            <div key={i} className="ind-list">
                <Image 
                src={val.img}
                height={200}
                width={200}
                className="industryImg"
                />
                <p>{val.industyName}</p>
            </div>
        ))}
        </div>
    </>
  );
};

export default Industries;
