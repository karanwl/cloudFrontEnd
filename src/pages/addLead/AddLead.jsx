import "./AddLead.css"

export default function AddLead(){
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const username = localStorage.getItem("username");
    
    if (isLoggedIn === false || isLoggedIn === null || username === null) {
      //alert("Invalid username or password.");
      // redirect to home page or some other authorized page
      window.location.href = "/";
    }

    return(
        <div class="addleadcontent">
            <p>Add Lead page</p>
        </div>
    )
};