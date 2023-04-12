import React, { useState } from 'react';
import "./Logout.css";

export default function Login() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const usernameSession = localStorage.getItem("username");
  
  if (isLoggedIn && usernameSession !== null) {
    // remove session values from local storage
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    // redirect to login page
    window.location.href = "/login";
  }

  return (
    <div className="logincontent">
      <div className="form">
        <h1>Logout</h1>
      </div>
    </div>
  );
}
