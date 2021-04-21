import React from "react";
import "../styles/style.css";

const Fantasyland = () => {
  return (
    <div>
        <h3 className="header">Fantasyland</h3>

        <div className="row row-cols-1 row-cols-md-3 g-4">
        <div id="card-container">
          <div className="card" id="resort-card">
            <img
              id="attraction-card-image"
              className="card-img-top"
              src= "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/433/433/75/dam/disneyland/destinations/disneyland/fantasyland/peter-pan-flight-v2-1x1.jpg?1604384613389"
              alt="Peter Pan's Flight"
              />
            <div className="card-body">
              <h5 class="card-title">Peter Pan's Flight</h5>
              <button class="btn btn-primary">+</button>  0  <button class="btn btn-primary">-</button>
            </div>
          </div>
        </div>

        <div id="card-container">
          <div className="card" id="resort-card">
            <img
              id="attraction-card-image"
              className="card-img-top"
              src= "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/433/433/75/dam/disneyland/destinations/disneyland/fantasyland/mad-tea-party-v2-1x1.jpg?1604384613389"
              alt="Mad Tea Party"
              />
            <div className="card-body">
              <h5 class="card-title">Mad Tea Party</h5>
              <button class="btn btn-primary">+</button>  0  <button class="btn btn-primary">-</button>
            </div>
          </div>
        </div>

        <div id="card-container">
          <div className="card" id="resort-card">
            <img
              id="attraction-card-image"
              className="card-img-top"
              src= "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/433/433/75/dam/disneyland/destinations/disneyland/fantasyland/pinocchios-daring-adventure-1x1.jpg?1604384613389"
              alt="Pinocchio's Daring Journey"
              />
            <div className="card-body">
              <h5 class="card-title">Pinocchio's Daring Journey</h5>
              <button class="btn btn-primary">+</button>  0  <button class="btn btn-primary">-</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fantasyland;
