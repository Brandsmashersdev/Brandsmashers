import React from "react";
import Link from "next/link";
import Image from "next/image";
import ScrollspyNav from "react-scrollspy-nav";
import logo from "../../public/img/logo/fullLogo.png";

const Footer = () => {

  
  return (
    <>
      <div className="inner">
        <div className="footer">
          <div className="logo">
            <Link href="/">
              <Image
                width={180}
                height={40}
                className="logo_light"
                src={logo}
                alt="brand"
              />
            </Link>  
          </div>
          {/* {LOGO END} */}

          <div className="quick-links">
          <ScrollspyNav
              scrollTargetIds={[
                "about",
                "service",
                "contact",
              ]}
              activeNavClass="active"
              offset={-80}
              scrollDuration="100"
            >

            </ScrollspyNav>
          </div>


        </div>
      </div>
    </>
  );
};

export default Footer;


