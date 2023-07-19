import React from "react";
import "./Testimonial.css";
export default function Testimonial() {
  return (
    <section className="testimonial-container">
      <div className="testimonial-text-wrapper" >
       
        <h1 className="section-sub-title">What they say about us</h1>
      </div>
      <div className="testimonial-cards-container">
        <div className="testimonial-card">
          <div className="testimonial-img-name">
            <img src="./image/person1.jpg" alt="" />
            <h4>Angelina Simple</h4>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
        </div>

        <div className="testimonial-card testimonial-card2">
          <div className="testimonial-img-name">
            <img src="./image/person2.jpg" alt="" />
            <h4>Viola Natalie</h4>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
        </div>

        <div className="testimonial-card">
          <div className="testimonial-img-name">
            <img src="./image/person3.jpg" alt="" />
            <h4>Robert John K.</h4>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
        </div>
        <div className="testimonial-card">
          <div className="testimonial-img-name">
            <img src="./image/person4.jpg" alt="" />
            <h4>Anggi Nani</h4>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
        </div>
        <div className="testimonial-card">
          <div className="testimonial-img-name">
            <img src="./image/person5.jpg" alt="" />
            <h4>Graham Suryo J</h4>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
        </div>
        <div className="testimonial-card">
          <div className="testimonial-img-name">
            <img src="./image/person6.jpg" alt="" />
            <h4>Bagas G Natfi</h4>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
        </div>
      </div>
    </section>
  );
}
