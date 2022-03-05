import React from "react";
import classes from "./technology-right.module.scss";
import Image from "next/image";

function TechnologyRight(props) {

  return (
    <div className={classes.technologyRight}>
      <Image
        className={classes["image__mobile-image"]}
        src={props.images.landscape}
        layout="fill"  
        objectFit="cover"
      />

      <Image
        className={classes["image__desktop-image"]}
        src={props.images.portrait}
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
}

export default TechnologyRight;
