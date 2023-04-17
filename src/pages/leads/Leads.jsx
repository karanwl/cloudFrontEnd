import React, { useState, useEffect } from 'react';
import "./Leads.css";
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa';

export default function Leads() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const usernameSession = localStorage.getItem("username");

  const [selectedLead, setSelectedLead] = useState(null);

  useEffect(() => {
    const handlePopupClick = (event) => {
      if (event.target === document.querySelector(".popup")) {
        setSelectedLead(null);
      }
    };
  
    document.addEventListener("click", handlePopupClick);
  
    return () => {
      document.removeEventListener("click", handlePopupClick);
    };
  }, [selectedLead]);
  
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/karanwl/cloudFrontEnd/main/datajson/leads.json")
      .then((response) => response.json())
      .then((data) => setLeads(data.leads_obj));
  }, []);

  const handleViewLead = (lead) => {
    setSelectedLead(lead);
  }  

  const handleEditLead = (id) => {
    window.location.href = `/editlead/${id}`;
  }

  const handleDeleteLead = (id) => {
    window.location.href = `/deletelead/${id}`;
  }

  return (
    <div className="leads-content">
      <h1>Leads List</h1>
      <a href="/addlead" className="body-button">
        Add new Lead
      </a>
      <div className="leads-table">
        <table>
          <thead>
            <tr>
              <th>Company Name</th>
              <th>Person Name</th>
              <th>Company Website</th>
              <th>Company Address</th>
              <th>Email Address</th>
              <th>Phone Number</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <tr key={lead.id}>
                <td>{lead.company_name}</td>
                <td>{lead.person_name}</td>
                <td>{lead.company_website}</td>
                <td>{lead.company_address}</td>
                <td>{lead.email_address}</td>
                <td>{lead.telephone_numbers}</td>
                <td>
                  <button onClick={() => handleViewLead(lead)}>
                    <FaEye />
                  </button>
                  {isLoggedIn && usernameSession === lead.username ? (
                    <>
                      <button onClick={() => handleEditLead(lead.id)}>
                        <FaEdit />
                      </button>
                      <button onClick={() => handleDeleteLead(lead.id)}>
                        <FaTrash />
                      </button>
                    </>
                  ) : null}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {selectedLead && (
  <div className="popup">
    <div className="popup-content">
      <button className="popup-close" onClick={() => setSelectedLead(null)}>
        X
      </button>
      <h2>{selectedLead.company_name}</h2>
      <p>{selectedLead.person_name}</p>
      <p>{selectedLead.company_website}</p>
      <p>{selectedLead.company_address}</p>
      <p>{selectedLead.email_address}</p>
      <p>{selectedLead.telephone_numbers}</p>
    </div>
  </div>
)}
    </div>
  );
}

