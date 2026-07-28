import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import RoleSelection from "./pages/RoleSelection";
import Login from "./pages/Login";
import PatientRegister from "./pages/PatientRegister";

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
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;