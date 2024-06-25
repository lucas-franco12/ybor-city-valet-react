import React from 'react';

export default function SignupForm({ handleChange, formData, addNewUser }) {
  return (
    <div id="signup-card" className="signup-input-group">
      <div className="input-field">
        <i className="bi bi-person-fill"></i>
        <input
          className="login-input"
          type="text"
          id="new-username"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        />
      </div>
      <div className="input-field">
        <i className="bi bi-lock-fill"></i>
        <input
          className="login-input"
          type="password"
          id="new-password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <button
        id="signup-button"
        type="button"
        className="btn btn-primary"
        onClick={addNewUser}
      >
        Sign Up
      </button>
    </div>
  );
}
