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
import { Toggles } from "../pages/admin/attendencs";
import FrappeGantt from "../pages/admin/testing";
import { Uploads } from "../pages/admin/document";
import { Subscription } from "../pages/superadmin/subscrition";
import { AddLeads } from "../pages/admin/addLeads";
import { AddBranch } from "../pages/admin/addBranch";
import { ViewsLeads } from "../pages/admin/viewLead";
import { ViewBranch } from "../pages/admin/viewBranch";
import { ViewOrder } from "../pages/admin/viewOrder";
import { OrderList } from "../pages/admin/orderList";
import { ProductList } from "../pages/admin/productlist";
import { AddProducts } from "../pages/admin/addProduct";
import { AddOrder } from "../pages/admin/addOrder";

export const AdminRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/admin/dashboard" element={<Page />} />
          <Route path="/admin/addCompany" element={<AddCompany />} />
          <Route path="/admin/ViewCompany/:id" element={<ViewCompany />} />
          <Route path="/admin/listcompanies" element={<CompanyList />} />
          <Route path="/admin/addEmployee" element={<AddEmployees />} />
          <Route path="/admin/EmployeeList" element={<ViewEmployee />} />
          <Route path="/admin/viewEmployee/:id" element={<ViewEmployees />} />
          <Route path="/admin/department" element={<MasterCategoryPage />} />
          <Route path="/admin/helpdesk" element={<HelpDesk />} />
          <Route path="/admin/lead" element={<Sections />} />
          <Route path="/admin/employeeslist" element={<ListEmployees />} />
          <Route path="/admin/leaveapply" element={<LeaveApply />} />
          <Route path="/admin/attendence" element={<Toggles />} />
          <Route path="/admin/chart" element={<FrappeGantt />} />
          <Route path="/admin/upload" element={<Uploads />} />
          <Route path="/admin/subscription" element={<Subscription />} />
          <Route path="/admin/addLeads" element={<AddLeads/>}/>
          <Route path="/admin/addBranch" element={<AddBranch/>} />
          <Route path="/admin/viewLead/:id" element={<ViewsLeads/>}/>
          <Route path="/admin/viewbranch" element={<ViewBranch/>}/>
          <Route path="/admin/viewOrder" element={<ViewOrder/>}/>
          <Route path="/admin/orders" element={<OrderList/>}/>
          <Route path="/admin/productList" element={<ProductList/>}/>
          <Route path="/admin/addProduct" element={<AddProducts/>}/>
          <Route path="/admin/addOrder" element={<AddOrder/>}/>
          <Route path="/admin/Category" element/>
          <Route path='*' element={<h1>Page not found</h1>}/>
        </Routes> 
      </BrowserRouter>
    </>
  );
};
