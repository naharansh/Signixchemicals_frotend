import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page from "../pages/admin/admin";

export const AdminRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/admindashboard" element={<Page />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
