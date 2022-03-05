import React from "react";
import { getData, findData } from "../../helpers/functions";
import DestinationWrapper from "../../components/destination/destination-wrapper";
import { useRouter } from "next/router";

function DestinationPage(props) {
  const router = useRouter();
  const slug = router.query.slug;
  return (
    <>
      <DestinationWrapper data={props.data} slug={slug} />
    </>
  );
}

export default DestinationPage;

export async function getStaticProps(context) {
  const { params } = context;
  const slug = params.slug;
  const dataSlug = await findData("destinations", slug);

  if (!dataSlug) {
    return {
      notFound: true,
    };
  }
  return {
    props: { data: dataSlug },
  };
}

export async function getStaticPaths() {
  const data = await getData("destinations");

  const slugs = data.map((item) => item.name);

  const paths = slugs.map((slug) => ({
    params: {
      slug: slug.toLowerCase(),
    },
  }));

  return {
    paths: paths,
    fallback: "blocking",
  };
}
