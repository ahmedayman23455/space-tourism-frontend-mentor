import React from "react";
import TechnologyWrapper from "../../components/techonlogy/technology-wrapper";
import { getData, findData } from "../../helpers/functions";


function TechnologyPage(props) {
  return <TechnologyWrapper data={props.data} />;
}

export default TechnologyPage;

/* ----------------------------- getStaticProps ----------------------------- */
export const getStaticProps = async (ctx) => {
  const { params } = ctx;
  const slug = params.slug;
  const dataSlug = await findData("technology", slug.replace("-", " "));

  if (!dataSlug) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      data: dataSlug,
    },
  };
};

/* ----------------------------- getStaticPaths ----------------------------- */
export const getStaticPaths = async () => {
  const data = await getData("technology");
  const slugs = data.map((item) => item.name.replace(" ", "-").toLowerCase());
  const paths = slugs.map((slug) => {
    return {
      params: { slug: slug },
    };
  });

  return {
    paths: paths,
    fallback: "blocking",
  };
};
