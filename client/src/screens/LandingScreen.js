import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; 

AOS.init({
  duration: 2000,
});

function LandingScreen() {
  return (
    <div className="row landing">
      <div className="col-md-12 text-center">
        <h2 data-aos="zoom-in" style={{ color: "white", fontSize: "100px" }}>
          DIGITAZON HOTEL
        </h2>
        <h1 data-aos="zoom-out" style={{ color: "white" }}>
          SI SENTE SOLO UNA COSA. IL CICALINO.
        </h1>
        <Link to="/home">
          <button className="btn btn-primary landingBtn">VAI</button>
        </Link>
      </div>
    </div>
  );
}

export default LandingScreen;
