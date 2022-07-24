import { useContext } from "react";
import { UserContext } from "./Utils/UserContext";
import { Navigate, Outlet } from "react-router-dom";

function Protect() {
  const { user } = useContext(UserContext);

  return user ? <Outlet /> : <Navigate to="/login" />;
}

export default Protect;
