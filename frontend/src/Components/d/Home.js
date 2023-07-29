import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Nav from "./Nav";
import { useContext } from "react";
import { allData } from "../../context/context";
import Swal from "sweetalert2";
import "./styleHome.css";
import axios from "axios";
function Home({ Toggle }) {
  const { fetchTours, allTours, setIsActive } = useContext(allData);

  const user = JSON.parse(localStorage.getItem("user"));
    const navigate=useNavigate()
  useEffect(() => {
    fetchTours();
  }, []);


  const deleteTour = async (id) => {
    Swal.fire({
      title: `Are You Sure To Delete ${id} ?`,
      showCancelButton: true,
    }).then((data) => {
      if (data.isConfirmed) {
        axios.delete(`/Api/JO_IN/tours/${id}`).then(() => {
          fetchTours();
        });
      }
    });
  };
  return (
    <div className="px-3">
      <Nav Toggle={Toggle} />
      <Link to="/addTour" className="dash-add-product">
        Add Tour
      </Link>
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
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteTour(tour?._id)}
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
export default Home;
