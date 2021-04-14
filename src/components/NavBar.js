import React from "react";

const NavBar = () => {

  return (
    <div>
      <ul>
        <li><a class="active" href="/">Home</a></li>
        <li><a href="/resorts">Resorts</a></li>
        <li><a href="/parks">Parks</a></li>
      </ul>
    </div>
  );
};

export default NavBar;
