import "./Header.css";

export default function Header() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const usernameSession = localStorage.getItem("username");

  return (
    <div className="mainheader">
      <nav className="mainnav">
        <a href="/">Home</a>

        {isLoggedIn ? (
          <a href="/leads">Leads</a>
        ) : null}

        {isLoggedIn ? (
          <a href="/addlead">Add Lead</a>
        ) : null}

        {isLoggedIn ? (
          <a href="/logout">Logout</a>
        ) : null}
      </nav>
    </div>
  );
}
