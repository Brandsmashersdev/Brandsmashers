import Seo from "../components/Seo";
import ScrollToTop from "../components/ScrollToTop";
import { ToastContainer } from "react-toastify";
import Aos from "aos";
import "aos/dist/aos.css";
import "../styles/index.scss";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import useScreenSize from "../data/useScreenSize";


const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

function MyApp({ Component, pageProps }) {
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
      
      <div className={`${val ? "small" : "large"}`}>
        {val ?
        (
          <AnimatedCursor
        innerSize={0}
        outerSize={0}
        color="153,153,255"
        outerAlpha={0.3}
        innerScale={0.7}
        outerScale={1.4}
      /> 
        ):(
           <AnimatedCursor
        innerSize={8}
        outerSize={44}
        color="153,153,255"
        outerAlpha={0.3}
        innerScale={0.7}
        outerScale={1.4}
      /> 
        )

        }

      </div>
      <Component {...pageProps} />

      <ToastContainer />

      {/* <!-- Scroll To Top --> */}
      <ScrollToTop />
      
    </div>
  );
}

export default MyApp;
