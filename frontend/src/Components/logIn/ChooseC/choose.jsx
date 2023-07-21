import React from 'react'
import './choose.css'
function Choose() {
  return (
   <div  className="chooseContainer">
<div className="card" style={{width: "30rem" ,height:"20rem"}}>
  <img src="./image/tourist.avif" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Tourist</h5>
    
    <a href="#" className="btn btn">Log In</a>
  </div>
</div>


<div className="card" style={{width: "30rem", height:"20rem"}}>
  <img src="./image/vendor.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Tour Guide</h5>
   
    <a href="#" className="btn ">Log In</a>
  </div>
</div>




   </div>
    
    
  )
}

export default Choose
