

import React from "react";
import "./Check.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { faCheckSquare } from "@fortawesome/free-regular-svg-icons";
import { faCcVisa, faCcMastercard } from "@fortawesome/free-brands-svg-icons";
import visa from "./images/visa.png";
import master from "./images/MasterCard.png"

const Check = () => {
  return (
    <section className="checkout-container">
      <div className="d-flex justify-content-between align-items-center mb-5">
        <div className="d-flex flex-row align-items-center">
          <h4 className="text-uppercase mt-1">Eligible</h4>
          <span className="ms-2 me-3">Pay</span>
        </div>
        <a href="#!">Cancel and return to the website</a>
      </div>

      <div className="row">
        <div className="col-md-7 col-lg-7 col-xl-6 mb-4 mb-md-0">
          <h5 className="mb-0 text-success">$85.00</h5>
          <h5 className="mb-3">Diabetes Pump & Supplies</h5>
          <div>
            <div className="d-flex justify-content-between">
              <div className="d-flex flex-row mt-1">
                <h6>Insurance Responsibility</h6>
                <h6 className="fw-bold text-success ms-1">$71.76</h6>
              </div>
              <div className="d-flex flex-row align-items-center text-primary">
                <span className="ms-1">Add Insurer card</span>
              </div>
            </div>
            <p>
              Insurance claim and all necessary dependencies will be submitted
              to your insurer for the covered portion of this order.
            </p>
            <div
              className="p-2 d-flex justify-content-between align-items-center"
              style={{ backgroundColor: "#eee" }}
            >
              <span>Aetna - Open Access</span>
              <span>Aetna - OAP</span>
            </div>
            <hr />
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex flex-row mt-1">
                <h6>Patient Balance</h6>
                <h6 className="fw-bold text-success ms-1">$13.24</h6>
              </div>
              <div className="d-flex flex-row align-items-center text-primary">
                <span className="ms-1">Add Payment card</span>
              </div>
            </div>
            <p>
              Insurance claim and all necessary dependencies will be submitted
              to your insurer for the covered portion of this order.
            </p>
            <div className="d-flex flex-column mb-3">
              <div
                className="btn-group-vertical"
                role="group"
                aria-label="Vertical button group"
              >
                <input
                  type="radio"
                  className="btn-check"
                  name="options"
                  id="option1"
                  autoComplete="off"
                />
                <label
                  className="btn btn-outline-primary btn-lg"
                  htmlFor="option1"
                >
                  <div className="d-flex justify-content-between">
                    <span>
                      <img className="bankimg" src={visa} alt="" />
                      VISA
                    </span>
                    <span>**** 5436</span>
                  </div>
                </label>

                <input
                  type="radio"
                  className="btn-check"
                  name="options"
                  id="option2"
                  autoComplete="off"
                  checked
                />
                <label
                  className="btn btn-outline-primary btn-lg"
                  htmlFor="option2"
                >
                  <div className="d-flex justify-content-between">
                    <span>
                      <img
                        className="bankimg"
                        src={master}
                        alt=""
                      />
                      MASTER CARD
                    </span>
                    <span>**** 5038</span>
                  </div>
                </label>
              </div>
            </div>
            <div className="btn btn-success btn-lg btn-block">
              Proceed to payment
            </div>
          </div>
        </div>
        <div className="col-md-5 col-lg-4 col-xl-4 offset-lg-1 offset-xl-2">
          <div className="p-3" style={{ backgroundColor: "#eee" }}>
            <span className="fw-bold">Order Recap</span>
            <div className="d-flex justify-content-between mt-2">
              <span>contracted Price</span> <span>$186.86</span>
            </div>
            <div className="d-flex justify-content-between mt-2">
              <span>Amount Deductible</span> <span>$0.0</span>
            </div>
            <div className="d-flex justify-content-between mt-2">
              <span>Coinsurance(0%)</span> <span>+ $0.0</span>
            </div>
            <div className="d-flex justify-content-between mt-2">
              <span>Copayment </span> <span>+ $40.00</span>
            </div>
            <hr />
            <div className="d-flex justify-content-between mt-2">
              <span className="lh-sm">
                Total Deductible,
                <br />
                Coinsurance and copay
              </span>
              <span>$40.00</span>
            </div>
            <div className="d-flex justify-content-between mt-2">
              <span className="lh-sm">
                Maximum out-of-pocket <br />
                on insurance policy
              </span>
              <span>$40.00</span>
            </div>
            <hr />
            <div className="d-flex justify-content-between mt-2">
              <span>Insurance Responsibility </span> <span>$71.76</span>
            </div>
            <div className="d-flex justify-content-between mt-2">
              <span>Patient Balance </span> <span>$13.24</span>
            </div>
            <hr />
            <div className="d-flex justify-content-between mt-2">
              <span>Total </span> <span className="text-success">$85.00</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Check;

