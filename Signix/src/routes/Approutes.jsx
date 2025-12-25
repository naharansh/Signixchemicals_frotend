import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { Login } from "../pages/auth/login"

export const AppRoutes=()=>{
    return(
        <>
        <BrowserRouter>
            <Routes>
                 <Route path="/" element={<Navigate to="/login" replace />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
        </>
    )
}