import React from "react";
import Button from "./button";
import HomeContent from "./home-content";
import classes from "./home-wrapper.module.scss";

function HomeWrapper() {
  return (
    <div className={classes.homeWrapper}>
      <HomeContent />
      <Button>Explore</Button>
    </div>
  );
}

export default HomeWrapper;
