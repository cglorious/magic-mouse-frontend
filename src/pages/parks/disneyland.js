import React from "react";
import { Link } from "react-router-dom";

const Disneyland = () => {
  return (
    <div>
      <h3>Welcome to Disneyland!</h3>
      <p>Choose a land:</p>

      <ul>
        <li><Link to="/star-wars">Star Wars: Galaxy's Edge</Link></li>
        <li><Link to="/fantasyland">Fantasyland</Link></li>
      </ul>
    </div>
  );
};

export default Disneyland;
