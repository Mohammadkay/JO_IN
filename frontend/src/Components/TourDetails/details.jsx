import React, { useEffect, useState } from "react";
// import "./css/all.min.css";
import "./css/style.css";
import { useParams } from "react-router-dom";
import axios from "axios";
function Details() {
  const params = useParams();
  const [oneTour, setOneTour] = useState();
  const fetchTour = async () => {
    const res = await axios.get(`/Api/JO_IN/tours/${params.id}`);
    setOneTour(res.data.data.tour);
  };
  useEffect(() => {
    fetchTour();
  }, []);

  console.log(oneTour);

  return (
    <div className="Card-container">
      <div className="box">
        <div className="images">
          <div className="img-holder active">
            <img src="" alt="" />
          </div>
          <div className="img-holder">
            <img src="" alt="" />
          </div>
          <div className="img-holder">
            <img src="" alt="" />
          </div>
          <div className="img-holder">
            <img src="" alt="" />
          </div>
        </div>
        <div className="basic-info">
          <h1>{oneTour?.name}</h1>
          <div className="rate">
            <i className="filled fas fa-star" />
            <i className="filled fas fa-star" />
            <i className="filled fas fa-star" />
            <i className="filled fas fa-star" />
            <i className="filled fas fa-star" />
          </div>
          <span>{oneTour?.price}</span>
          <div className="options">
            <a href="!#">Book Now</a>
          </div>
        </div>
        <div className="description">
          <p>{oneTour?.description}</p>
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
