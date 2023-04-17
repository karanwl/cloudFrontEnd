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
    fetch("https://j0dvgoy2ze.execute-api.us-east-1.amazonaws.com/api/v1/leads")
      .then((response) => response.json())
      .then((data) => setLeads(data.leads_obj));
  }, []);

  const handleViewLead = (lead) => {
    setSelectedLead(lead);
  }  

  const handleEditLead = (id) => {
    window.location.href = `/editlead/${id}`;
  }

  const handleDeleteLead = async (id) => {
    //window.location.href = `/deletelead/${id}`;

    // TODO: Handle the image upload here
    // In fetch should be included the filename anf filebytes in POST data
    try {
      const response = await fetch(`https://j0dvgoy2ze.execute-api.us-east-1.amazonaws.com/api/v1/leads/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({username: usernameSession})
      });

      const data = await response.json();
      
      // validate if the image upload process is ok
      if (data.status === "ok") {
        alert(data.msg);
        // redirect to home page or some other authorized page
        window.location.href = "/leads";
      } else {
        alert("Lead Delete error:", data.msg);
        // redirect to home page or some other authorized page
        window.location.href = "/leads";
      }
    } catch (error) {
      console.log("Lead Delete error:", error);
      alert("Lead Delete error. Please try again later.");
      // redirect to home page or some other authorized page
      window.location.href = "/leads";
    }
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

