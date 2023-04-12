import "./AddLead.css"

export default function AddLead(){
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const usernameSession = localStorage.getItem("username");
    
    if (isLoggedIn === false || isLoggedIn === null || usernameSession === null) {
      //alert("Invalid username or password.");
      // redirect to home page or some other authorized page
      window.location.href = "/";
    }

    return(
        <form>
  <label>
    Company Name:
    <input type="text" name="compName" />
  </label>
  <label>
    Person Name:
    <input type="text" name="personName" />
  </label>
  <label>
    Company Website:
    <input type="text" name="companyWebsite" />
  </label>
  <label>
    Company Address:
    <input type="text" name="address" />
  </label>
  <label>
    Email:
    <input type="email" name="email" />
  </label>
  <label>
    Phone Number:
    <input type="number" name="phoneNumber" />
  </label>
  <input type="submit" value="Submit" />
</form>
    )
};