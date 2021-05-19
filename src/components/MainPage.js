import React from "react";
import "../styles/style.css";
import { Link } from "react-router-dom"

const MainPage = () => {

  return (
    <div>
      <div className="px-4 py-5 my-5 text-center">
        <h1>Magic Mouse</h1>
        <br />
        <img
          id="main-image"
          className="d-block mx-auto mb-4"
          src="https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/900/360/75/dam/disneyland/experience-updates/mickey-character-castle-5x2.jpg?1618376955641"
          alt="Mickey Mouse in front of the Disneyland castle"
          />
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">Relive your Disney adventures by adding them <br/>  to a virtual Magic Mouse scrapbook.</p>
        </div>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <Link to="/lands" className="btn btn-primary btn-lg px-4 me-sm-3">I'm ready!</Link>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
