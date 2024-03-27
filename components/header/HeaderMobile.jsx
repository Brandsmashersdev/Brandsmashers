import Link from "next/link";
import Image from "next/image";
import logo from "../../public/img/logo/logo.png";
import logo2 from "../../public/img/logo/light.png";

const HeaderMobile = () => {
  return (
    <>
      <div className="logo">
        <Link href="/">
          <Image
            width={60}
            height={50}
            className="logo_light"
            src={logo}
            alt="brand"
          />
          <Image
            width={60}
            height={50}
            className="logo_dark"
            src={logo}
            alt="brand"
          />
        </Link>
      </div>
      {/* End .logo */}
    </>
  );
};

export default HeaderMobile;
