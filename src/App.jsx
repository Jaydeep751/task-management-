import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./compoinents/Header";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const route = createBrowserRouter([
    
    {
    path: "/login",
    element:<Login/>
    },
    {
      path:"/register",
      element:<Register/>
    }

  ]);

  return <RouterProvider router={route} />;
}
export default App;
