import React from 'react' ;  
import CrewLeft from './crew-left';
import CrewRight from './crew-right';
import classes from './crew-wrapper.module.scss'  ; 

function CrewWrapper(props) {     
  const data = props.data ;  
  return (
    <div className={classes.crewWrapper}>
       {/* content */}  
        <CrewLeft name={data.name}    
        bio={data.bio}
        role={data.role} />
       {/* person image */}     
      <CrewRight image ={data.images.webp}/>
    </div>
  )
}

export default CrewWrapper