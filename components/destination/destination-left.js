import React from "react";
import Image from "next/image";
import classes from "./destination-left.module.scss";

function DestiantionLeft(props) {
  return (
    <section className={`${classes.destinationLeft}`}>
      <h1>
        <span>01</span>Pick your destination
      </h1>

      {/* image */}
      <div className={`${classes.imageContainer}`}>
        <Image
          src={props.images.webp}
          alt={props.name}
          layout='responsive'  
          width={300} 
          height={300}
        />
      </div>
    </section>
  );
}
export default DestiantionLeft;
