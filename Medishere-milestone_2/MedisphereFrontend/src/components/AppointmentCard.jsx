import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaUserMd } from "react-icons/fa";

function AppointmentCard() {
  return (
    <div className="appointment-card">

      <div className="appointment-header">
        <h2>Upcoming Appointment</h2>

        <span className="status confirmed">
          Confirmed
        </span>
      </div>

      <div className="doctor-info">

        <div className="doctor-avatar">
          <FaUserMd />
        </div>

        <div>

          <h3>Dr. Rahul Sharma</h3>

          <p>Cardiologist</p>

        </div>

      </div>

      <div className="appointment-details">

        <p>
          <FaCalendarAlt /> 25 July 2026
        </p>

        <p>
          <FaClock /> 10:30 AM
        </p>

        <p>
          <FaMapMarkerAlt /> Room 302
        </p>

      </div>

      <button className="details-btn">
        View Details
      </button>

    </div>
  );
}

export default AppointmentCard;