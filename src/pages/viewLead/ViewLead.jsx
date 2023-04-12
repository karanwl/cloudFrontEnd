import "./ViewLead.css"

export default function ViewLead(){
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const usernameSession = localStorage.getItem("username");
    
    if (isLoggedIn === false || isLoggedIn === null || usernameSession === null) {
      //alert("Invalid username or password.");
      // redirect to home page or some other authorized page
      window.location.href = "/";
    }

    return(
        <div class="content">
            <p>View Lead page</p> 
        </div>
    )
};