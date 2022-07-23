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
import Signup from "../Pages/Signup";
import Login from "../Pages/Login";
import ReqAuth from "../Components/ReqAuth";
import Navbar from "../Components/Navbar";
import { Bank } from "../Payment/Bank";
import { PaymentOptions } from "../Payment/PaymentOptions";

const AllRoutes = () => {
  const [items, setitems] = useState("");
  const [isAuth, setIsAuth] = useState(false);
  const [selectPickupPoint, setPickupPoint] = useState(false);
  const [dateData, setDateData] = useState({
    startDate: "",
    enDate: "",
  });

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <>
      <Navbar setIsAuth={setIsAuth} isAuth={isAuth} />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              point={selectPickupPoint}
              dateData={dateData}
              setIsAuth={setIsAuth}
            />
          }
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
        <Route
          path="/filterpage/checkoutpage"
          element={
            <ReqAuth isAuth={isAuth}>
              <CheckoutPage />
            </ReqAuth>
          }
        />
        <Route path="/zms" element={<Zms />} />
        <Route path="/hosts" element={<Hosts />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/payment_options" element={<PaymentOptions />} />
        <Route path="/payment_options/bank" element={<Bank />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
