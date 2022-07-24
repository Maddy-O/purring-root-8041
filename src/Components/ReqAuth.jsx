import { Navigate, useLocation } from "react-router-dom";

const ReqAuth = ({ children, isAuth }) => {
  let location = useLocation();

  if (!isAuth) {
    return <Navigate to={"/login"} state={{ from: location }} />;
  }
  return children;
};

export default ReqAuth;
