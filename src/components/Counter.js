import React from "react";
import "../styles/style.css";

const Counter = ({counter, increment, decrement}) => {

debugger

  return (
    <div className="page-container">
      <button className="btn btn-primary" onClick={ () => increment()}>+</button> {counter} <button className="btn btn-primary" onClick={ () => decrement()}>-</button>
    </div>
  );
};

export default Counter;
