import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import { useContext } from "react";
import { allData } from "../../context/context";
import "./styleHome.css"
function Home({ Toggle }) {
  const { fetchTours, allTours } = useContext(allData);
  return (
    <div className="px-3">
      {" "}
      <Nav Toggle={Toggle} />{" "}
      {/* <div className="container-fluid">
        <div className="row g-3 my-2">
          {" "}
          <div className="col-md-3 p-1">
            {" "}
            <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              {" "}
              <div>
                {" "}
                <h3 className="fs-2">230</h3> <p className="fs-5">Products</p>{" "}
              </div>{" "}
              <i className="bi bi-cart-plus p-3 fs-1"></i>{" "}
            </div>{" "}
          </div>{" "}
          <div className="col-md-3 p-1">
            {" "}
            <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              {" "}
              <div>
                {" "}
                <h3 className="fs-2">2450</h3> <p className="fs-5">Sales</p>{" "}
              </div>{" "}
              <i className="bi bi-currency-dollar p-3 fs-1"></i>{" "}
            </div>{" "}
          </div>{" "}
          <div className="col-md-3 p-1">
            {" "}
            <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              {" "}
              <div>
                {" "}
                <h3 className="fs-2">2250</h3> <p className="fs-5">Delivery</p>{" "}
              </div>{" "}
              <i className="bi bi-truck p-3 fs-1"></i>{" "}
            </div>{" "}
          </div>{" "}
          <div className="col-md-3 p-1">
            {" "}
            <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              {" "}
              <div>
                {" "}
                <h3 className="fs-2">20%</h3> <p className="fs-5">Increase</p>{" "}
              </div>{" "}
              <i className="bi bi-graph-up-arrow p-3 fs-1"></i>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div> */}
      <Link to="/addTour" className="dash-add-product">
        Add Tour
      </Link>{" "}
      <table class="table caption-top bg-white rounded mt-2">
        {" "}
        <thead>
          {" "}
          <tr>
            {" "}
            <th scope="col">name</th> <th scope="col">Price</th>{" "}
            <th scope="col">description
            </th> <th scope="col">Rate</th>{" "}
          </tr>{" "}
        </thead>{" "}
        <tbody>
          {" "}
          {allTours.map((tour) => {
            return (
              <tr>
                <th scope="row">{tour.name}</th> <td>{tour.price}</td>{" "}
                <td>{tour.description}</td> <td>{tour.price}</td>
              </tr>
            );
          })}
        </tbody>{" "}
      </table>{" "}
    </div>
  );
}
export default Home;
