import {
  FaHeartbeat,
  FaWeight,
  FaRulerVertical,
  FaTint
} from "react-icons/fa";

function HealthSummary() {

  return (

    <div className="health-card">

      <h2>❤️ Health Summary</h2>

      <div className="health-item">
        <FaHeartbeat />
        <span>Blood Pressure</span>
        <strong>120 / 80</strong>
      </div>

      <div className="health-item">
        <FaWeight />
        <span>Weight</span>
        <strong>65 kg</strong>
      </div>

      <div className="health-item">
        <FaRulerVertical />
        <span>Height</span>
        <strong>170 cm</strong>
      </div>

      <div className="health-item">
        <FaTint />
        <span>Blood Group</span>
        <strong>O+</strong>
      </div>

      <div className="health-item">
        <span>BMI</span>
        <strong>22.4</strong>
      </div>

    </div>

  );

}

export default HealthSummary;