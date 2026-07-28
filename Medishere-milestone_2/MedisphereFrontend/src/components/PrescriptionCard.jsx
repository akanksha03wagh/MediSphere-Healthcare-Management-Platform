import {
  FaUserMd,
  FaPills,
  FaDownload
} from "react-icons/fa";

function PrescriptionCard() {
  return (
    <div className="prescription-card">

      <div className="prescription-header">

        <h2>Recent Prescription</h2>

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

      <div className="medicine-list">

        <div className="medicine-item">
          <FaPills />
          <span>Paracetamol 500 mg</span>
        </div>

        <div className="medicine-item">
          <FaPills />
          <span>Vitamin C</span>
        </div>

        <div className="medicine-item">
          <FaPills />
          <span>Zinc Tablets</span>
        </div>

      </div>

      <p className="duration">

        <strong>Duration:</strong> 7 Days

      </p>

      <button className="download-btn">

        <FaDownload />

        Download PDF

      </button>

    </div>
  );
}

export default PrescriptionCard;