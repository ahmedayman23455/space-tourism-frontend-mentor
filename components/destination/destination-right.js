import React from "react";
import classes from "./destination-right.module.scss";
import Link from "next/link";  

function DestinationRight(props) {
  
  return (
    <section className={classes.destinationRight}>
      <nav >
        <Link href="/destination/moon">
          <a className={props.name === 'Moon' ? classes.active : null }>moon</a>
        </Link>
        <Link href="/destination/mars">
          <a className={props.name === 'Mars' ? classes.active : null }>mars</a>
        </Link>
        <Link href="/destination/europa">
          <a className={props.name === 'Europa' ? classes.active : null }>europa</a>
        </Link>
        <Link href="/destination/titan">
          <a className={props.name === 'Titan' ? classes.active : null }>titan</a>
        </Link>
      </nav>

      {/* title and paragraph */}
      <div className={`${classes.content}`}>
        <h3>{props.name}</h3>
        <p>
            {props.description} 
        </p>
      </div>


      {/* distance and time  */}
      <ul className={`${classes.details} `}>
        <li>  
          <span>Avg distance</span> 
          <p>{props.distance}</p> 
        </li>
        <li>  
          <span>Est. travel time</span> 
          <p>{props.travel}</p> 
        </li>

      </ul>
    </section>
  );
}

export default DestinationRight;
