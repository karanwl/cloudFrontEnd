import React,{useState,useEffect} from 'react';
import {useParams} from "react-router-dom";

import "./ViewLead.css"

export default function ViewLead(){
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const usernameSession = localStorage.getItem("username");
    const { id } = useParams();
    const [dataJson, setDataJson] = useState([]);

    if (isLoggedIn === false || isLoggedIn === null || usernameSession === null) {
        // redirect to home page or some other authorized page
        window.location.href = "/";
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`https://j0dvgoy2ze.execute-api.us-east-1.amazonaws.com/api/v1/leads/${id}`);
                const data = await response.json();
                setDataJson(data.lead_obj);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [id]);

    return(
        <div className='viewlead-container'>
            <div className='viewlead-card'>
                <h1>View Lead</h1>
                <form className='viewlead-form'>
                    

                    <div className='form-group'>
                        <label for="companyName">Company Name:</label>
                        <input type="text" name="companyName" value={dataJson.company_name} readOnly />
                    </div>
                    <div  className='form-group'>
                        <label for="personName">Person Name:</label>
                        <input type="text" name="personName" value={dataJson.person_name} readOnly />
                    </div>
                    <div  className='form-group'>
                        <label for="companyWebsite">Company Website:</label>
                        <input type="text" name="companyWebsite" value={dataJson.company_website}  readOnly />
                    </div>
                    <div  className='form-group'>
                        <label for="address">Company Address:</label>
                        <input type="text" name="address" value={dataJson.company_address} readOnly />
                    </div>
                    <div  className='form-group'>
                        <label for="email">Email:</label>
                        <input type="email" name="email" value={dataJson.email_address} readOnly />
                    </div>
                    <div  className='form-group'>
                        <label for="phoneNumber">Phone Numbers:</label>
                        <input type="text" name="phoneNumber" value={dataJson.telephone_numbers} readOnly />
                    </div>
                    <div  className='form-group'>
                        <label>Image:</label>
                        {dataJson.image_filepath && <img src={dataJson.image_filepath} alt="Uploaded Image" width="250" height="250" />}
                    </div>
                </form>
            </div>
        </div>
    )
};