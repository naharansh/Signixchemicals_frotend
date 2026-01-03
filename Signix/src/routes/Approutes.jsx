import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Login } from "../pages/auth/login";
import { GenerateOTP } from "../pages/auth/generateotp";

export const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/verify_otp" element={<GenerateOTP />} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
};
