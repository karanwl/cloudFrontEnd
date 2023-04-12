import "./EditLead.css"
export default function EditLead(){
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const usernameSession = localStorage.getItem("username");
    
    if (isLoggedIn === false || isLoggedIn === null || usernameSession === null) {
      //alert("Invalid username or password.");
      // redirect to home page or some other authorized page
      window.location.href = "/";
    }

    return(
        <div class="editleadcontent">
            <p>Edit Lead page</p>
        </div>
    )
};