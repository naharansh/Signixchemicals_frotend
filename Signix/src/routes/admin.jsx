import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page from "../pages/admin/admin";
import { AddEmployees } from "../pages/admin/addemployees";

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
import { Password_Change } from "../pages/superadmin/password_change";
import { FactorOTP } from "../pages/auth/generateotp";
import { ForgotPassword, NewPassword } from "../pages/auth/forgetPassword";
import {
  Distributor,
  HrDashboard,
  SalesDashboard,
} from "../pages/admin/hrModule";
import { ViewCompany } from "../pages/superadmin/viewcompany";


export const AdminRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          
          <Route path="/admin/ViewCompany/:id" element={<ViewCompany />} />{/*done*/}
          <Route path="/admin/dashboard" element={<Page role="admin" />} /> {/*done*/}
          <Route path="/admin/addEmployee" element={<AddEmployees />} />{/*done*/} 
         
          <Route path="/admin/viewEmployee/:id" element={<ViewEmployees />} />{/*done*/}
          <Route path="/admin/department" element={<MasterCategoryPage />} />
          <Route path="/admin/lead" element={<Sections />} />{/*done*/}
          <Route path="/admin/employeeslist" element={<ListEmployees />} />{/*done*/}
          <Route path="/admin/leaveapply" element={<LeaveApply />} />{/*done*/}
          <Route path="/admin/attendence" element={<Toggles />} />{/*done*/}
       
          <Route path="/admin/uploads" element={<Uploads />} />{/*done*/}
          <Route path="/admin/addLeads" element={<AddLeads />} />{/*done*/}
          <Route path="/admin/addBranch" element={<AddBranch />} />
          <Route path="/admin/viewLead/:id" element={<ViewsLeads />} />{/*done*/}
          <Route path="/admin/viewbranch" element={<ViewBranch />} />
          <Route path="/admin/viewOrder" element={<ViewOrder />} />{/*done*/}
          <Route path="/admin/orders" element={<OrderList />} />
          <Route path="/admin/productList" element={<ProductList />} />{/*done*/}
          <Route path="/admin/addProduct" element={<AddProducts />} />{/*done*/}
          <Route path="/admin/addOrder" element={<AddOrder />} />{/*done*/}
          <Route path="/admin/Category" element={<Category />} />
          <Route
            path="/admin/Ordermanagmentlist"
            element={<OrderManagement />}
          />{/*done*/}
          <Route path="/admin/OrderList/pending" element={<Pending />} />{/*done*/}
          <Route path="/admin/OrderList/confirmed" element={<Confirmed />} />{/*done*/}
          <Route path="/admin/OrderList/packageing" element={<Packageing />} />{/*done*/}
          <Route
            path="/admin/OrderList/outfordeleviery"
            element={<OutForDeleviry />}
          />{/*done*/}
          <Route path="/admin/OrderList/delivered" element={<Delivered />} />{/*done*/}
          <Route path="/admin/OrderList/returned" element={<Returned />} />{/*done*/}
          <Route
            path="/admin/OrderList/failed"
            element={<FailedToDelevierd />}
          />{/*done*/}
          <Route path="/admin/OrderList/cancelled" element={<Cancelled />} />{/*done*/}

          <Route path="/admin/thirdParty" element={<ThirdParty />} />

          <Route path="/admin/EmailTemplate" element={<EmailTemplate />} />
          <Route
            path="/admin/createEmailTemplate"
            element={<CreateTemplate />}
          />
          <Route path="/admin/Password_change" element={<Password_Change />} />{/*done*/}
          <Route
            path="/admin/two_factor"
            element={<FactorOTP role="admin" />}
          />{/*done*/}
          <Route
            path="/admin/forget_password"
            element={<ForgotPassword role="admin" />}
          />{/*done*/}
          <Route
            path="/admin/newPassword"
            element={<NewPassword role="admin" />}
          />{/*done*/}
          <Route path="/admin/hr/dashboard" element={<HrDashboard />} />{/*done*/}
          <Route path="/admin/sales/dashboard" element={<SalesDashboard />} />{/*done*/}
          <Route
            path="/admin/distributor/dashboard"
            element={<Distributor />}
          />{/*done*/}
        </Routes>
      </BrowserRouter>
    </>
  );
};
