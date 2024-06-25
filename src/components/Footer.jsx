import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer(props) {
  return (
    <section id="footer-section">
      <div className="container">
        <p>&copy; Lucas Franco 2023</p>
        <Link className="nav-link" to="/login">{props.parent==='home' ? 'Attendant Login' : 'Customer Page'}</Link>
      </div>
    </section>
  );
}

