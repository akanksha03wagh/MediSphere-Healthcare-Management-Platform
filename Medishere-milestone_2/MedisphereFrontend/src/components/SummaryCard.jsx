import React from "react";

function SummaryCard({ title, value, icon, color }) {
  return (
    <div
      className="summary-card"
      style={{
        borderTop: `5px solid ${color}`
      }}
    >
      <div className="summary-icon">
        {icon}
      </div>

      <h2>{value}</h2>

      <p>{title}</p>
    </div>
  );
}

export default SummaryCard;