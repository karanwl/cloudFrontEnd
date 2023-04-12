import React,{useState,useEffect} from 'react';
import "./Leads.css";

export default function Leads() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const usernameSession = localStorage.getItem("username");
  
  if (isLoggedIn === false || isLoggedIn === null || usernameSession === null) {
    //alert("Invalid username or password.");
    // redirect to home page or some other authorized page
    window.location.href = "/";
  }

  const [leads, setLeads] = useState([]);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/karanwl/cloudFrontEnd/main/datajson/leads.json")
      .then((response) => response.json())
      .then((data) => setLeads(data.leads_obj));
  }, []);


  return (
      <div class="leads-content">
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
                <th>Username</th>
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
                  <td>{lead.username}</td>
                  <td>
                    <a href={`/viewlead/${lead.id}`}>View</a>
                    <br/>

                    {isLoggedIn && usernameSession === lead.username ? (
                      <a href={`/editlead/${lead.id}`}>Edit</a>
                    ) : null}
                    <br/>

                    {isLoggedIn && usernameSession === lead.username ? (
                      <a href={`/deletelead/${lead.id}`}>Delete</a>
                    ) : null}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
  );
}