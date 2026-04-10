import { useContext } from "react";
import { CRMContext } from "../context/CRMContext";

const Dashboard = () => {
  const { customers, leads } = useContext(CRMContext);

  return (
    <div>
      <h1>Dashboard</h1>

      <div className="cards">
        <div className="card">
          <h3>Total Customers</h3>
          <p>{customers.length}</p>
        </div>

        <div className="card">
          <h3>Active Leads</h3>
          <p>{leads.length}</p>
        </div>

        <div className="card">
          <h3>Conversions</h3>
          <p>{customers.length}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;