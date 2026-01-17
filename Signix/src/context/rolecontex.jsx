// RoleContext.jsx
import { createContext, useContext, useState } from "react";

const RoleContext = createContext(null);

export const RoleProvider = ({ initialRole = null, children }) => {
  const [role, setRole] = useState(initialRole);

  return (
    <RoleContext.Provider value={{ role, setRole }}>
      {children}
    </RoleContext.Provider>
  );
};

export const useRole = () => {
  const context = useContext(RoleContext);
  if (!context) {
    throw new Error("useRole must be used within a RoleProvider");
  }
  return context;
};