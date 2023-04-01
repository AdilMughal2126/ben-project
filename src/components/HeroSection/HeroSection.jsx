import React from "react";
import { useState } from "react";
import Wrapper from "./Wrapper";
import dashboardIcon from "../../assets/icons8-dashboard-layout-24.png";

export default function HeroSection() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    setError("");
    e.preventDefault();
    if (!firstName || !lastName || !email) {
      setError("All fields are required");
      return;
    } else {
      alert("Form submitted successfully");
    }
  };

  return (
    <Wrapper>
      <div className="wrapper">
        <div className="row outer-wrapper">
          <div className="col-md-2 dashboard">
            <img src={dashboardIcon} alt="" /> DashBoard
          </div>
          <div className="col-md-10">
            <div className="d-flex justify-content-start main-content-container">
              <div className="d-flex flex-column justify-content-start">
                <div className="form-field">
                  <label htmlFor="first_name">First Name: </label>
                  <input
                    type="text"
                    name="first_name"
                    placeholder="Enter first name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="last_name">Last Name: </label>
                  <input
                    type="text"
                    name="first_name"
                    placeholder="Enter last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="email">Email: </label>
                  <input
                    type="text"
                    name="email"
                    placeholder="Enter your name"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="d-flex">
              <p className="text-danger">{error}</p>
            </div>
            <div className="d-flex">
              <button className="btn btn-primary" onClick={handleSubmit}>
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
