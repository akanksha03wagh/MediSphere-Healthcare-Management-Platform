import { useEffect, useState } from "react";
import DashboardNavbar from "../components/DashboardNavbar";
import DashboardFooter from "../components/DashboardFooter";
import { getAllAppointments } from "../api/appointmentApi";

import {
  FaUserMd,
  FaCalendarAlt,
  FaClock,
  FaNotesMedical,
  FaCheckCircle
} from "react-icons/fa";

import "../styles/MyAppointments.css";

function MyAppointments() {

    const [appointments, setAppointments] = useState([]);

    useEffect(() => {

        loadAppointments();

    }, []);

    const loadAppointments = async () => {

        try {

            const response = await getAllAppointments();

            setAppointments(response.data);

        } catch (error) {

            console.error(error);

        }

    };

    return (

        <>

            <DashboardNavbar />

            <div className="appointments-page">

                <div className="appointments-header">

                    <h2>📋 My Appointments</h2>

                    <p>
                        View all your booked appointments.
                    </p>

                </div>

                <div className="appointments-grid">

                    {appointments.map((appointment) => (

                        <div
                            className="appointment-card"
                            key={appointment.id}
                        >

                            <div className="appointment-top">

                                <h3>

                                    <FaUserMd />

                                    {appointment.doctorName}

                                </h3>

                                <span
                                    className={`status ${appointment.status.toLowerCase()}`}
                                >

                                    {appointment.status}

                                </span>

                            </div>

                            <p>

                                <strong>Specialization:</strong>

                                {appointment.specialization}

                            </p>

                            <p>

                                <FaCalendarAlt />

                                {appointment.appointmentDate}

                            </p>

                            <p>

                                <FaClock />

                                {appointment.appointmentTime}

                            </p>

                            <p>

                                <FaNotesMedical />

                                {appointment.reason}

                            </p>

                            <button>

                                <FaCheckCircle />

                                View Details

                            </button>

                        </div>

                    ))}

                </div>

            </div>

            <DashboardFooter />

        </>

    );

}

export default MyAppointments;