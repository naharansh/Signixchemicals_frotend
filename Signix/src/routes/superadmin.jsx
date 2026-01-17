import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AddCompany } from "../pages/superadmin/addcompany";
import { HelpDesk } from "../pages/superadmin/helpdesk";
import { ViewCompany } from "../pages/superadmin/viewcompany";
import CompanyList from "../pages/superadmin/companylist";
import { Subscription } from "../pages/superadmin/subscrition";
import ActivityLog from "../pages/superadmin/activitylog";
import { Password_Change } from "../pages/superadmin/password_change";
import { FactorOTP } from "../pages/auth/generateotp";
import { ForgotPassword, NewPassword } from "../pages/auth/forgetPassword";
import { Login } from "../pages/auth/login";
import Page from "../pages/admin/admin";
import { RoleProvider } from "../context/rolecontex";

export const SuperAdmin = () => {
  return (
    <>
     <RoleProvider
      initialRole="superadmin">
             {" "}
             {/* 👈 provide role globally */}
            <BrowserRouter>
        <Routes>
          <Route path="/superadmin/addCompany" element={<AddCompany />} />
          <Route path="/superadmin/dasboard" element={<Page />}/>
      
          <Route path="/superadmin/listcompanies" element={<CompanyList />} />
          <Route path="/superadmin/helpdesk" element={<HelpDesk />} />
          <Route path="/superadmin/subscription" element={<Subscription />} />
          <Route path="/superadmin/activity" element={<ActivityLog />} />
          <Route path="/superadmin/login" element={<Login />} />
          <Route
            path="/superadmin/Password_change"
            element={<Password_Change />}
          />

          <Route
            path="/superadmin/two_factor"
            element={<FactorOTP role="superadmin" />}
          />
          <Route
            path="/superadmin/forget_password"
            element={<ForgotPassword role="superadmin" />}
          />
          <Route
            path="/superadmin/newPassword"
            element={<NewPassword role="superadmin" />}
          />
        </Routes>
      </BrowserRouter>
           </RoleProvider>
    </>
  );
};
