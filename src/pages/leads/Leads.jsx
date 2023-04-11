import "./Leads.css";

export default function Leads() {
  return (
      <div class="leads-content">
        <h1>Leads List</h1>
        <a href="/addlead" className="body-button">
          Add new Lead
        </a>
        <div className="leads-table">
          <table>
            <tr>
              <th>Name</th>
              <th>Primary Phone Number</th>
              <th>Secondary Phone Number</th>
              <th>Email Address</th>
              <th>Company Website</th>
              <th>Company Address</th>
              <th>Actions</th>
            </tr>
            <tr>
              <td>lorem ipsum</td>
              <td>lorem ipsum</td>
              <td>lorem ipsum</td>
              <td>lorem ipsum</td>
              <td>lorem ipsum</td>
              <td>lorem ipsum</td>
              <td>
                <a href="/viewlead">View</a>
                <a href="/editlead">Edit</a>
                <a href="/deletelead">Delete</a>
              </td>
            </tr>
            <tr>
              <td>lorem ipsum</td>
              <td>lorem ipsum</td>
              <td>lorem ipsum</td>
              <td>lorem ipsum</td>
              <td>lorem ipsum</td>
              <td>lorem ipsum</td>
              <td>
                <a href="/viewlead">View</a>
                <a href="/editlead">Edit</a>
                <a href="/deletelead">Delete</a>
              </td>
            </tr>
          </table>
        </div>
      </div>
  );
}
