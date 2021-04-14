import React from 'react';
import { Link } from "react-router-dom";

const Resort = props => {

    return(
      <div>
        <p><Link to={props.slug}>{props.name}</Link></p>
        <img src={props.image} alt={props.name}/>
        <p>{props.location}</p>
        <hr/>
      </div>

    );
};

export default Resort;
