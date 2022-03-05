import React from "react";
import classes from './button.module.scss' ;   
import Link from 'next/link'

function Button(props) {      
  return (
    // <div className="primaryButton" style={{'--pd-btn': '2em'}}>
    <div className={classes.button} >
      {/* <!-- explore button --> */}
      <Link href="#">
        <a  style={props.style }> 
          {props.children}
        </a>
        {/* <a className="large-button uppercase ff-serif fs-600">Explore</a> */}
      </Link>
    </div>
  );
}

export default Button;
// larger-button uppercase ff-serif fs-600 text-dark bg-white