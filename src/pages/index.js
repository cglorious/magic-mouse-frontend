import React from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div>
      <h3>Welcome to the React Router Tutorial</h3>
      <small>Main Page</small>
      <Link to="/users">Show List of Users</Link>
    </div>
  );
};

export default MainPage;
