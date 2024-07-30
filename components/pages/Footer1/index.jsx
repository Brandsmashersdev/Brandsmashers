import React from "react";
import Link from "next/link";
import Image from "next/image";
import sidebarContent from "../../../data/sidebar";
import footerSeviceContent from "../../../data/services-footer";
import socialMediaLink from "../../../data/socialMediaLinks";

const Footer = () => {
  const handleClick = () => setClick(!click);

  return (
    <>
      <div className="moving-services">
        <div className="services-content">
          {footerSeviceContent.flatMap(item =>
            item.domainList.map((domain, index) => (
              <span key={index} className="service-item">#{domain}</span>
            ))
          )}
          {footerSeviceContent.flatMap(item =>
            item.domainList.map((domain, index) => (
              <span key={index + item.domainList.length} className="service-item">#{domain}</span>
            ))
          )}
        </div>
      </div>
      <div className="inner">
        <div className="footer">
          <div className="upper-footer">
            <div className="footer-about">
              <div className="logo">
                <Link href="/NewHome/Home">
                  BRANDSMASHERS
                </Link>  
                <p>BrandSmashers is your one-stop destination for cutting-edge IT solutions. Specializing in web development, app development, desktop apps, graphic design, cloud services, and cybersecurity, we empower businesses to thrive in the digital landscape. With expertise, innovation, and a customer-centric approach, we deliver bespoke solutions that elevate brands and drive success. Trust BrandSmashers to revolutionize your digital presence and stay ahead of the curve.</p>
              </div>

              {/* <div className="location">
                <p>admin@brandsmashers.com</p>
                <p>Ashoka Garden, Bhopal,</p>
                <p>MP, India</p>
              </div> */}
            <div className="footer_logo">
              <ul>
                {socialMediaLink.map((item, index) => (
                  <li key={index} className="social-media">
                    <Link href={item.link} target="_blank">
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
            </div>

            <div className="footer_nav">
              <div className="quick-links">
                <h5 style={{ marginBottom: "20px" }}>Quick Links</h5>
                <ul className="footer_anchor_nav">
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

          <div className="bottom-footer" style={{ alignItems: "center" }}>

            <div className="footer_rights">
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
