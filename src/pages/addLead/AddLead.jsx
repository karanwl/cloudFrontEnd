import "./AddLead.css"
import React, { useState } from 'react';

export default function AddLead(){
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const usernameSession = localStorage.getItem("username");
    
  if (isLoggedIn === false || isLoggedIn === null || usernameSession === null) {
    //alert("Invalid username or password.");
    // redirect to home page or some other authorized page
    window.location.href = "/";
  }

  const [filename, setImageName] = useState(null);
  const [fileData, setImageData] = useState(null);
  const [fileId, setImageId] = useState(null);
  const [fileURL, setImageURL] = useState(null);

  const [imageFilename, setImageFilename] = useState(null);
  const [personName, setPersonName] = useState(null);
  const [emailAddress, setEmailAddress] = useState(null);
  const [companyName, setCompanyName] = useState(null);
  const [companyWebsite, setCompanyWebsite] = useState(null);
  const [companyAddress, setCompanyAddress] = useState(null);
  const [telephoneNumbers, setTelephoneNumbers] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImageName(file.name);

    const reader = new FileReader();
    reader.onloadend = () => {
      setImageData(reader.result.toString().replace(/^data:(.*,)?/, ''));
    };
    reader.readAsDataURL(file);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    // TODO: Handle the image upload here
    // In fetch should be included the filename anf filebytes in POST data
    try {
      const response = await fetch("https://j0dvgoy2ze.execute-api.us-east-1.amazonaws.com/api/v1/images", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({filename: filename, filebytes: fileData})
      });

      const data = await response.json();
      //alert(data.role);
      
      // validate if the image upload process is ok
      if (data.status === "ok") {
        if (data.image_obj)
        {
          setImageId(data.image_obj.fileId);
          setImageURL(data.image_obj.fileUrl);

          // Call another async function to send the data to the backend API to extract text
          await  handleExtractText(data.image_obj.fileId);
        }
        else
        {
          alert("Image Upload error:", data.msg)
        }
      } else {
        alert("Image Upload error:", data.msg)
      }

    } catch (error) {
      console.log("Image Upload error:", error);
      alert("Image Upload error. Please try again later.");
    }
  }

  const handleExtractText = async (fileId) => {
    // TODO: Handle the image upload here
    // In fetch should be included the fileid in URL
    try {
      const response = await fetch("https://j0dvgoy2ze.execute-api.us-east-1.amazonaws.com/api/v1/images/" + fileId + "/extract_text", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({fromLang: "auto", toLang: "en"})
      });

      const data = await response.json();
      //alert(data.role);
      
      // validate if the image upload process is ok
      if (data.status === "ok") {
        if (data.business_card_obj)
        {
          if (data.business_card_obj.extracted)
          {
            setImageFilename(data.business_card_obj.extracted.image_filename);
            setPersonName(data.business_card_obj.extracted.person_name);
            setEmailAddress(data.business_card_obj.extracted.email_address);
            setCompanyName(data.business_card_obj.extracted.company_name);
            setCompanyWebsite(data.business_card_obj.extracted.company_website);
            setCompanyAddress(data.business_card_obj.extracted.company_address);
            setTelephoneNumbers(data.business_card_obj.extracted.telephone_numbers);
          }
        }
        else
        {
          alert("Image's Text Extraction error:", data.msg)
        }
      } else {
        alert("Image's Text Extraction error:", data.msg)
      }

    } catch (error) {
      console.log("Image's Text Extraction error:", error);
      alert("Image's Text Extraction. Please try again later.");
    }
  }

  const handleSaveDynamoDBSubmit = async (event) => {
    event.preventDefault();

    // TODO: Handle the image upload here
    // In fetch should be included the filename anf filebytes in POST data
    try {
      const response = await fetch("https://j0dvgoy2ze.execute-api.us-east-1.amazonaws.com/api/v1/leads", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({username: usernameSession, business_card_obj: {
          person_name: personName,
          company_name: companyName,
          company_website: companyWebsite,
          company_address: companyAddress,
          email_address: emailAddress,
          telephone_numbers: telephoneNumbers,
          image_filename: imageFilename,
          image_filepath: fileURL
        }})
      });

      const data = await response.json();
      
      // validate if the image upload process is ok
      if (data.status === "ok") {
        if (data.lead_id)
        {
          alert(data.msg)
          
          // redirect to view lead page
          window.location.href = "/viewlead/" + data.lead_id.toString();
        }
        else
        {
          alert("Lead Creation error:", data.msg)
        }
      } else {
        alert("Lead Creation error:", data.msg)
      }

    } catch (error) {
      console.log("Lead Creation error:", error);
      alert("Lead Creation error. Please try again later.");
    }
  }

  return(
    <div className="addleadcontent">
      <div className="form">
        <form onSubmit={handleSubmit} className="form justify-content-center" >
          <label htmlFor="image-upload">Select an image:</label>
          <input type="file" id="image-upload" onChange={handleImageUpload} accept="image/*" />
          <button type="submit">Upload</button>
        </form>
      </div>

      {fileURL && <img src={fileURL} alt="Uploaded Image" width="400" height="400" />}

      {fileId && <div className="form">
        <form onSubmit={handleSaveDynamoDBSubmit} className="form justify-content-center" >
          <input type="hidden" className="form_input" name="filenameId" value={imageFilename} />
          <fieldset>
            <div className="form-body">
              <div>
                <label className="form__label" for="compName">Company Name:</label>
                <input type="text" className="form_input" name="compName" placeholder="Insert Company Name" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
              </div>
              <div>
                <label className="form__label" for="personName">Person Name:</label>
                <input type="text" className="form_input" name="personName" placeholder="Insert Person Name" value={personName} onChange={(e) => setPersonName(e.target.value)} />
              </div>
              <div>
                <label className="form__label" for="companyWebsite">Company Website:</label>
                <input type="text" className="form_input" name="companyWebsite" placeholder="Insert Company Website" value={companyWebsite} onChange={(e) => setCompanyWebsite(e.target.value)} />
              </div>
              <div>
                <label className="form__label" for="address">Company Address:</label>
                <input type="text" className="form_input" name="address" placeholder="Insert Address" value={companyAddress} onChange={(e) => setCompanyAddress(e.target.value)} />
              </div>
              <div>
                <label className="form__label" for="email">Email:</label>
                <input type="email" className="form_input" name="email" placeholder="Insert Email" value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} />
              </div>
              <div>
                <label className="form__label" for="phoneNumber">Phone Numbers:</label>
                <input type="text" className="form_input" name="phoneNumber" placeholder="Insert Phone Numbers" value={telephoneNumbers} onChange={(e) => setTelephoneNumbers(e.target.value)} />
              </div>
            </div>
            <div class="footer">
              <button type="submit" class="btn">Submit</button>
            </div>
          </fieldset>
        </form>
      </div>}
    </div>
  )
};