import React, { useEffect, useState } from "react";
import Link from "next/link";
import ScrollspyNav from "react-scrollspy-nav";
import sidebarContent from "../../data/sidebar";

// sidebar footer bottom content
const sidebarFooterContent = {
  name: "Brandsmashers",
  email: "brandingaayu@gmail.com",
  emailRef: "mailto:brandingaayu@gmail.com",
};

const HeaderHorizontal = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const data = {about:"/about/about"}
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    <div className={`horizontal-menu ${navbar ? "fixed-header" : ""}`} style={{position:"absolute",zIndex:'10000',width:"100%",background: "linear-gradient(135deg, rgba(1,4,9,1) 6%, rgba(7,27,60,1) 60%, rgba(8,36,76,1) 100%)"}}>
      <div className="mob-header">
        <button className="toggler-menu" onClick={handleClick} >
          <div className={click ? "active" : ""}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
      {/* End Mobile Header */}

      <div
        className={click ? "edina_tm_sidebar  menu-open" : "edina_tm_sidebar"}
      >
        <div className="sidebar_inner" >
          {/* <div className="logo">
            <Link href="/">
              <Image
                width={180}
                height={40}
                className="logo_light custom"
                src={logo}
                alt="brand"
              />
              <Image
                width={180}
                height={55}
                className="logo_dark custom"
                src={logo2}
                alt="brand"
              />
            </Link>
          </div> */}
          <div className="main_heading">
            <p>BRANDSMASHERS</p>
          </div>
          {/* End .logo */}

          <div className="menu"  >
            
              <ul className="anchor_nav">
                {sidebarContent.map((val, i) => (
                  <li key={val.id} >
                    <div className="list_inner" >
                      <Link
                        href={val.itemRoute}
                        legacyBehavior
                        target={"_blank"}
                        key={i}
                        >
                          <a>
                        {val.itemName}
                        </a>
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
          </div>
          {/* End .menu */}

          {/* <div className="author">
            <div className="inner">
              <div className="image">
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(img/logo/logo.png)",
                  }}
                ></div>
              </div>
              <div className="short">
                <h3>{sidebarFooterContent.name}</h3>
                <a href={sidebarFooterContent.emailRef}>
                  {sidebarFooterContent.email}
                </a>
              </div>
            </div>
          </div> */}
          {/* End author */}
        </div>
      </div>
    </div>
  );
};

export default HeaderHorizontal;
