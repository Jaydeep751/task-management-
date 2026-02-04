import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import AuthGuard from "./auth/AuthGuard.jsx";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";

const DefaultRoute = () => {
  const loginData = JSON.parse(localStorage.getItem("loginData"));
  if (loginData) {
    return <Navigate to="/dashboard" replace />;
  }
  return <Navigate to="/Login" replace />;
};
function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <DefaultRoute />,
    },
    {
      path: "/Login",
      element: (
        <AuthGuard required={false}>
          <Login />
        </AuthGuard>
      ),
    },
    {
      path: "/Register",
      element: (
        <AuthGuard required={false}>
          <Register />
        </AuthGuard>
      ),
    },
    {
      path: "/dashboard",
      element: (
        <AuthGuard required={true}>
          <Dashboard />
        </AuthGuard>
      ),
    },
  ]);

  return <RouterProvider router={route} />;
}
export default App;
