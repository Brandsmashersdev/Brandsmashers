import dynamic from "next/dynamic";
import Seo from "../components/Seo";
import Home from "../components/pages/HomePage";

const index = () => {
  return (
    <>
      <Seo pageTitle="Brandsmashers" />
      <Home />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
