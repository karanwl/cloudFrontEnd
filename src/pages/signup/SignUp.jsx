import React, { useState } from 'react';
import './SignUp.css';

export default function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');

  const handleSignUp = async (event) => {
    event.preventDefault();

    // Here, you'll need to call your API to create a new user with the given username, email, password, and role.
    // After the user is created, you can show a success message or redirect to another page.

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
