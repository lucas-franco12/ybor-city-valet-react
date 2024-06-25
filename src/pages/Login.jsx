import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const verifyUser = () => {
    const { username, password } = formData;
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.storedUsername === username);

    if (user && user.storedPassword === password) {
      navigate('/table');
    } else {
      alert('Incorrect username or password.');
    }
  };

  const addNewUser = () => {
    const { username, password } = formData;

    if (!username || !password) {
      alert('Please fill all the fields.');
      return;
    }

    let users = JSON.parse(localStorage.getItem('users')) || [];

    let userExists = users.find(user => user.storedUsername === username);

    if (userExists) {
      alert('This username already exists. Please try another one.');
      return;
    }

    users.push({ storedUsername: username, storedPassword: password });
    localStorage.setItem('users', JSON.stringify(users));

    setFormData({
      username: '',
      password: ''
    });

    alert('User registered successfully.');
    setIsLogin(true);
  };

  const toggle = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="container-fluid login-section">
      <div className="form-box">
        <h3 id="title">{isLogin ? 'Login' : 'Sign Up'}</h3>
        <form>
          {isLogin ? (
            <LoginForm
              handleChange={handleChange}
              formData={formData}
              verifyUser={verifyUser}
            />
          ) : (
            <SignupForm
              handleChange={handleChange}
              formData={formData}
              addNewUser={addNewUser}
            />
          )}
        </form>

        <Link className="nav-link" to="/">Back to Main Page</Link>

        <div className="btn-field">
          <button
            id="login-toggle"
            className={`toggle-button ${isLogin ? 'disabled' : ''}`}
            type="button"
            onClick={toggle}
          >
          </button>
          <button
            id="signup-toggle"
            className={`toggle-button ${isLogin ? '' : 'disabled'}`}
            type="button"
            onClick={toggle}
          >
          </button>
        </div>
        
      </div>
    </div>
  );
}
