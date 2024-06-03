import Modal from "react-modal";
import HeaderHorizontal from "../components/header/HeaderHorizontal";
import NewServices from "../components/design-updation/Service";
import Footer from "../components/footer/Footer";
import { useState, useEffect } from "react";
import ServiceData from "../data/services";

Modal.setAppElement("#__next");

const Service = () =>{
 
    return(
      <>
        <div  id="service" style={{position:"relative"}}>
            <HeaderHorizontal />
        <div className="redesign_service" style={{padding:"0"}}>
        <div className="" >
          <div className="edina_tm_title contactheader background">
            <h3 style={{color:"#c9b6ff"}}>What We Do</h3>
            <div className="description_services">
              <p style={{color:"white"}}>
                We specialize in crafting innovative software solutions tailored to your business needs. From custom <br /> development to cloud solutions, let us drive your <br /> digital transformation.
              </p>
            <div >
            </div>
            </div>
          </div>
          <div>
              <NewServices/>
          </div>
        </div>
      </div>
      
          <div className="footer-container" >
          <Footer />
        </div> 
      </div>
      </>
    )
}

export default Service;