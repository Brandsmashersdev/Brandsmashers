import dynamic from "next/dynamic";
import Seo from "../components/Seo";
import EdinaPreview from "../components/pages/preview";
import HomeHorizontal from "./home-horizontal";

const index = () => {
  return (
    <>
      <Seo pageTitle="Preview" />
      {/* <EdinaPreview /> */}
      <HomeHorizontal />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
