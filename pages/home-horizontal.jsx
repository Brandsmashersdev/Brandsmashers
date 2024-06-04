import dynamic from "next/dynamic";
import Seo from "../components/Seo";
import NewDesign from "../components/pages/new-home-horizontal";

const index = () => {
  return (
    <>
      <Seo pageTitle="Brandsmashers" />
      <NewDesign />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
