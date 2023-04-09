export default function Header() {
  return (
    <nav class="navbar navbar-light bg-light">
      <a class="nav-link" href="/">
        Home
      </a>
      <a class="nav-link" href="/leads">
        Leads
      </a>
      <a class="nav-link" href="/addlead">
        Add Lead
      </a>
      <a class="nav-link" href="/editlead">
        Edit Lead
      </a>
      <a class="nav-link" href="/viewlead">
        View Lead
      </a>
      <a class="nav-link" href="/login">
        Logout
      </a>
    </nav>
  );
}