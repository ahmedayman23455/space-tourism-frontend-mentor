import React from "react";
import TechnologyLeft from "./technology-left";
import TechnologyRight from "./technology-right";
import classes from "./technology-wrapper.module.scss";
function TechnologyWrapper(props) {
  return (
    <div className={classes.technologyWrapper}>
      <TechnologyLeft
        name={props.data.name}
        description={props.data.description}
      />
      <TechnologyRight images={props.data.images} name={props.data.name} />
      {/*  1- header */}
      <div className={classes.title}>
        <span>03</span>SPACE LAUNCH 101
      </div>
    </div>
  );
}

export default TechnologyWrapper;
