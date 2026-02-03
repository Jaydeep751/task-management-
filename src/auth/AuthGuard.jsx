import { Navigate } from "react-router-dom";

const AuthGuard = ({ children, required = true, redirectTo = "/Login" }) => {
  const authData = JSON.parse(localStorage.getItem("loginData"));
  const isAuthenticated = !!authData;

  if (required && !isAuthenticated) {
    return <Navigate to={redirectTo} replace />;
  }

  if (!required && isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

export default AuthGuard;
