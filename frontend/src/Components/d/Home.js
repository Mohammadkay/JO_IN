import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Nav from "./Nav";
import { useContext } from "react";
import { allData } from "../../context/context";
import "./styleHome.css";
function Home({ Toggle }) {
  const { fetchTours, allTours } = useContext(allData);
  const { setIsActive } = useContext(allData);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  return (
    <div className="px-3">
      <Nav Toggle={Toggle} />
      <Link to="/addTour" className="dash-add-product">
        Add Tour
      </Link>
      <table className="table caption-top bg-white rounded mt-2">
        <thead>
          <tr>
            <th scope="col">name</th> <th scope="col">Price</th>
            <th scope="col">description</th> <th scope="col">Rate</th>
          </tr>
        </thead>
        <tbody>
          {allTours
            .filter((tour) => user._id === tour?.userId)
            .map((tour) => (
              <tr key={tour?._id}>
                <th scope="row">{tour?.name}</th>
                <td>{tour?.price}</td>
                <td>{tour?.description}</td>
                <td>{tour?.price}</td>
              </tr>
            ))}
        </tbody>
      </table>
<button
        className="btn btn-primary"
        onClick={() => {
          localStorage.clear();
          setIsActive(false);
          navigate("../Login");
        }}
      >
        <i className="bi bi-power fs-5 me-3"></i> Logout
      </button>
    </div>
  );
}
export default Home;
