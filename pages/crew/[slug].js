import React from "react";
import CrewWrapper from "../../components/crew/crew-wrapper";
import { getData, findData } from "../../helpers/functions";
/* -------------------------------------------------------------------------- */
function CrewPage(props) {
  return (
    <>
      <CrewWrapper data={props.data}/>
    </>
  );
}

export default CrewPage;
/* ----------------------------- getStaticProps ----------------------------- */
export const getStaticProps = async (ctx) => {
  const { params } = ctx;
  const slug = params.slug;
  const dataSlug = await findData("crew", slug.replace("-", " "));

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
  const data = await getData("crew");
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
