import React, { useEffect, useState } from "react";
import BlogShowcase from "../../components/pages/blog-showcase";
import { useRouter } from "next/router";

const Page = () => {
  const { blogName } = useRouter().query;

  return <div>
    <BlogShowcase blogName={blogName} />
  </div>;
};

export default Page;
