import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserLocation } from "../Redux/LocationReducer/action";
import { useNavigate } from "react-router-dom";
import NavBarBefore from "./NavBar/NavBarBefore";
import NavBarAfter from "./NavBar/NavBarAfter";

export default function Navbar({ setIsAuth }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userCity = useSelector((state) => state.LocationReducer.currLocation);
  const [userName, setUserName] = useState("");

  const handleLogout = () => {
    const loginobj = { name: "", email: "", phone: "", password: "" };
    localStorage.setItem("Logininfo", JSON.stringify(loginobj));
    setIsAuth(false);
    navigate("/Login", { replace: true });
  };

  const handleLogin = () => {
    setIsAuth(true);
    navigate("/Login", { replace: true });
  };

  useEffect(() => {
    dispatch(getUserLocation());
    const items = JSON.parse(localStorage.getItem("Logininfo"));
    if (items) {
      setUserName(items);
    }
  }, [dispatch]);

  return (
    <>
      {userName.name ? (
        <NavBarAfter
          userName={userName}
          userCity={userCity}
          handleLogout={handleLogout}
        />
      ) : (
        <NavBarBefore userCity={userCity} handleLogin={handleLogin} />
      )}
    </>
  );
}
