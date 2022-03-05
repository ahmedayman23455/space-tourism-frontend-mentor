import React from "react";
import MainNavigation from "./main-navigation";
import classes from "./layout.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

function Layout(props) {
  const router = useRouter();
  const pathName = router.pathname;
  /* --------------------------- add background class -------------------------- */
  let backgroundClass = "home-background";
  if (pathName.includes("destination")) {
    backgroundClass = "destination-background";
  } else if (pathName.includes("crew")) {
    backgroundClass = "crew-background";
  } else if (pathName.includes("technology")) {
    backgroundClass = "technology-background";
  }
  /* -------------------------------------------------------------------------- */
  return (
    <div className={`wrapper background ${backgroundClass}`}>
      <Link href="#main">
        <a className="sr-only">Go To Content</a>
      </Link>
      <MainNavigation />
      {props.children}
    </div>
  );
}

export default Layout;
