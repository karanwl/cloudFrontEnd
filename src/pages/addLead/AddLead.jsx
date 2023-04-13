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
      <div className="addleadcontent">
      <div className="form">
        <form aria-orientation="vertical">
          <fieldset>
            <div>
          <label>
            Company Name:
            <input type="text" name="compName" />
          </label>
          </div>
          <div>
          <label>
            Person Name:
              <input type="text" name="personName" />
              </label></div>
          <div><label>
            Company Website:
            <input type="text" name="companyWebsite" />
          </label></div>
          <div><label>
            Company Address:
          <input type="text" name="address" />
          </label></div>
          <div><label>
            Email:
            <input type="email" name="email" />
            </label></div>
          <div><label>
            Phone Number:
            <input type="number" name="phoneNumber" />
            </label></div>
          
          </fieldset>
            <input type="submit" value="Submit" />
           
        </form>
</div>
</div>
    )
};