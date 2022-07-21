import React from "react";
import { Routes, Route } from "react-router-dom";
import { CheckoutPage } from "../Pages/CheckoutPage";
import { FilterPage } from "../Pages/FilterPage";
import HomePage from "../Pages/HomePage";
import Location from "../Pages/Location";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/loc" element={<Location />} />
      <Route path="/filterpage" element={<FilterPage />}></Route>
      <Route path="/filterpage/checkoutpage" element={<CheckoutPage />}></Route>
    </Routes>
  );
};

export default AllRoutes;
