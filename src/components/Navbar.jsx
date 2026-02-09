import React from "react";
import "../index.css";

function Navbar({ title, onLogout, onAddTaskBtnClick, isFormOpen }) {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>{title}</h1>
      </div>

      <div className="navbar-actions">
        <button
          className={isFormOpen ? "btn-secondary" : "btn-primary"}
          onClick={onAddTaskBtnClick}
        >
          {isFormOpen ? "Close" : "Add Task"}
        </button>
        <button className="btn-secondary" onClick={onLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;