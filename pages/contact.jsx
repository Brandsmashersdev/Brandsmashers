import Modal from "react-modal";
import HeaderHorizontal from "../components/header/HeaderHorizontal";
import Link from "next/link";
import NewAddress from "../components/design-updation/Address";
import NewContact from "../components/design-updation/Contact";
import Map from "../components/design-updation/Map";
import Footer from "../components/footer/Footer";
Modal.setAppElement("#__next");

const Contact = () => {
  return (
    <div>
      <div className="redesign_contact" id="contact" style={{ padding: "0" }}>
        <HeaderHorizontal />
        <div className="">
          <div className="edina_tm_title contactheader background">
            <div className="subtitle" style={{ color: "#c9b6ff" }}>Contact</div>
            <div className="description">
              <p style={{ color: "white" }}>
                Get in touch with our expert team today to discuss your software needs and take the first step towards digital transformation.
              </p>

            </div>
          </div>

            <div className="contact-section">
            <div className="Calendly-container">
              <h4>Let's collaborate</h4>
              <p style={{ padding: "40px 20px" }}> Networking is key, so let's touch base regularly to ensure we're synchronized and working towards our common goals. Whether we meet up in person or virtually, let's unite our efforts and make a significant impact together.</p>
              <Link href="https://calendly.com/brandsmashersdev/book-your-meeting" target="/blank" className="mainbtn">
                Book your meeting
              </Link>
            </div>
          <div className="extra_info">
            <NewAddress />
            {/* <Address /> */}
          </div>

          <div className="mainpart">
            <div
              className="left"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="300"
            >
              <div className="title">
                <p>
                  We are always open to discussing product
                  <br />
                  <span> design work or partnerships.</span>
                </p>
              </div>

              <div className="fields">
                <NewContact />
              </div>
            </div>
            <div
              className="right"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="400"
            >
              <Map />
            </div>
          </div>

          </div>

        </div>
      </div>

      <div className="footer-container">
        <Footer />
      </div>
    </div>
  )

};

export default Contact;