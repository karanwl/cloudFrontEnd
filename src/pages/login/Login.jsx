import "./Login.css";
export default function Login() {
  return (
    <div className="logincontent">
      <div className="form">
        <h1>Login : </h1>
        <form className="form justify-content-center">
          <div>
            {/* <label for="username">Username : </label> */}
            <input
              type="username"
              className="forminput"
              id="username"
              aria-describedby="emailHelp"
              placeholder="Enter username"
            />
          </div>
          <div>
            {/* <label for="password">Password : </label> */}
            <input
              type="password"
              className="forminput"
              id="password"
              placeholder="Password"
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
