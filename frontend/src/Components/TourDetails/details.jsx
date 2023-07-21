import React from "react";
// import "./css/all.min.css";
import "./css/style.css";

function Details() {
  return (
    <div className="container">
      <div className="box">
        <div className="images">
          <div className="img-holder active">
            <img src="./image/david-rodrigo-Fr6zexbmjmc-unsplash.jpg" alt="#" />
          </div>
          <div className="img-holder">
            <img src="./image/david-rodrigo-kZ1zThg6G40-unsplash.jpg" alt="#" />
          </div>
          <div className="img-holder">
            <img
              src="./image/christoph-schulz-jG3I8b5iyHI-unsplash.jpg"
              alt="#"
            />
          </div>
          <div className="img-holder">
            <img src="./image/faisal-manga-4NeuZU-ynnw-unsplash.jpg" alt="#" />
          </div>
        </div>
        <div className="basic-info">
          <h1>Dubai</h1>
          <div className="rate">
            <i className="filled fas fa-star" />
            <i className="filled fas fa-star" />
            <i className="filled fas fa-star" />
            <i className="filled fas fa-star" />
            <i className="filled fas fa-star" />
          </div>
          <span>$250</span>
          <div className="options">
            <a href="!#">Book Now</a>
          </div>
        </div>
        <div className="description">
          <p>
            Dubai is a city of skyscrapers, ports, and beaches, where big
            business takes place alongside sun-seeking tourism. Because of its
            large expatriate population, it feels like a Middle Eastern melting
            pot, and the atmosphere is generally tolerant.
          </p>
          <ul className="features">
            <li>
              <i className="fa-solid fa-circle-check" /> All meals included
            </li>
            <li>
              <i className="fa-solid fa-circle-check" /> 5 Starts hotels
            </li>
            <li>
              <i className="fa-solid fa-circle-check" /> All activities included
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Details;
