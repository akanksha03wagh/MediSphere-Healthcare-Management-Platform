import { FaCalendarCheck, FaClipboardList } from "react-icons/fa";
import { Link } from "react-router-dom";
import doctorImage from "../assets/images/hero.png";

function DashboardHero() {

    const patient = JSON.parse(localStorage.getItem("loggedInPatient"));

    return (

        <section className="dashboard-hero">

            <div className="hero-content">

                <h1>
                    👋 Welcome Back, {patient?.name}
                </h1>

                <p>

                    Welcome to your personalized Medisphere dashboard.

                    Manage your appointments, prescriptions, bills,

                    medical records and healthcare journey with ease.

                </p>

                <div style={{marginBottom:"20px"}}>

                    <p><strong>Email:</strong> {patient?.email}</p>

                    <p><strong>Mobile:</strong> {patient?.mobile}</p>

                </div>

                <div className="hero-buttons">

                    <Link to="/book-appointment">

                        <button className="primary-btn">

                            <FaCalendarCheck />

                            Book Appointment

                        </button>

                    </Link>

                    <Link to="/appointments">

                        <button className="secondary-btn">

                            <FaClipboardList />

                            My Appointments

                        </button>

                    </Link>

                </div>

            </div>

            <div className="hero-image">

                <img
                    src={doctorImage}
                    alt="Healthcare"
                />

            </div>

        </section>

    );

}

export default DashboardHero;