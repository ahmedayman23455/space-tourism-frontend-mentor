import React from "react";
import classes from "./crew-right.module.scss";
import Image from "next/image";

function CrewRight(props) {
  return (
    <div className={classes.crewRight}>
      <div className={classes.title}>
        <span>02</span>Meet Your Crew
      </div>

      <Image src={props.image} alt={props.name} width={500} height={500} />
    </div>
  );
}

export default CrewRight;
