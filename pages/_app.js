import Seo from "../components/Seo";
import ScrollToTop from "../components/ScrollToTop";
import { ToastContainer } from "react-toastify";
import Aos from "aos";
import "aos/dist/aos.css";
import "../styles/index.scss";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import useScreenSize from "../data/useScreenSize";


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    document.body.style.cursor = 'default';
  }, []);
  useEffect(() => {
    Aos.init({
      duration: 1200,
      once: true,
    });
  }, []);
const size = useScreenSize();
const val  = size.width<=800;
  return (
    <div className="page-wrapper" >
      <Seo
        font={
          "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap"
        }
      />
      
      <Component {...pageProps} />

      <ToastContainer />

      {/* <!-- Scroll To Top --> */}
      <ScrollToTop />
      
    </div>
  );
}

export default MyApp;
