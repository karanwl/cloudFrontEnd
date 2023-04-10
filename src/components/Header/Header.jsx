import "./Header.css";

export default function Header() {
  return (
    <div className="mainheader">
      <nav className="mainnav">
        <a href="/">Home</a>
        <a href="/leads">Leads</a>
        <a href="/addlead">Add Lead</a>
        <a href="/editlead">Edit Lead</a>
        <a href="/viewlead">View Lead</a>
        <a href="/login">Logout</a>
      </nav>
    </div>
  );
}
