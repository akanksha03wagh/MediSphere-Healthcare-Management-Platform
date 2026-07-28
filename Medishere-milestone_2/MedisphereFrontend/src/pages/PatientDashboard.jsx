import DashboardNavbar from "../components/DashboardNavbar";
import DashboardHero from "../components/DashboardHero";
import {
FaCalendarAlt,
FaFileMedical,
FaNotesMedical,
FaMoneyBillWave
} from "react-icons/fa";

import SummaryCard from "../components/SummaryCard";
import QuickActionCard from "../components/QuickActionCard";

import {
FaCalendarCheck,
FaClipboardList,
FaHistory,
FaUserCircle
} from "react-icons/fa";

import AppointmentCard from "../components/AppointmentCard";
import "../styles/Dashboard.css";
import PrescriptionCard from "../components/PrescriptionCard";

import HealthSummary from "../components/HealthSummary";
import HealthTips from "../components/HealthTips";
import DashboardFooter from "../components/DashboardFooter";

function PatientDashboard() {

    return (

        <>

            <DashboardNavbar />

            <DashboardHero />
            <div className="summary-container">

<SummaryCard
title="Appointments"
value="2"
icon={<FaCalendarAlt />}
color="#0d6efd"
/>

<SummaryCard
title="Prescriptions"
value="5"
icon={<FaFileMedical />}
color="#20c997"
/>

<SummaryCard
title="Medical Records"
value="8"
icon={<FaNotesMedical />}
color="#fd7e14"
/>

<SummaryCard
title="Bills Due"
value="₹1,250"
icon={<FaMoneyBillWave />}
color="#dc3545"
/>

</div>
<h2 className="section-title">

Quick Actions

</h2>

<div className="quick-grid">

<QuickActionCard
title="Book Appointment"
icon={<FaCalendarCheck />}
link="/book-appointment"
/>

<QuickActionCard
title="My Appointments"
icon={<FaClipboardList />}
link="/appointments"
/>

<QuickActionCard
title="Prescriptions"
icon={<FaFileMedical />}
link="/prescriptions"
/>

<QuickActionCard
title="Medical History"
icon={<FaHistory />}
link="/medical-history"
/>

<QuickActionCard
title="Bills"
icon={<FaMoneyBillWave />}
link="/bills"
/>

<QuickActionCard
title="Lab Reports"
icon={<FaNotesMedical />}
link="/lab-reports"
/>

</div>

<div className="card-row">

    <AppointmentCard />

    <PrescriptionCard />

</div>

<div className="card-row">

    <HealthSummary />

    <HealthTips />
   
</div>
    <DashboardFooter />


        </>

    );

}

export default PatientDashboard;