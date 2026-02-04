import { Navigate } from "react-router-dom";
import Login from "../pages/Login";

const AuthGuard = ({ children, required = true, redirectTo = "/Login" }) => {
  const loginData = JSON.parse(localStorage.getItem("loginData"));
  const isAuthenticated = !!loginData;

  if (required && !isAuthenticated) {
    return <Navigate to={redirectTo} replace />;
  }

  if (!required && isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

export default AuthGuard;
