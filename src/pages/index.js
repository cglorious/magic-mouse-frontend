import React from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div>
      <h1>Magical Memories</h1>
      <p>Keep track of your adventures and earn ounces of pixie dust points.</p>
      <button><Link to="/resorts">Enter</Link></button>
    </div>
  );
};

export default MainPage;
