import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page from "../pages/admin/admin";
import { AddEmployees } from "../pages/admin/addemployees";
import { ViewEmployee } from "../pages/admin/viewemployees";
import { ViewEmployees } from "../pages/admin/viewemployee";
import MasterCategoryPage from "../pages/superadmin/department";
import { Sections } from "../pages/admin/AddLead";
import { ListEmployees } from "../pages/admin/listemployees";
import { LeaveApply } from "../pages/admin/leave";
import { Toggles } from "../pages/admin/attendencs";
import FrappeGantt from "../pages/admin/testing";
import { Uploads } from "../pages/admin/document";
import { AddLeads } from "../pages/admin/addLeads";
import { AddBranch } from "../pages/admin/addBranch";
import { ViewsLeads } from "../pages/admin/viewLead";
import { ViewBranch } from "../pages/admin/viewBranch";
import { ViewOrder } from "../pages/admin/viewOrder";
import { OrderList } from "../pages/admin/orderList";
import { ProductList } from "../pages/admin/productlist";
import { AddProducts } from "../pages/admin/addProduct";
import { AddOrder } from "../pages/admin/addOrder";
import { Category } from "../pages/admin/category";
import { ThirdParty } from "../pages/admin/thirdparty";
import {
  Cancelled,
  Confirmed,
  Delivered,
  FailedToDelevierd,
  OrderManagement,
  OutForDeleviry,
  Packageing,
  Pending,
  Returned,
} from "../pages/admin/orderManagement";
import { CreateTemplate, EmailTemplate } from "../pages/admin/emailTemplate";

export const AdminRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/admin/dashboard" element={<Page />} />         
          <Route path="/admin/addEmployee" element={<AddEmployees />} />
          <Route path="/admin/EmployeeList" element={<ViewEmployee />} />
          <Route path="/admin/viewEmployee/:id" element={<ViewEmployees />} />
          <Route path="/admin/department" element={<MasterCategoryPage />} />      
          <Route path="/admin/lead" element={<Sections />} />
          <Route path="/admin/employeeslist" element={<ListEmployees />} />
          <Route path="/admin/leaveapply" element={<LeaveApply />} />
          <Route path="/admin/attendence" element={<Toggles />} />
          <Route path="/admin/chart" element={<FrappeGantt />} />
          <Route path=" " element={<Uploads />} />         
          <Route path="/admin/addLeads" element={<AddLeads />} />
          <Route path="/admin/addBranch" element={<AddBranch />} />
          <Route path="/admin/viewLead/:id" element={<ViewsLeads />} />
          <Route path="/admin/viewbranch" element={<ViewBranch />} />
          <Route path="/admin/viewOrder" element={<ViewOrder />} />
          <Route path="/admin/orders" element={<OrderList />} />
          <Route path="/admin/productList" element={<ProductList />} />
          <Route path="/admin/addProduct" element={<AddProducts />} />
          <Route path="/admin/addOrder" element={<AddOrder />} />
          <Route path="/admin/Category" element={<Category />} />
          <Route path="/admin/Ordermanagmentlist"element={<OrderManagement />} />
          <Route path="/admin/OrderList/pending" element={<Pending />} />
          <Route path="/admin/OrderList/confirmed" element={<Confirmed />} />
          <Route path="/admin/OrderList/packageing" element={<Packageing />} />
          <Route path="/admin/OrderList/outfordeleviery"element={<OutForDeleviry />}/>
          <Route path="/admin/OrderList/delivered" element={<Delivered />} />
          <Route path="/admin/OrderList/returned" element={<Returned />} />
          <Route path="/admin/OrderList/failed" element={<FailedToDelevierd />}   />
          <Route path="/admin/OrderList/cancelled" element={<Cancelled />} />
         
          {/* 3d party routes */}
          <Route path="/admin/thirdParty" element={<ThirdParty />} />
          {/* email template */}
             <Route
            path="/admin/EmailTemplate"
            element={<EmailTemplate />}
          />
          <Route
            path="/admin/createEmailTemplate"
            element={<CreateTemplate/>}
          />
            {/* <Route path="*" element={<h1>Page not found</h1>} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};
