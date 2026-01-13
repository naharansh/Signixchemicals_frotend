import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AddCompany } from "../pages/superadmin/addcompany";
import { HelpDesk } from "../pages/superadmin/helpdesk";
import { ViewCompany } from "../pages/superadmin/viewcompany";
import CompanyList from "../pages/superadmin/companylist";
import { Subscription } from "../pages/superadmin/subscrition";
import ActivityLog from "../pages/superadmin/activitylog";
import { Password_Change } from "../pages/superadmin/password_change";

export const SuperAdmin = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/superadmin/addCompany" element={<AddCompany />} />
          <Route path="/superadmin/ViewCompany/:id" element={<ViewCompany />} />
          <Route path="/superadmin/listcompanies" element={<CompanyList />} />
          <Route path="/superadmin/helpdesk" element={<HelpDesk />} />
          <Route path="/superadmin/subscription" element={<Subscription />} />
          <Route path="/superadmin/activity" element={<ActivityLog />} />
           <Route path="/superadmin/Password_change" element={<Password_Change/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};
