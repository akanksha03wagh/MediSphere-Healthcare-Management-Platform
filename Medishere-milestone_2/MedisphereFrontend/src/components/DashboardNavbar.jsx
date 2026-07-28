import { Link } from "react-router-dom";
import {
  FaBell,
  FaUserCircle,
  FaCalendarAlt,
  FaFileMedical,
  FaMoneyBillWave,
  FaUser,
  FaThLarge,
  FaChevronDown,
  FaCog,
  FaKey,
  FaSignOutAlt
} from "react-icons/fa";
import { useState } from "react";

function DashboardNavbar() {

  const patient = JSON.parse(localStorage.getItem("loggedInPatient"));

  const [openMenu, setOpenMenu] = useState(false);

  return (

    <nav className="dashboard-navbar">

      <div className="dashboard-logo">
        🏥 <span>Medisphere</span>
      </div>

      <ul className="dashboard-menu">

        <li>
          <Link to="/patient-dashboard">
            <FaThLarge /> Dashboard
          </Link>
        </li>

        <li>
          <Link to="/appointments">
            <FaCalendarAlt /> Appointments
          </Link>
        </li>

        <li>
          <Link to="/prescriptions">
            <FaFileMedical /> Prescriptions
          </Link>
        </li>

        <li>
          <Link to="/bills">
            <FaMoneyBillWave /> Bills
          </Link>
        </li>

      </ul>

      <div className="dashboard-right">

        <div className="notification">

          <FaBell />

          <span className="notification-count">
            2
          </span>

        </div>

        <div className="profile-dropdown">

          <button
            className="profile-button"
            onClick={() => setOpenMenu(!openMenu)}
          >
            <FaUserCircle className="profile-icon" />

            <span>{patient?.name}</span>

            <FaChevronDown />
          </button>

          {openMenu && (

            <div className="dropdown-menu-custom">

              <Link to="/profile">
                <FaUser /> My Profile
              </Link>

              <Link to="/settings">
                <FaCog /> Settings
              </Link>

              <Link to="/change-password">
                <FaKey /> Change Password
              </Link>

              <hr />

              <button
    className="logout-btn"
    onClick={() => {

        localStorage.removeItem("loggedInPatient");

        window.location.href="/";

    }}
>

    <FaSignOutAlt />

    Logout

</button>

            </div>

          )}

        </div>

      </div>

    </nav>

  );
}

export default DashboardNavbar;