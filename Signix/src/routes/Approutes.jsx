import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Login } from "../pages/auth/login";
import { FactorOTP, GenerateOTP } from "../pages/auth/generateotp";
import { ForgotPassword, NewPassword } from "../pages/auth/forgetPassword";
import { Password_Change } from "../pages/superadmin/password_change";

export const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/verify_otp" element={<GenerateOTP />} />
          <Route path="/two_factor" element={<FactorOTP />} />
          <Route path="/forget_password" element={<ForgotPassword/>}/>
          <Route path="/newPassword" element={<NewPassword/>}/>
         
          
        </Routes>
      </BrowserRouter>
    </>
  );
};
