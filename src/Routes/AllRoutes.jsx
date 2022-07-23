import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { CheckoutPage } from "../Pages/CheckoutPage";
import DateTime from "../Pages/DateTime";
import { FilterPage } from "../Pages/FilterPage";
import HomePage from "../Pages/HomePage";
import Hosts from "../Pages/Hosts";
import Location from "../Pages/Location";
import PickUpPage from "../Pages/PickUpPage";
import Zms from "../Pages/Zms";
// import Signup from "../Pages/Signup";
// import Login from "../Pages/Login";

const AllRoutes = () => {
  const [items, setitems] = useState("");
  const [selectPickupPoint, setPickupPoint] = useState(false);
  const [dateData, setDateData] = useState({
    startDate: "",
    enDate: "",
  });
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  console.log(dateData);

  return (
    <Routes>
      <Route
        path="/"
        element={<HomePage point={selectPickupPoint} dateData={dateData} />}
      />
      <Route
        path="/datetime"
        element={<DateTime setDateData={setDateData} />}
      />
      <Route path="/location" element={<Location setLocation={setitems} />} />
      <Route
        path="/pickup"
        element={<PickUpPage setPoint={setPickupPoint} />}
      />
      <Route path="/filterpage" element={<FilterPage />} />
      <Route path="/filterpage/checkoutpage" element={<CheckoutPage />} />
      <Route path="/zms" element={<Zms />} />
      <Route path="/hosts" element={<Hosts />} />
      {/* <Route path="/login" element={<Login />} /> */}
      {/* <Route path="/signup" element={<Signup />} /> */}
    </Routes>
  );
};

export default AllRoutes;
