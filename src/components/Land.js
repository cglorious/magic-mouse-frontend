import React from 'react';
import { Link } from "react-router-dom";
import "../styles/style.css";

const Land = props => {

  // const listAttractions = () => {
  //   const array = props.attractions
  //   let text = "";
  //
  //   for (let i = 0; i < array.length; i++) {
  //     text += array[i].name + " ";
  //     console.log(array[i].name)
  //   }
  // }

    return(
      <div>
        <div id="card-container">
        <div className="card" id="resort-card">
          <img
            id="park-card-image"
            className="card-img-top"
            src={props.image}
            alt={props.name}
            />
          <div className="card-body">
            <h5 class="card-title"><a href={props.slug}>{props.name}</a></h5>
            <p>{props.description}</p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Land;
