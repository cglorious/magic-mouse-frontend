import React from "react";
import './style.css'

const DisneylandResort = () => {
  return (
    <div id="disneyland-container">
      <h3 id="disneyland-header">Welcome to Disneyland Resort</h3>
      <br/>

        <div className="card mb-3">
          <img src="https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/900/360/75/dam/disneyland/experience-updates/mickey-character-castle-5x2.jpg?1618376955641" className="card-img-top" alt="..." />
          <div id="card-body" className="card-body">
              <a
              href="/disneyland"
              className="btn btn-primary"
              >Disneyland</a>
          </div>
        </div>

        <div className="card mb-3">
          <img src="https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/900/360/75/dam/disneyland/destinations/disney-california-adventure/pixar-pier-render-5x2.jpg?1618378068986" className="card-img-top" alt="..." />
          <div id="card-body" className="card-body">
              <a
              href="/ca-adventure"
              className="btn btn-primary"
              >California Adventure</a>
          </div>
        </div>
    </div>
  );
};

export default DisneylandResort;
