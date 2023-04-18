import React,{useState,useEffect} from 'react';
import {useParams} from "react-router-dom";
import "./EditLead.css"

export default function EditLead(){
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const usernameSession = localStorage.getItem("username");
    const { id } = useParams();
    const [dataJson, setDataJson] = useState([]);
    
    const [imageFilename, setImageFilename] = useState(null);
    const [personName, setPersonName] = useState(null);
    const [emailAddress, setEmailAddress] = useState(null);
    const [companyName, setCompanyName] = useState(null);
    const [companyWebsite, setCompanyWebsite] = useState(null);
    const [companyAddress, setCompanyAddress] = useState(null);
    const [telephoneNumbers, setTelephoneNumbers] = useState(null);
    const [fileURL, setImageURL] = useState(null);
    
    if (isLoggedIn === false || isLoggedIn === null || usernameSession === null) {
      //alert("Invalid username or password.");
      // redirect to home page or some other authorized page
      window.location.href = "/";
    }

    useEffect(() => {
      async function fetchData() {
        try {
          const response = await fetch(`https://j0dvgoy2ze.execute-api.us-east-1.amazonaws.com/api/v1/leads/${id}`);
          const data = await response.json();
            
          if (data.lead_obj.username !== usernameSession) {
            alert("You do not have permissions to update this Lead.");
            // redirect to home page or some other authorized page
            window.location.href = "/viewlead/" + id;
          }
          else{
            setDataJson(data.lead_obj);
        
            setImageFilename(data.lead_obj.image_filename);
            setPersonName(data.lead_obj.person_name);
            setEmailAddress(data.lead_obj.email_address);
            setCompanyName(data.lead_obj.company_name);
            setCompanyWebsite(data.lead_obj.company_website);
            setCompanyAddress(data.lead_obj.company_address);
            setTelephoneNumbers(data.lead_obj.telephone_numbers);
            setImageURL(data.lead_obj.image_filepath);
          }
        } catch (error) {
          console.log(error);
        }
      }
      fetchData();
    }, [id]);

    const handleUpdateLead = async (event) => {
      event.preventDefault();

      // TODO: Handle the image upload here
      // In fetch should be included the filename anf filebytes in POST data
      try {
        const response = await fetch(`https://j0dvgoy2ze.execute-api.us-east-1.amazonaws.com/api/v1/leads/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({username: usernameSession, business_card_obj: {
            person_name: personName,
            company_name: companyName,
            company_website: companyWebsite,
            company_address: companyAddress,
            email_address: emailAddress,
            telephone_numbers: telephoneNumbers
          }})
        });

        const data = await response.json();
        
        // validate if the image upload process is ok
        if (data.status === "ok") {
          alert(data.msg);
          window.location.href = "/leads";
        } else {
          alert("Lead Update error:", data.msg)
        }

      } catch (error) {
        console.log("Lead Update error:", error);
        alert("Lead Update error. Please try again later.");
      }
    }

    return(
      <div className='editlead-container'>
          <div className='editlead-card'>
              <h1>Edit Lead</h1>
              <form className='editlead-form' onSubmit={handleUpdateLead}>
                  <div className='form-group'>
                      <label for="companyName" htmlFor='companyName'>Company Name:</label>
                      <input type="text" id="companyName" name="companyName" value={companyName} placeholder="Insert Company Name"  onChange={(e) => setCompanyName(e.target.value)} />
                  </div>
                  <div  className='form-group'>
                      <label for="personName" htmlFor='personName'>Person Name:</label>
                      <input type="text" id="personName" name="personName" value={personName} placeholder="Insert Person Name" onChange={(e) => setPersonName(e.target.value)}  />
                  </div>
                  <div  className='form-group'>
                      <label for="companyWebsite" htmlFor='companyWebsite'>Company Website:</label>
                      <input type="text" id="companyWebsite" name="companyWebsite" value={companyWebsite} placeholder="Insert Company Website"  onChange={(e) => setCompanyWebsite(e.target.value)}  />
                  </div>
                  <div  className='form-group'>
                      <label for="address" htmlFor='address'>Company Address:</label>
                      <input type="text" id="address" name="address" value={companyAddress} placeholder="Insert Address" onChange={(e) => setCompanyAddress(e.target.value)}  />
                  </div>
                  <div  className='form-group'>
                      <label for="email" htmlFor='email'>Email:</label>
                      <input type="email" id="email" name="email" value={emailAddress} placeholder="Insert Email" onChange={(e) => setEmailAddress(e.target.value)}  />
                  </div>
                  <div  className='form-group'>
                      <label for="phoneNumber" htmlFor='phoneNumber'>Phone Numbers:</label>
                      <input type="text" id="phoneNumber" name="phoneNumber" value={telephoneNumbers}  placeholder="Insert Phone Numbers" onChange={(e) => setTelephoneNumbers(e.target.value)}  />
                  </div>
                  <div  className='form-group'>
                      <label>Image:</label>
                      {fileURL && <img src={fileURL} alt="Uploaded Image" width="250" height="250" />}
                  </div>
                  <button type='submit'>Update Lead</button>
              </form>
          </div>
      </div>
    )
};