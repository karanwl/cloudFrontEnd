//import React, { useState } from 'react';
import React,{useState,useEffect} from 'react';
import "./EditLead.css"

export default function EditLead(){
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const usernameSession = localStorage.getItem("username");
    //let dataJson = null; // Define dataJson outside the try block
    
    if (isLoggedIn === false || isLoggedIn === null || usernameSession === null) {
      //alert("Invalid username or password.");
      // redirect to home page or some other authorized page
      window.location.href = "/";
    }

    // In fetch should be included the username and password in POST data
    try {
        /*const response = await fetch("https://example.com/api/login", {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
        });*/
        /*const response = fetch("https://raw.githubusercontent.com/karanwl/cloudFrontEnd/main/datajson/lead_retrieve.json");
        const data = response.json();*/

        

        // validate username and password, and perform authentication
        /*if (data.status === "ok" && data.lead_obj) {
            // cool 
            dataJson = data.lead_obj
        } else {
            alert("Lead does not exist.");
        }*/

    } catch (error) {
        console.log("Edit Lead error:", error);
        alert("Edit Lead error. Please try again later." + error);
    }

    
    const [dataJson, setDataJson] = useState([]);

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/karanwl/cloudFrontEnd/main/datajson/lead_retrieve.json")
            .then((response) => response.json())
            .then((data) => setDataJson(data.lead_obj));
    }, []);



    return(
        <div class="editleadcontent">
            <div className="form">
                <h1>Edit Lead page</h1>
                <form className="form justify-content-center" >
                    <input type="hidden" name="id" value={dataJson.id} />
                    <fieldset>
                        <div className="form-body">
                            <div>
                                <label className="form__label" for="compName">Company Name:</label>
                                <input type="text" className="form_input" name="compName" placeholder="Insert Company Name" value={dataJson.company_name} />
                            </div>
                            <div>
                                <label className="form__label" for="personName">Person Name:</label>
                                <input type="text" className="form_input" name="personName" placeholder="Insert Person Name" value={dataJson.person_name} />
                            </div>
                            <div>
                                <label className="form__label" for="companyWebsite">Company Website:</label>
                                <input type="text" className="form_input" name="companyWebsite" placeholder="Insert Company Website" value={dataJson.company_website} />
                            </div>
                            <div>
                                <label className="form__label" for="address">Company Address:</label>
                                <input type="text" className="form_input" name="address" placeholder="Insert Address" value={dataJson.company_address} />
                            </div>
                            <div>
                                <label className="form__label" for="email">Email:</label>
                                <input type="email" className="form_input" name="email" placeholder="Insert Email" value={dataJson.email_address} />
                            </div>
                            <div>
                                <label className="form__label" for="phoneNumber">Phone Numbers:</label>
                                <input type="text" className="form_input" name="phoneNumber" placeholder="Insert Phone Numbers" value={dataJson.telephone_numbers} />
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