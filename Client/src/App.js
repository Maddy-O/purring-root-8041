import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/navbarCompo/Navbar";
import Zms from "./Pages/Zms";
import Home from "./Pages/Home";
import Hosts from "./Pages/Hosts";
import Payment from "./Pages/Payment";
import Bank from "./Components/paymentCompo/Bank";
import Cars from "./Pages/Cars";
import CheckoutPage from "./Pages/CheckoutPage";
import ReqAuth from "./Components/ReqAuth";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Location from "./Pages/Location";
import { useSelector } from "react-redux";
import PickUpPage from "./Pages/PickUpPage";
import DateTime from "./Pages/DateTime";

function App() {
  const isAuth = useSelector((state) => state.AuthReducer.isAuth);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/location" element={<Location />} />
        <Route path="/datetime" element={<DateTime />} />
        <Route path="/zms" element={<Zms />} />
        <Route path="/host" element={<Hosts />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/payment/bank" element={<Bank />} />
        <Route path="/cars" element={<Cars />} />
        <Route
          path="/cars/checkout"
          element={
            <ReqAuth isAuth={isAuth}>
              <CheckoutPage />
            </ReqAuth>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pickup" element={<PickUpPage />} />
      </Routes>
    </div>
  );
}

export default App;
