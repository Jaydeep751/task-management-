import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="form-container">
      <h1 className="form-title">Welcome Back</h1>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" className="btn-primary">
          Login
        </button>
      </form>
      <p className="link-text">
        Don't have an account? <Link to="/register">Register hear</Link>
      </p>
    </div>
  );
};

export default Login;
