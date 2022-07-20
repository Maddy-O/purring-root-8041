import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Location from "../Pages/Location";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/loc" element={<Location />} />
    </Routes>
  );
};

export default AllRoutes;
