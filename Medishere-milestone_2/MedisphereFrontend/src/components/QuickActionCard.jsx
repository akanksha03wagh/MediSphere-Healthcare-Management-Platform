import { Link } from "react-router-dom";

function QuickActionCard({ title, icon, link }) {

    return (

        <Link to={link} className="quick-card">

            <div className="quick-icon">

                {icon}

            </div>

            <h3>{title}</h3>

        </Link>

    );

}

export default QuickActionCard;