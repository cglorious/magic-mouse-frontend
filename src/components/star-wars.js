import React from "react";
import "../styles/style.css";

const StarWars = () => {
  return (
    <div>
      <h3 className="header">Star Wars: Galaxy's Edge</h3>
      
      <div className="row row-cols-1 row-cols-md-3 g-4">
      <div id="card-container">
        <div className="card" id="resort-card">
          <img
            id="attraction-card-image"
            className="card-img-top"
            src= "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1300/544/75/dam/disneyland/destinations/disneyland/star-wars-galaxys-edge/photography/smugglers-run-16x9.jpg?1605249800957"
            alt="Millennium Falcon: Smugglers Run"
            />
          <div className="card-body">
            <h5 class="card-title">Millennium Falcon: Smugglers Run</h5>
            <button class="btn btn-primary">+</button>  0  <button class="btn btn-primary">-</button>
          </div>
        </div>
      </div>

      <div id="card-container">
        <div className="card" id="resort-card">
          <img
            id="attraction-card-image"
            className="card-img-top"
            src= "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/650/366/75/dam/disneyland/home/destination/rise-of-the-resisstance-interior-16x9.jpg?1605249800957"
            alt="Star Wars: Rise of the Resistance"
            />
          <div className="card-body">
            <h5 class="card-title">Star Wars: Rise of the Resistance</h5>
            <button class="btn btn-primary">+</button>  0  <button class="btn btn-primary">-</button>
          </div>
        </div>
      </div>
    </div>

    </div>
  );
};

export default StarWars;
