import "./Home.css";
export default function Home() {
  return (
    <div className="main">
      <div className="content">
        <h1>Hello, name !</h1>
        <a href="/addlead" className="bodyButton">Add new Lead</a>
        <a href="/viewlead" className="bodyButton">View Lead List</a>
      </div>
    </div>
  );
}