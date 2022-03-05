import React, { useEffect, useState } from "react";
import classes from "./main-navigation.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

function MainNavigation() {
  const [navOpen, setNavOpen] = useState(false);
  const router = useRouter();
  const pathName = router.pathname;

  /* -------------------------------- buttonHandler ------------------------------- */
  function buttonHandler(e) {
    if (navOpen) {
      e.target.setAttribute("aria-expanded", false);
    } else {
      e.target.setAttribute("aria-expanded", true);
    }
    setNavOpen((prevState) => !prevState);
  }
  /* -------------------------------------------------------------------------- */
  return (
    <header className={`${classes.header} `}>
      <div className={classes.logo}>
        <Image
          src="/assets/shared/logo.svg"
          alt="space tourism logo"
          height={50}
          width={50}
        />
      </div>

      <button
        className={`${classes["mobile-nav-toggle"]} `}
        aria-controls="primary-navigation"
        aria-expanded="false"
        onClick={buttonHandler}
      >
        <span className="sr-only">Menu</span>
      </button>

      <div className={classes.line}></div>

      <nav>
        <ul
          id="primary-navigation"
          data-visible="false"
          className={`${classes.primaryNavigation} ${navOpen && classes.navOpen}`}
        >
          <Link href="/">
            <li className={pathName === "/" ? classes.active : null}>
              <a>
                <span aria-hidden="true">01</span>Home
              </a>
            </li>
          </Link>

          <Link href="/destination/moon">
            <li
              className={
                pathName.includes("destination") ? classes.active : null
              }
            >
              <a>
                <span aria-hidden="true">02</span>Destination
              </a>
            </li>
          </Link>

          <Link href="/crew/douglas-hurley">
            <li className={pathName.includes("crew") ? classes.active : null}>
              <a>
                <span aria-hidden="true">03</span>Crew
              </a>
            </li>
          </Link>

          <Link href="/technology/launch-vehicle">
            <li
              className={
                pathName.includes("technology") ? classes.active : null
              }
            >
              <a>
                <span aria-hidden="true">04</span>Technology
              </a>
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
