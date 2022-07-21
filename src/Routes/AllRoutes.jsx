import React from "react";
import { Routes, Route } from "react-router-dom";
import { CheckoutPage } from "../Pages/CheckoutPage";
import { FilterPage } from "../Pages/FilterPage";
import HomePage from "../Pages/HomePage";
import Location from "../Pages/Location";
import Zms from "../Pages/Zms";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/location" element={<Location />} />
      <Route path="/filterpage" element={<FilterPage />}></Route>
      <Route path="/checkoutpage" element={<CheckoutPage />}></Route>
      <Route path="/zms" element={<Zms />}></Route>
    </Routes>
  );
};

export default AllRoutes;
