import { useState, useContext } from "react";
import { CRMContext } from "../context/CRMContext";

const LeadForm = () => {
  const { addLead } = useContext(CRMContext);

  const [lead, setLead] = useState({
    name: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addLead(lead);
    setLead({ name: "", email: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="form-card">
      <h3>Add Lead</h3>

      <input
        placeholder="Name"
        value={lead.name}
        onChange={(e) => setLead({ ...lead, name: e.target.value })}
      />

      <input
        placeholder="Email"
        value={lead.email}
        onChange={(e) => setLead({ ...lead, email: e.target.value })}
      />

      <button>Add Lead</button>
    </form>
  );
};

export default LeadForm;