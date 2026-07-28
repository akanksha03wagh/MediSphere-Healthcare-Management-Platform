import {
  FaTint,
  FaWalking,
  FaAppleAlt,
  FaBed
} from "react-icons/fa";

function HealthTips() {

  return (

    <div className="health-card">

      <h2>🌿 Today's Health Tips</h2>

      <div className="tip-item">

        <FaTint />

        Drink 2–3 liters of water.

      </div>

      <div className="tip-item">

        <FaWalking />

        Walk at least 30 minutes.

      </div>

      <div className="tip-item">

        <FaAppleAlt />

        Eat more fruits & vegetables.

      </div>

      <div className="tip-item">

        <FaBed />

        Sleep for 7–8 hours.

      </div>

    </div>

  );

}

export default HealthTips;