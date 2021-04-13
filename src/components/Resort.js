import React from 'react';
import { Link } from "react-router-dom";

const Resort = props => {

    return(
      <div>
        <p><Link to={props.slug}>{props.name}</Link></p>
      </div>

    );
};

export default Resort;
