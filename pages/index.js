import dynamic from "next/dynamic";
import Seo from "../components/Seo";
import HomeHorizontal from "./home-horizontal";

const index = () => {
  return (
    <>
      <Seo pageTitle="Preview" />
      <HomeHorizontal />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
