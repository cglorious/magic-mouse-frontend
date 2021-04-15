import React from "react";

const NavBar = () => {

  return (
    <div>
      <ul>
        <li><a class="active" href="/">Home</a></li>
        <li><a href="/resorts">Resorts</a></li>
        <li><a href="/parks">Parks</a></li>
      </ul>
      <p>Points: 0</p>

    </div>
  );
};

export default NavBar;
