import { useState, useContext, useEffect } from "react";
import { CRMContext } from "../context/CRMContext";

const CustomerForm = ({ editData, setEditData }) => {
  const { addCustomer, updateCustomer } = useContext(CRMContext);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    if (editData) setForm(editData);
  }, [editData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editData) {
      updateCustomer(form);
      setEditData(null);
    } else {
      addCustomer(form);
    }

    setForm({ name: "", email: "", phone: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="form-card">
      <h3>{editData ? "Edit Customer" : "Add Customer"}</h3>

      <input
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <input
        placeholder="Phone"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />

      <button>{editData ? "Update" : "Add"}</button>
    </form>
  );
};

export default CustomerForm;