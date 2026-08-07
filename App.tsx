import "./styles.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import IntegrationHealth from "./pages/IntegrationHealth";
import SelectApplicationType from "./pages/SelectApplicationType";
import PropertyDetails from "./pages/PropertyDetails";
import ApplicationFormDetails from "./pages/ApplicationFormDetails";
import ApplicationReview from "./pages/ApplicationReview";
import ApplicationConfirmation from "./pages/ApplicationConfirmation";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import FeeConfigurations from "./pages/FeeConfigurations";
import ApplicantDashboard from "./pages/ApplicantDashboard";
import MuniromWebhookStatus from "./pages/MuniromWebhookStatus";

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>

      <Routes>
        <Route element={<Layout />}>
                <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin/integrations" element={<IntegrationHealth />} />
      <Route path="/apply/select-type" element={<SelectApplicationType />} />
      <Route path="/apply/property-details" element={<PropertyDetails />} />
      <Route path="/apply/form-details" element={<ApplicationFormDetails />} />
      <Route path="/apply/review" element={<ApplicationReview />} />
      <Route path="/apply/confirmation" element={<ApplicationConfirmation />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/admin/fee-configurations" element={<FeeConfigurations />} />
      <Route path="/dashboard" element={<ApplicantDashboard />} />
      <Route path="/api/webhooks/munirom" element={<MuniromWebhookStatus />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;