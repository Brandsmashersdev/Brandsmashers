import Modal from "react-modal";
import HeaderHorizontal from "../components/header/HeaderHorizontal";
import NewServices from "../components/design-updation/Service";
import Footer from "../components/footer/Footer";


Modal.setAppElement("#__next");

const Service = () =>{
 
    return(
      <>
        <div  id="service">
            <HeaderHorizontal />
        <div className="redesign_service">
          <div className="edina_tm_title contactheader background_service">
            <h3>What We Do</h3>
            <div className="description_services service_head_description" >
              <p>
                We specialize in crafting innovative software solutions tailored to your business needs. From custom development to cloud solutions, let us drive your digital transformation.
              </p>
            <div >
            </div>
            </div>
          </div>
              <NewServices/>
      </div>
      
          <div className="footer-container" >
          <Footer />
        </div> 
      </div>
      </>
    )
}

export default Service;