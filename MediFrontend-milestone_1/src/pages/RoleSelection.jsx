import { Link } from "react-router-dom";
import { FaUserShield, FaUserMd, FaUserInjured } from "react-icons/fa";
import "./RoleSelection.css";

function RoleSelection() {
  return (
    <div className="role-page">
      <div className="container">

        <h1 className="role-title">
          Welcome to Medisphere
        </h1>

        <p className="role-subtitle">
          Choose your role to continue
        </p>

        <div className="role-container">

          {/* Admin */}
          <Link to="/login/admin" className="role-card">
            <FaUserShield className="role-icon" />
            <h3>Admin</h3>
            <p>
              Manage doctors, patients, appointments,
              billing, reports and the entire healthcare system.
            </p>
          </Link>

          {/* Doctor */}
          <Link to="/login/doctor" className="role-card">
            <FaUserMd className="role-icon" />
            <h3>Doctor</h3>
            <p>
              View appointments, patient records,
              prescribe medicines and manage treatments.
            </p>
          </Link>

          {/* Patient */}
          <Link to="/login/patient" className="role-card">
            <FaUserInjured className="role-icon" />
            <h3>Patient</h3>
            <p>
              Book appointments, view prescriptions,
              medical history and billing information.
            </p>
          </Link>

        </div>

      </div>
    </div>
  );
}

export default RoleSelection;