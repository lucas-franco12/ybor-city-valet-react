import React from 'react';

export default function LoginForm({ handleChange, formData, verifyUser }) {
  return (
    <div id="login-card" className="login-input-group">
      <div className="input-field">
        <i className="bi bi-person-fill"></i>
        <input
          className="login-input"
          type="text"
          id="username"
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
          id="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <button
        id="login-button"
        type="button"
        className="btn btn-primary"
        onClick={verifyUser}
      >
        Login
      </button>
    </div>
  );
}

