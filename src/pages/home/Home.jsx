import "./Home.css";

let name = "karan"

export default function Home() {
  return (
    <div className="home-content">
      <h1>Hello, {name} !</h1>
      <a href="/addlead" className="home-button">
        Add new Lead
      </a>
      <a href="/viewlead" className="home-button">
        View Lead List
      </a>
    </div>
  );
}