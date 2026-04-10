import { useState } from "react";
import CustomerForm from "../components/CustomerForm";
import CustomerTable from "../components/CustomerTable";

const Customers = () => {
  const [editData, setEditData] = useState(null);

  return (
    <div>
      <h1>Customers</h1>

      <CustomerForm editData={editData} setEditData={setEditData} />

      <CustomerTable setEditData={setEditData} />
    </div>
  );
};

export default Customers;