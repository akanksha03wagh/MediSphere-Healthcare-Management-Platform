import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaArrowRight,
} from "react-icons/fa";

import doctorImage from "../assets/images/doctor-login.png";
import logo from "../assets/images/logo.png";

import "./Login.css";

function Login() {
  const { role } = useParams();

  const [showPassword, setShowPassword] = useState(false);

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Spring Boot Backend will be connected next.");
  };

  return (
    <div className="login-page">
      <div className="login-container">

        {/* LEFT */}

        <div className="login-left">

          <img
            src={doctorImage}
            alt="Doctor"
            className="doctor-image"
          />

        </div>

        {/* RIGHT */}

        <div className="login-right">

          <div className="login-card">

            <img
              src={logo}
              alt="Logo"
              className="login-logo"
            />

            <h2>Welcome Back</h2>

            <p>
              Login as <b>{role}</b>
            </p>

            <form onSubmit={handleSubmit}>

              <div className="input-group-custom">

                <FaEnvelope className="input-icon" />

                <input
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  value={loginData.email}
                  onChange={handleChange}
                  required
                />

              </div>

              <div className="input-group-custom">

                <FaLock className="input-icon" />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  value={loginData.password}
                  onChange={handleChange}
                  required
                />

                <span
                  className="eye-icon"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>

              </div>

              <div className="login-options">

                <label>

                  <input type="checkbox" />

                  Remember Me

                </label>

                <a href="#">Forgot Password?</a>

              </div>

              <button type="submit">

                Login

                <FaArrowRight />

              </button>

            </form>

            {role === "patient" && (

              <p className="register-text">

                Don't have an account?

                <Link to="/register">

                  Register Now

                </Link>

              </p>

            )}

          </div>

        </div>

      </div>
    </div>
  );
}

export default Login;