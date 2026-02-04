import "../index.css";
import React from "react";

function Navbar({ title, onLogout }) {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>{title}</h1>
      </div>

      <div className="navbar-actions">
        <button className="btn-primary">Add Task</button>
        <button className="btn-secondary" onClick={onLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
