import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { loginPatient } from "../api/loginApi";
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
 
  const navigate = useNavigate();

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

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

        const response = await loginPatient(loginData);

        if (response.data) {

    localStorage.setItem(
        "loggedInPatient",
        JSON.stringify(response.data)
    );

    alert("Login Successful!");

    navigate("/patient-dashboard");

} else {

            alert("Invalid Email or Password");

        }

    } catch (error) {

        console.error(error);

        alert("Invalid Email or Password");

    }

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