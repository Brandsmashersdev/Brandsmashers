import React from "react";
import servicesData from "../../data/services";
import Image from "next/image";
import ToggleText from "../../data/ToggleText"
import ScreenSize from "../../data/useScreenSize";


const Service = () => {
  return (
    <>
    
    <div className="redesign_service " style={{position:"relative",bottom:"180px"}}>
      <div className="service_list ">
        {servicesData.map((item, index) => {
          const serviceDescriptions = Array.isArray(item.serviceListDescriptions)
          ? item.serviceListDescriptions
          : [];
          
          const isEven = index %2 ===0;
          const screenSize = ScreenSize();
          const size = screenSize.width>=320 && screenSize.width<=1000 ;
          return (
            <div key={item.id} className={`card_item ${size ? "small" : "large"} ${isEven ? "even" : "odd"}`}>
              
                {size ? (
                  <>
                  <div className="list-inner">
                    <div className="image" style={{flexDirection:'column'}}>
                      <div className="image_wrapper">
                        <Image
                          layout="fill"
                          objectFit="contain"
                          src={item.popupImg}
                          alt={item.title}
                          className="service_image"
                          />
                      </div>
                    </div>
                    <div className="description_services">
                      <h3>{item.popupTitle}</h3>
                       
                       <ToggleText
                        text={item.firstDescriptionText}
                        limit={400}
                        fullText={item.fullDescriptionText}
                      />
                      <div className="description_list">
                        <ul>
                          {serviceDescriptions.map((desc, index) => (
                            <li key={index}>{desc}</li>
                          ))}
                          </ul>
                        </div>
                    </div>
                    </div>
                  </>
                ) : (
                  
                  <div className="list-inner-right">
                  <>
                  {isEven ?(
                    <>
                    <div className="image" style={{flexDirection:'column'}}>
                      <div className="image_wrapper">
                        <Image
                          layout="fill"
                          objectFit="contain"
                          src={item.popupImg}
                          alt={item.title}
                          className="service_image"
                          />
                      </div>
                    </div>
                    <div className="description_services">
                      <h3>{item.popupTitle}</h3>
                       
                       <ToggleText
                        text={item.firstDescriptionText}
                        limit={400}
                        fullText={item.fullDescriptionText}
                      />
                      <div className="description_list">
                        <ul>
                          {serviceDescriptions.map((desc, index) => (
                            <li key={index}>{desc}</li>
                          ))}
                          </ul>
                        </div>
                    </div>
                    </>
                  ):(
                    <>
                    
                    <div className="description_services">
                      <h3>{item.popupTitle}</h3>
                       
                       <ToggleText
                        text={item.firstDescriptionText}
                        limit={400}
                        fullText={item.fullDescriptionText}
                      />
                      <div className="description_list">
                        <ul>
                          {serviceDescriptions.map((desc, index) => (
                            <li key={index}>{desc}</li>
                          ))}
                          </ul>
                        </div>
                    </div>
                    <div className="image" style={{flexDirection:'column'}}>
                      <div className="image_wrapper">
                        <Image
                          layout="fill"
                          objectFit="contain"
                          src={item.popupImg}
                          alt={item.title}
                          className="service_image"
                          />
                      </div>
                    </div>
                    </>
                  )}
      
                  </>
                  </div> 
                )}
                 <>   
                  </>
              </div>
          );
        })}
      </div>
    </div>
  </>
  );
};

export default Service;