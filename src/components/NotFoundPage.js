import React from "react";
import "../styles/style.css";

const NotFoundPage = () => {
  return (
    <div className="page-container">
      <img className= "center-pixie" src="https://i.pinimg.com/originals/fd/f7/14/fdf714eb409e093eae14bde94e9f0648.jpg" alt="Pardon our Pixie Dust" />
      <br/ >
      <div className="header">
        <h1>SORRY, we couldn't find that page.</h1>
        <h5> Try going back to <a href='/'>Magic Mouse's home page.</a></h5>
      </div>
    </div>
  );
};

export default NotFoundPage;
