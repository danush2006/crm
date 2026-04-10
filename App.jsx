import { useState } from "react";
import { CRMProvider } from "./context/CRMContext";

import Dashboard from "./pages/Dashboard";
import Customers from "./pages/Customers";
import Leads from "./pages/Leads";

export default function App() {
  const [page, setPage] = useState("dashboard");
  const [darkMode, setDarkMode] = useState(true);

  return (
    <CRMProvider>
      <div className={darkMode ? "dark" : "light"}>
        <div className="app">

          {/* Sidebar */}
          <div className="sidebar">
            <h2 className="logo">CRM</h2>

            <button onClick={() => setPage("dashboard")}>
              📊 Dashboard
            </button>

            <button onClick={() => setPage("customers")}>
              👥 Customers
            </button>

            <button onClick={() => setPage("leads")}>
              📈 Leads
            </button>

            <button onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
            </button>
          </div>

          {/* Content */}
          <div className="content">
            {page === "dashboard" && <Dashboard />}
            {page === "customers" && <Customers />}
            {page === "leads" && <Leads />}
          </div>

        </div>
      </div>
    </CRMProvider>
  );
}