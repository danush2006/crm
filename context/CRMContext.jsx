import { createContext, useState } from "react";

export const CRMContext = createContext();

export const CRMProvider = ({ children }) => {
  const [customers, setCustomers] = useState([]);
  const [leads, setLeads] = useState([]);

  // CUSTOMER
  const addCustomer = (customer) => {
    setCustomers([...customers, { ...customer, id: Date.now() }]);
  };

  const deleteCustomer = (id) => {
    setCustomers(customers.filter((c) => c.id !== id));
  };

  const updateCustomer = (updatedCustomer) => {
    setCustomers(
      customers.map((c) =>
        c.id === updatedCustomer.id ? updatedCustomer : c
      )
    );
  };

  // LEADS
  const addLead = (lead) => {
    setLeads([...leads, { ...lead, id: Date.now() }]);
  };

  const deleteLead = (id) => {
    setLeads(leads.filter((l) => l.id !== id));
  };

  const convertToCustomer = (lead) => {
    addCustomer(lead);
    deleteLead(lead.id);
  };

  return (
    <CRMContext.Provider
      value={{
        customers,
        leads,
        addCustomer,
        deleteCustomer,
        updateCustomer,
        addLead,
        deleteLead,
        convertToCustomer,
      }}
    >
      {children}
    </CRMContext.Provider>
  );
};