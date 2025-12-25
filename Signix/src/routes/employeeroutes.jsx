import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Employee } from "../pages/employees/employee"

export const EmployeeRoutes=()=>{
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/employee/dashboard" element={<Employee/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}