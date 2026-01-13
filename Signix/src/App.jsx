import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from "./components/ui/button.jsx"
import { AppRoutes } from './routes/Approutes.jsx'
import { AdminRoutes } from './routes/admin.jsx'
import { EmployeeRoutes } from './routes/employeeroutes.jsx'
import { SuperAdmin } from './routes/superadmin.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AppRoutes/>
      <SuperAdmin/>
      <AdminRoutes/>
      <EmployeeRoutes/>
      
    </>
  )
}

export default App
