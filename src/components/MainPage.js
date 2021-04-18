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
          src="https://www.pngkey.com/png/detail/116-1169845_its-a-small-small-world-mickey-ears-silhouette.png"
          />
        <h1 class="display-5 fw-bold"></h1>
        <div class="col-lg-6 mx-auto">
          <p class="lead mb-4">Keep track of your memories in the Disney, <br/> count your rides, and earn points.</p>
        </div>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <a href="/resorts" className="btn btn-primary btn-lg px-4 me-sm-3">Enter</a>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
