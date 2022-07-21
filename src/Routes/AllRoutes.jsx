import React from "react";
import { Routes, Route } from "react-router-dom";
import BecomeHost from "../Pages/BecomeHost";
import HomePage from "../Pages/HomePage";
import Location from "../Pages/Location";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/loc" element={<Location />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/BecomeHost" element={<BecomeHost />} />
    </Routes>
  );
};

export default AllRoutes;
