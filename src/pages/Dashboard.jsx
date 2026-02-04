import React from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import TaskList from "../components/TaskList";

const Dashboard = () => {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    localStorage.removeItem("loginData");
    localStorage.removeItem("authData");
    //localStorage.clear();
    navigate("/Login");
  };

  return (
    <div>
      <Navbar title="Task Management" onLogout={handleLogout} />
      <h1>MY TASKS</h1>
      <TaskList />
    </div>
  );
};

export default Dashboard;
