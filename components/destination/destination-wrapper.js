import React from "react";
import DestiantionLeft from "./destination-left";
import DestinationRight from "./destination-right";  
import classes from './destination-wrapper.module.scss' ;   

function DestinationWrapper(props) {
  const { name, images, description, distance, travel } = props.data;   
 
  return (
    <div className={classes.destinationWrapper}>
      <DestiantionLeft images={images}  name={name}/>
      <DestinationRight
        name={name}
        description={description}
        distance={distance}
        travel={travel}  
        slug={props.slug}
      />
    </div>
  );
}

export default DestinationWrapper;
