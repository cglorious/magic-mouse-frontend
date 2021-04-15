import React from "react";
import "../styles/style.css";

const NavBar = () => {

  return (
    <div>
      <ul>
        <li><a className="active" href="/">Home</a></li>
        <li><a href="/resorts">Resorts</a></li>
        <li><a href="/parks">Parks</a></li>
      </ul>
      <div id="points">
      Points: 0
      </div>

    </div>
  );
};

export default NavBar;
