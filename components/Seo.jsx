import Head from "next/head";

const Seo = ({ pageTitle, font }) => (
  <>
    <Head>
      <title>
        {pageTitle &&
          `${pageTitle} Technologies`}
      </title>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta
        name="keywords"
        content="	portfolio, react nextjs portfolio, software company, brandsmashers"
      />
      <meta
        name="description"
        content="Brandsmashers Technologies - A software Company providing better software solutions"
      />
      <meta name="ibthemes" content="ATFN" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />

      {font && <link href={font} rel="stylesheet" />}
      <link rel="icon" href="favicon.ico" />
    </Head>
  </>
);

export default Seo;
