import React from "react";
import classes from "./technology-left.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

function TechnologyLeft(props) {
  const router = useRouter();
  const query = router.query.slug;

  return (
    <div className={classes.technologyLeft}>
      {/*  1- header */}
      <div className={classes.title}>
        <span>03</span>SPACE LAUNCH 101
      </div>

      {/* 2- content */}
      <div className={classes.content}>
        {/* 2.1 numbers-indicatores */}
        <ul className={classes.numbersIndicators}>
          <Link href="/technology/launch-vehicle">
            <li className={query === "launch-vehicle" ? classes.active : null}>
              <a>1</a>
            </li>
          </Link>

          <Link href="/technology/spaceport">
            <li className={query === "spaceport" ? classes.active : null}>
              <a>2</a>
            </li>
          </Link>

          <Link href="/technology/space-capsule">
            <li className={query === "space-capsule" ? classes.active : null}>
              <a>3</a>
            </li>
          </Link>
        </ul>

        {/* 2.2 data */}
        <div className={classes.data}>
          {/* 2.2.1 small heading */}
          <h4>THE TERMINOLOGY…</h4>

          {/* 2.2.2 large heading */}
          <h1> {props.name}</h1>
          {/* 2.2.3 paragraph */}
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default TechnologyLeft;
