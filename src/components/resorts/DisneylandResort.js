import React from "react";
import { Link } from "react-router-dom";

const DisneylandResort = () => {
  return (
    <div>
      <h3>Welcome to Disneyland Resort!</h3>
      <p>Choose a park:</p>
      <ul>
        <li><Link to="/disneyland">Disneyland</Link></li>
        <li><Link to="/ca-adventure">California Adventure</Link></li>
      </ul>
    </div>
  );
};

export default DisneylandResort;
