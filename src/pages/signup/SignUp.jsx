import React, { useState } from 'react';
import './SignUp.css';

export default function SignUp() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const isAdmin = localStorage.getItem("isAdmin");
  const usernameSession = localStorage.getItem("username");
    
  if (isLoggedIn === false || isAdmin === null || isLoggedIn === null || usernameSession === null || isAdmin === "false") {
    //alert("Invalid username or password.");
    // redirect to home page or some other authorized page
    window.location.href = "/";
  }

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');

  const handleSignUp = async (event) => {
    event.preventDefault();

    // Here, you'll need to call your API to create a new user with the given username, email, password, and role.
    // After the user is created, you can show a success message or redirect to another page.
    try {
      const response = await fetch("https://j0dvgoy2ze.execute-api.us-east-1.amazonaws.com/api/v1/users", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({username: usernameSession, user_obj: {
          username: username,
          password: password,
          role: role
        }})
      });

      const data = await response.json();
      
      // validate if the image upload process is ok
      if (data.status === "ok") {
        if (data.user_obj)
        {
          // nothing
         alert(data.msg)
        }
        else
        {
          alert("User Creation error:", data.msg)
        }
      } else {
        alert("User Creation error:", data.msg)
      }

    } catch (error) {
      console.log("User Creation error:", error);
      alert("User Creation error. Please try again later.");
    }

    console.log('User created:', { username, password, role });
  };

  return (
    <div className='signup-container'>
      <div className='signup-card'>
        <h1>Create Account</h1>
        <form className='signup-form' onSubmit={handleSignUp}>
          <div className='form-group'>
            <label htmlFor='username'>Username:</label>
            <input
              type='text'
              id='username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password:</label>
            <input
              type='password'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='role'>Account Type:</label>
            <select
              id='role'
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <option value='user'>User</option>
              <option value='admin'>Admin</option>
            </select>
          </div>
          <button type='submit'>Create Account</button>
        </form>
      </div>
    </div>
  );
}
