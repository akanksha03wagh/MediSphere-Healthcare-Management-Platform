import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt
} from "react-icons/fa";

function DashboardFooter() {
  return (
    <footer className="dashboard-footer">

      <div className="footer-container">

        {/* Company */}

        <div className="footer-section">

          <h2>🏥 Medisphere</h2>

          <p>
            Providing secure, reliable and modern healthcare
            management solutions for patients, doctors and hospitals.
          </p>

        </div>

        {/* Quick Links */}

        <div className="footer-section">

          <h3>Quick Links</h3>

          <ul>

            <li>Dashboard</li>
            <li>Appointments</li>
            <li>Prescriptions</li>
            <li>Bills</li>
            <li>Lab Reports</li>

          </ul>

        </div>

        {/* Contact */}

        <div className="footer-section">

          <h3>Contact</h3>

          <p><FaEnvelope /> support@medisphere.com</p>

          <p><FaPhone /> +91 98765 43210</p>

          <p><FaMapMarkerAlt /> Pune, Maharashtra</p>

        </div>

        {/* Social */}

        <div className="footer-section">

          <h3>Follow Us</h3>

          <div className="social-icons">

            <FaFacebookF />

            <FaTwitter />

            <FaLinkedinIn />

            <FaInstagram />

          </div>

        </div>

      </div>

      <hr />

      <p className="copyright">

        © 2026 Medisphere Healthcare Management Platform.
        All Rights Reserved.

      </p>

    </footer>
  );
}

export default DashboardFooter;