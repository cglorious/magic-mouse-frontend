import React from "react";
import { Link } from "react-router-dom";

const Resorts = () => {
  return (
    <div>
      <h3>Where would you like to travel?</h3>
      <p><Link to="/disneyland-resort">Disneyland Resort</Link></p>
      <p><Link to="/disneyworld-resort">Disneyworld Resort</Link></p>
      <p><Link to="/tokyo-disney-resort">Toyko Disney Resort</Link></p>
    </div>
  );
};

export default Resorts;
