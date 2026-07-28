
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerPatient } from "../api/patientApi";

import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaBirthdayCake,
  FaVenusMars,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaUserPlus,
  FaShieldAlt
} from "react-icons/fa";

import doctorImage from "../assets/images/doctor-login.png";
import logo from "../assets/images/logo.png";

import "./PatientRegister.css";

function PatientRegister() {

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [patient, setPatient] = useState({

    name: "",

    email: "",

    mobile: "",

    age: "",

    gender: "",

    password: "",

    confirmPassword: ""

  });

  const handleChange = (e) => {

    setPatient({
        ...patient,
        [e.target.name]: e.target.value
    });

};

 const handleSubmit = async (e) => {

    e.preventDefault();

    if (patient.password !== patient.confirmPassword) {

        alert("Passwords do not match!");

        return;

    }

    try {

        const patientData = {

            name: patient.name,
            email: patient.email,
            mobile: patient.mobile,
            age: patient.age,
            gender: patient.gender,
            password: patient.password

        };

        await registerPatient(patientData);

        alert("Registration Successful!");

        navigate("/login/patient");

    } catch (error) {

        console.error(error);

        alert("Registration Failed!");

    }

};
  return(

<div className="register-page">

<div className="register-container">

{/* LEFT */}

<div className="register-left">

<img

src={doctorImage}

alt="Doctor"

className="register-doctor"

/>

</div>

{/* RIGHT */}

<div className="register-right">

<div className="register-card">

<img

src={logo}

alt="Logo"

className="register-logo"

/>

<h2>Create Account</h2>

<p>

Create your Medisphere Patient Account

</p>

<form onSubmit={handleSubmit}>

<div className="input-box">

<FaUser className="input-icon"/>

<input

type="text"

name="name"

placeholder="Full Name"

value={patient.name}

onChange={handleChange}

required

/>

</div>

<div className="input-box">

<FaEnvelope className="input-icon"/>

<input

type="email"

name="email"

placeholder="Email Address"

value={patient.email}

onChange={handleChange}

required

/>

</div>

<div className="input-box">

<FaPhone className="input-icon"/>

<input

type="text"

name="mobile"

placeholder="Mobile Number"

value={patient.mobile}

onChange={handleChange}

required

/>

</div>

<div className="input-box">

<FaBirthdayCake className="input-icon"/>

<input

type="number"

name="age"

placeholder="Age"

value={patient.age}

onChange={handleChange}

required

/>

</div>

<div className="input-box">

<FaVenusMars className="input-icon"/>

<select

name="gender"

value={patient.gender}

onChange={handleChange}

required>

<option value="">

Select Gender

</option>

<option>

Male

</option>

<option>

Female

</option>

<option>

Other

</option>

</select>

</div>

<div className="input-box">

<FaLock className="input-icon"/>

<input

type={showPassword?"text":"password"}

name="password"

placeholder="Password"

value={patient.password}

onChange={handleChange}

required

/>

<span

className="eye-icon"

onClick={()=>setShowPassword(!showPassword)}

>

{showPassword?<FaEyeSlash/>:<FaEye/>}

</span>

</div>

<div className="input-box">

<FaLock className="input-icon"/>

<input

type={showConfirmPassword?"text":"password"}

name="confirmPassword"

placeholder="Confirm Password"

value={patient.confirmPassword}

onChange={handleChange}

required

/>

<span

className="eye-icon"

onClick={()=>setShowConfirmPassword(!showConfirmPassword)}

>

{showConfirmPassword?<FaEyeSlash/>:<FaEye/>}

</span>

</div>

<button>

<FaUserPlus/>

Register

</button>

</form>

<div className="security-box">

<FaShieldAlt/>

<span>

Your medical information is encrypted and securely stored.

</span>

</div>

<div className="login-link">

Already have an account?

<Link to="/login/patient">

 Login Here

</Link>

</div>

</div>

</div>

</div>

</div>

  );

}

export default PatientRegister;