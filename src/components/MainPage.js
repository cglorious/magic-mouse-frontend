import React from "react";
import "../styles/style.css";

const MainPage = () => {

  return (
    <div>
      <div class="px-4 py-5 my-5 text-center">
        <h1>Magic Mouse</h1>
        <img
          id="main-image"
          className="d-block mx-auto mb-4"
          src="https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/900/360/75/dam/disneyland/experience-updates/mickey-character-castle-5x2.jpg?1618376955641"
          />
        <h1 class="display-5 fw-bold"></h1>
        <div class="col-lg-6 mx-auto">
          <p class="lead mb-4">Keep track of your Disneyland memories by <br/> counting your rides and earning points.</p>
        </div>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <a href="/lands" className="btn btn-primary btn-lg px-4 me-sm-3">I'm ready!</a>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
