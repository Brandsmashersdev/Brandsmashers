import dynamic from "next/dynamic";
import Seo from "../components/Seo";
import HomeHorizontal from "../components/pages/home-horizontal";
import HomeRedesign from "../components/pages/home-redesign";
import NewDesign from "../components/pages/new-home-horizontal";

const index = () => {
  return (
    <>
      <Seo pageTitle="Brandsmashers" />
      {/* <HomeHorizontal /> */}
      <NewDesign />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
