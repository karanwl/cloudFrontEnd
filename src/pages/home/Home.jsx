import "./Home.css";

export default function Home() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const username = localStorage.getItem("username");

  return (
    <div className="home-content">
      {isLoggedIn ? (
        <h1>Hello, {username} !</h1>
      ) : (
        <h1>Please log in.</h1>
      )}

      {isLoggedIn ? null :
      (
      <a href="/login" className="home-button">
        Login
      </a>
      )}

      {isLoggedIn ? (
      <a href="/leads" className="home-button">
        View Lead List
      </a>
      ) : null}
      <br/><br/>
      <br/><br/>

      {isLoggedIn ? (
      <a href="/addlead" className="home-button">
        Add new Lead
      </a>
      ) : null}
      <br/><br/>
      <br/><br/>

      {isLoggedIn ? (
      <a href="/logout" className="home-button">
        Logout
      </a>
      ) : null}
      <br/><br/>
      <br/><br/>

    </div>
  );
}