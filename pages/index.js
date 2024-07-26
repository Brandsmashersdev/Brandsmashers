import dynamic from "next/dynamic";
import Seo from "../components/Seo";
import Home from "./Home";

const index = () => {
  return (
    <>
      <Seo pageTitle="Preview" />
      <Home />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
