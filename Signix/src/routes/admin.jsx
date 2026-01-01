import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page from "../pages/admin/admin";
import { AddCompany } from "../pages/superadmin/addcompany";
import { ViewCompany } from "../pages/superadmin/viewcompany";
import CompanyList from "../pages/superadmin/companylist";
import { AddEmployees } from "../pages/admin/addemployees";
import { ViewEmployee } from "../pages/admin/viewemployees";
import { ViewEmployees } from "../pages/admin/viewemployee";
import MasterCategoryPage from "../pages/superadmin/department";
import { HelpDesk } from "../pages/admin/helpdesk";
import { Sections } from "../pages/admin/AddLead";
import { ListEmployees } from "../pages/admin/listemployees";
import { LeaveApply } from "../pages/admin/leave";
export const AdminRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path=" " element={<Page />} />
          <Route path="/admin/addCompany" element={<AddCompany />} />
          <Route path="/admin/ViewCompany/:id" element={<ViewCompany />} />
          <Route path="/admin/listcompanies" element={<CompanyList />} />
          <Route path="/admin/addEmployee" element={<AddEmployees />} />
          <Route path="/admin/EmployeeList" element={<ViewEmployee />} />
          <Route path="/admin/viewEmployee/:id" element={<ViewEmployees />} />
          <Route path="/admin/department" element={<MasterCategoryPage />} />
          <Route path="/admin/helpdesk" element={<HelpDesk/>}/>
          <Route path="/admin/lead" element={<Sections/>}/>
          <Route path="/admin/employeeslist" element={<ListEmployees/>}/>
          <Route path="/admin/leaveapply" element={<LeaveApply/>}/>

        </Routes>
      </BrowserRouter>
    </>
  );
};
