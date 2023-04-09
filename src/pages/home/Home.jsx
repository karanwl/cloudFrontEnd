// import { Link, useNavigate } from "react-router-dom";
import "./Home.css"
export default function Home() {
  //   let navigate = useNavigate();

  //   function routeChange() {
  //     // console.log(path);
  //     navigate('/first');
  //   }

  return (
    <div class="content">
      <p>Welcome !</p>
      <button type="button" class="btn btn-secondary">Add new Lead</button>
      <button type="button" class="btn btn-secondary">View Lead List</button>
    </div>
  );
}
