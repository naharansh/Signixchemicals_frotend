import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Login } from "../pages/auth/login"

export const AppRoutes=()=>{
    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
        </>
    )
}