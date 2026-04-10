import { useContext } from "react";
import { CRMContext } from "../context/CRMContext";
import LeadForm from "../components/LeadForm";

const Leads = () => {
  const { leads, deleteLead, convertToCustomer } =
    useContext(CRMContext);

  return (
    <div>
      <h1>Leads</h1>

      <LeadForm />

      {leads.length === 0 ? (
        <p>No leads available</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {leads.map((l) => (
              <tr key={l.id}>
                <td>{l.name}</td>
                <td>{l.email}</td>
                <td>
                  <button onClick={() => convertToCustomer(l)}>
                    Convert
                  </button>
                  <button onClick={() => deleteLead(l.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Leads;