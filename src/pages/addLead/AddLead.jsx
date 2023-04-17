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
        <form className="form justify-content-center" >
          <fieldset>
            <div className="form-body">
              <div>
                <label className="form__label" for="compName">Company Name:</label>
                <input type="text" className="form_input" name="compName" placeholder="Insert Company Name" />
              </div>
              <div>
                <label className="form__label" for="personName">Person Name:</label>
                <input type="text" className="form_input" name="personName" placeholder="Insert Person Name" />
              </div>
              <div>
                <label className="form__label" for="companyWebsite">Company Website:</label>
                <input type="text" className="form_input" name="companyWebsite" placeholder="Insert Company Website" />
              </div>
              <div>
                <label className="form__label" for="address">Company Address:</label>
                <input type="text" className="form_input" name="address" placeholder="Insert Address" />
              </div>
              <div>
                <label className="form__label" for="email">Email:</label>
                <input type="email" className="form_input" name="email" placeholder="Insert Email" />
              </div>
              <div>
                <label className="form__label" for="phoneNumber">Phone Numbers:</label>
                <input type="text" className="form_input" name="phoneNumber" placeholder="Insert Phone Numbers" />
              </div>
            </div>
            <div class="footer">
              <button type="submit" class="btn">Submit</button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  )
};