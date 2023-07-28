// http://localhost:8000/Api/JO_IN/tours
import { useContext, useEffect, useState } from "react";

import "./fromD.css";
import axios from "axios";
import { allData } from "../../context/context";
import { useNavigate } from "react-router-dom";
function FromDash() {
  const [form, setForm] = useState({
    name: "",
    duration: "",
    maxGroupSize: "",
    difficulty: "",
    ratingAverage: "",
    price: "",
    summary: "",
    description: "",
    images:[]
  });
  const navigate=useNavigate()
  const { setAllTours, allTours } = useContext(allData);


  // console.log(tours);
  const FormData = (event) => {
    const { name, value } = event.target;
    setForm((data) => ({ ...data, [name]: value }));
  };
 const createTour = async () => {
   try {
     const response = await axios.post("/Api/JO_IN/tours", form);
     console.log(response.data);
          setAllTours([...allTours,{...form }]);

   } catch (err) {
     console.log(err);
   }
 };


  const handleSubmit = (event) => {
    event.preventDefault();
    createTour();
    navigate("/dash");
    console.log(allTours);
  };

   return (
     <div>
       <form onSubmit={handleSubmit} className="tourForm">
         <h5>Add Product</h5>
         <label htmlFor="name">Title</label>
         <input
           type="text"
           id="name"
           name="name"
           value={form.name}
           onChange={(event) => FormData(event)}
         />

         <label htmlFor="duration">Duration :</label>
         <input
           type="text"
           id="duration"
           name="duration"
           value={form.duration}
           onChange={(event) => FormData(event)}
         />
         <label htmlFor="maxGroupSize">Max Group Size:</label>
         <input
           type="text"
           id="maxGroupSize"
           name="maxGroupSize"
           value={form.maxGroupSize}
           onChange={(event) => FormData(event)}
         />

<label htmlFor="difficulty">Difficulty:</label>
          <input
            type="text"
            id="difficulty"
            name="difficulty"
            value={form.difficulty}
            onChange={(event) => FormData(event)}
          />

 <label htmlFor="ratingAverage">Rating Average:</label>
          <input
            type="text"
            id="ratingAverage"
            name="ratingAverage"
            value={form.ratingAverage}
            onChange={(event) => FormData(event)}
          />

 <label htmlFor="price">Price:</label>
         <input
            type="text"
            id="price"
            name="price"
            value={form.price}
            onChange={(event) => FormData(event)}
          />
<label htmlFor="summary">Summary:</label>
         <input
            type="text"
            id="summary"
            name="summary"
            value={form.summary}
            onChange={(event) => FormData(event)}
          />

            <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            name="description"
            value={form.description}
            onChange={(event) => FormData(event)}
          />


         <button className="add-product">Add Tour</button>
       </form>
     </div>
   );
  // return (
  //   <>
  //     <form action="" onSubmit={handelForm}>
  //       <div>
  //         <label htmlFor="name">Name:</label>
  //         <input
  //           type="text"
  //           id="name"
  //           name="name"
  //           value={form.name}
  //           onChange={(event) => FormData(event)}
  //         />
  //       </div>

  //       <div>
  //         <label htmlFor="duration">Duration:</label>
  //         <input
  //           type="text"
  //           id="duration"
  //           name="duration"
  //           value={form.duration}
  //           onChange={(event) => FormData(event)}
  //         />
  //       </div>

  //       <div>
  //         <label htmlFor="maxGroupSize">Max Group Size:</label>
  //         <input
  //           type="text"
  //           id="maxGroupSize"
  //           name="maxGroupSize"
  //           value={form.maxGroupSize}
  //           onChange={(event) => FormData(event)}
  //         />
  //       </div>

  //       <div>
  //         <label htmlFor="difficulty">Difficulty:</label>
  //         <input
  //           type="text"
  //           id="difficulty"
  //           name="difficulty"
  //           value={form.difficulty}
  //           onChange={(event) => FormData(event)}
  //         />
  //       </div>

  //       <div>
  //         <label htmlFor="ratingAverage">Rating Average:</label>
  //         <input
  //           type="text"
  //           id="ratingAverage"
  //           name="ratingAverage"
  //           value={form.ratingAverage}
  //           onChange={(event) => FormData(event)}
  //         />
  //       </div>

  //       <div>
  //         <label htmlFor="price">Price:</label>
  //         <input
  //           type="text"
  //           id="price"
  //           name="price"
  //           value={form.price}
  //           onChange={(event) => FormData(event)}
  //         />
  //       </div>

  //       <div>
  //         <label htmlFor="summary">Summary:</label>
  //         <input
  //           type="text"
  //           id="summary"
  //           name="summary"
  //           value={form.summary}
  //           onChange={(event) => FormData(event)}
  //         />
  //       </div>

  //       <div>
  //         <label htmlFor="description">Description:</label>
  //         <input
  //           type="text"
  //           id="description"
  //           name="description"
  //           value={form.description}
  //           onChange={(event) => FormData(event)}
  //         />
  //       </div>
  //       <button>add </button>
  //     </form>
  //   </>
  // );
}
export default FromDash;
