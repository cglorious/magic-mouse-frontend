import React from "react";
import "../styles/style.css";

const Counter = ({counters, increment, decrement}) => {

  const renderCounters = () => {
    return counters.map((value, i) => {
      return (
        <div>
          <h1>{value}</h1>
          <p>
            <button className="btn btn-primary" onClick={ () => increment(i)}>+</button>
            <button className="btn btn-primary" onClick={ () => decrement(i)}>-</button>
          </p>
        </div>
      )
    })
  }

  return (
    <div className="page-container">
      {renderCounters()}
    </div>
  );
};

export default Counter;
