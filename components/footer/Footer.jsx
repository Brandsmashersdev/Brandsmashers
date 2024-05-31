import React from "react";
import Link from "next/link";
import Image from "next/image";
import ScrollspyNav from "react-scrollspy-nav";
import logo from "../../public/img/logo/fullLogo.png";
import sidebarContent from "../../data/sidebar";
import footerSeviceContent from "../../data/services-footer";
import socialMediaLink from "../../data/socialMediaLinks";

const Footer = () => {

  const handleClick = () => setClick(!click);  
  return (
    <>
      <div className="inner">
        <div className="footer">
          <div className="upper-footer">
          <div className="footer-about">

            <div className="logo">
              <Link href="/NewHome/Home">
                BRANDSMASHERS
              </Link>  
            <p>BrandSmashers is your one-stop destination for cutting-edge IT solutions. Specializing in web development, app development, desktop apps, graphic design, cloud services, and cybersecurity, we empower businesses to thrive in the digital landscape. With expertise, innovation, and a customer-centric approach, we deliver bespoke solutions that elevate brands and drive success. Trust BrandSmashers to revolutionize your digital presence and stay ahead of the curve.</p>
            </div>

            <div className="location">
              <p>Brandsmashers@gmail.com</p>
              <p>Ashoka Garden, Bhopal,</p>
              <p>MP, India</p>
            </div>
          </div>

          <div className="footer_nav">

            <div className="quick-links">
            <ScrollspyNav
              scrollTargetIds={[
                "about",
                "services",
                "projects",
                "blogs",
                "contact",
              ]}
              activeNavClass="active"
              offset={-80}
              scrollDuration="100"
            >
              <h5 style={{marginBottom: "20px"}}>Quick Links</h5>
              <ul className="anchor_nav">
                {sidebarContent
                  .filter(val => ["About", "Services", "Projects", "Blogs", "Contact"].includes(val.itemName))
                  .map((val, i) => (
                    <li key={i}>
                      <div className="list_inner footer-nav">
                        <a
                          href={val.itemRoute}
                          className={val.activeClass}
                          onClick={handleClick}
                          style={{ color: "white" }}
                          >
                          {val.itemName}
                        </a>
                      </div>
                    </li>
                  ))}
              </ul>
            </ScrollspyNav>
          </div>
          </div>
          
          <div className="footer-services">
            <div>
            {footerSeviceContent.map((item, index) => (
              <div key={index}>
                    <h5>{item.title}</h5>
                    <ul>
                        {item.domainList.map((domain, i) => (
                            <li key={i}>{domain}</li>
                        ))}
                    </ul>
                </div>
                ))}
            </div>
          </div>

        </div>
        <hr />
      <div className="bottom-footer">
      <div>
        <ul>
            {socialMediaLink.map((item, index) => (
                    <li key={index} className="social-media">
                      <Link href={item.link}>
                      <Image 
                          src={item.icon} 
                          alt={item.handle} 
                          width={50} 
                          height={50} 
                          className="social-icons"
                          />
                      </Link>
                    </li>
                ))}
                </ul>
            </div>

            <div>
            <div className="copy">
          <span>
            &copy; {new Date().getFullYear()} by{" "}
            Brandsmashers All rights reserved.
          </span>
        </div>

            </div>
                </div>
        </div>
      </div>
    </>
  );
};

export default Footer;


