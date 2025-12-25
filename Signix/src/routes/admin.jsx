import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page from "../pages/admin/admin";
import { AddCompany } from "../pages/superadmin/addcompany";
import { ViewCompany } from "../pages/superadmin/viewcompany";
import  CompanyList  from "../pages/superadmin/companylist";
import { AddEmployees } from "../pages/admin/addemployees";

export const AdminRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/admin/dashboard" element={<Page />} />
          <Route path="/admin/addCompany" element={<AddCompany/>} />
          <Route path="/admin/ViewCompany" element={<ViewCompany/>}/>
          <Route path="/admin/listcompanies" element={<CompanyList/>}/>
          <Route path="/admin/addEmployee" element={<AddEmployees/>}/>

        </Routes>
      </BrowserRouter>
    </>
  );
};
