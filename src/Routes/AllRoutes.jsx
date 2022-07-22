import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { CheckoutPage } from "../Pages/CheckoutPage";
import { FilterPage } from "../Pages/FilterPage";
import HomePage from "../Pages/HomePage";
import Location from "../Pages/Location";
import PickUpPage from "../Pages/PickUpPage";
import Zms from "../Pages/Zms";

const AllRoutes = () => {
  const [items, setitems] = useState("");

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  console.log(items);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/location" element={<Location setLocation={setitems} />} />
      <Route path="/pickup" element={<PickUpPage />} />
      <Route path="/filterpage" element={<FilterPage />}></Route>
      <Route path="/filterpage/checkoutpage" element={<CheckoutPage />}></Route>
      <Route path="/zms" element={<Zms />}></Route>
    </Routes>
  );
};

export default AllRoutes;
