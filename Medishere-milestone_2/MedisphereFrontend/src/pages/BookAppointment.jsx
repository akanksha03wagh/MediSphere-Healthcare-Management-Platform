import { useState } from "react";
import DashboardNavbar from "../components/DashboardNavbar";
import DashboardFooter from "../components/DashboardFooter";
import { useNavigate } from "react-router-dom";
import { bookAppointment } from "../api/appointmentApi";

import {
  FaUser,
  FaUserMd,
  FaStethoscope,
  FaCalendarAlt,
  FaClock,
  FaNotesMedical,
  FaCalendarCheck
} from "react-icons/fa";

import "../styles/BookAppointment.css";

function BookAppointment() {

  const navigate = useNavigate();

  const [appointment, setAppointment] = useState({
    patientName: "",
    doctorName: "",
    specialization: "",
    appointmentDate: "",
    appointmentTime: "",
    reason: ""
  });

  const handleChange = (e) => {
    setAppointment({
      ...appointment,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

        const appointmentData = {
            patientName: appointment.patientName,
            doctorName: appointment.doctorName,
            specialization: appointment.specialization,
            appointmentDate: appointment.appointmentDate,
            appointmentTime: appointment.appointmentTime,
            reason: appointment.reason
        };

        await bookAppointment(appointmentData);

        alert("Appointment Booked Successfully!");

        navigate("/patient-dashboard");

    } catch (error) {

        console.error(error);

        alert("Failed to Book Appointment!");

    }

};

  return (
    <>
      <DashboardNavbar />

      <div className="appointment-page">

        <div className="appointment-card">

          <h2>
            <FaCalendarCheck /> Book Appointment
          </h2>

          <p>
            Schedule your appointment with our experienced specialists.
          </p>

          <form onSubmit={handleSubmit}>

            <div className="input-box">
              <FaUser className="input-icon" />
              <input
                type="text"
                name="patientName"
                placeholder="Patient Name"
                value={appointment.patientName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-box">
              <FaUserMd className="input-icon" />
              <select
                name="doctorName"
                value={appointment.doctorName}
                onChange={handleChange}
                required
              >
                <option value="">Select Doctor</option>
                <option>Dr. Rahul Sharma</option>
                <option>Dr. Priya Mehta</option>
                <option>Dr. Amit Verma</option>
              </select>
            </div>

            <div className="input-box">
              <FaStethoscope className="input-icon" />
              <select
                name="specialization"
                value={appointment.specialization}
                onChange={handleChange}
                required
              >
                <option value="">Select Specialization</option>
                <option>Cardiology</option>
                <option>Dermatology</option>
                <option>Orthopedics</option>
                <option>Neurology</option>
                <option>General Medicine</option>
              </select>
            </div>

            <div className="input-box">
              <FaCalendarAlt className="input-icon" />
              <input
                type="date"
                name="appointmentDate"
                value={appointment.appointmentDate}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-box">
              <FaClock className="input-icon" />
              <input
                type="time"
                name="appointmentTime"
                value={appointment.appointmentTime}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-box textarea-box">
              <FaNotesMedical className="input-icon" />
              <textarea
                name="reason"
                placeholder="Reason for Visit"
                rows="4"
                value={appointment.reason}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit">
              <FaCalendarCheck />
              Book Appointment
            </button>

          </form>

        </div>

      </div>

      <DashboardFooter />
    </>
  );
}

export default BookAppointment;