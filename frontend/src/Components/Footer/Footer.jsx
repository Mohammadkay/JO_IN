import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <footer>
      <div className="foot-content">
        <div className="title-content">
          <div>
            <h2 id="footer-logo">Travelgo</h2>
          </div>
          <div>
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis,
              lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel
            </p>
          </div>
        </div>
        <div className="title-content">
          <div>
            <h2>links</h2>
          </div>
          <ul>
            <li>links</li>
            <li>Special Deals</li>
            <li>Services</li>
            <li>Community</li>
            <li>About Us</li>
          </ul>
        </div>
        <div className="title-content">
          <div>
            <h2>Services</h2>
          </div>
          <ul>
            <li>Blog & Articles</li>
            <li>Term and Condition</li>
            <li>Privacy Policy</li>
            <li>Contact Us</li>
            <li>About Us</li>
          </ul>
        </div>
        <div className="title-content">
          <div>
            <h2>Contact</h2>
          </div>
          <ul>
            <li>Address: Jl.Codelaras No.205A</li>
            <li>Kediri, Pare AG17</li>
            <li>Phone: 123 456 7890</li>
            <li>Email: myagungperdana@gmail.com</li>
            <li>Maps: Kediri, East java</li>
          </ul>
        </div>
      </div>
      <div className="end-foot">
        <h2>© 2023 Copyright</h2>
        <div className="social-icons">
          <a href="#">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-square-facebook"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
