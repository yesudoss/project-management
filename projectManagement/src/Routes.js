import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import SignIn from "./Components/User/views/SignIn";
import Master from "./Components/Master/views/Master";
import BloodGroup from "./Components/Ancillary/BloodGroup/views/BloodGroup";
import Users from "./Components/User/views/Users";
import Company from "./Components/Master/views/Company/Company";
import Department from "./Components/Master/views/Department/Department";
import Dashboard from "./Components/Dashboard/views/Dashboard";
import PdfReportLandingPage from "./Components/PDFReport/views/PdfReportLandingPage";
import Page404 from "./Components/Base/views/Page404";
import OrgChart from "./Components/OrganizationChart/views/OrgChart";
import ForgotPassword from "./Components/User/views/ForgotPassword";
import Login from "./Components/User/views/Login";

function Routers() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<SignIn />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/forgotPassword" element={<ForgotPassword />} />
                <Route exact path="/dashboard" element={<Dashboard />} />
                <Route exact path="/users" element={<Users />} />
                <Route exact path="/master" element={<Master />} />
                <Route exact path="/bloodgroup" element={<BloodGroup />} />
                <Route exact path="/company" element={<Company />} />
                <Route exact path="/department" element={<Department />} />
                <Route exact path="/pdf" element={<PdfReportLandingPage />} />
                <Route exact path="/404" element={<Page404 />} />
                <Route exact path="/org-chart" element={<OrgChart />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Routers;
