import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import RoleSelection from "./pages/RoleSelection";
import Login from "./pages/Login";
import PatientRegister from "./pages/PatientRegister";
import PatientDashboard from "./pages/PatientDashboard";
import BookAppointment from "./pages/BookAppointment";
import MyAppointments from "./pages/MyAppointments";


function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Choose Role Page */}
        <Route path="/role" element={<RoleSelection />} />

        {/* Common Login Page */}
        <Route path="/login/:role" element={<Login />} />


        <Route path="/register" element={<PatientRegister />}  />

        <Route path="/patient-dashboard" element={<PatientDashboard />} />

        <Route path="/book-appointment" element={<BookAppointment />} />

        <Route path="/appointments" element={<MyAppointments />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;