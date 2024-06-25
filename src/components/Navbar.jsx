import React from 'react'
import { Link } from 'react-router-dom';

export default function HomeNavbar(props){

    return(
        <nav className="navbar navbar-expand-md fixed-top navbar-dark navbar-light">
            <div className="container-fluid">
            <a className="navbar-brand" href="#hero-target">
                <i className="bi bi-house-door"></i>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                { props.parent ==='home' ? 
                    <div className="navbar-nav ms-auto">
                        <a className="nav-link" href="#check-in-target">Check In</a>
                        <a className="nav-link" href="#contact-target">Contact Us</a>
                        <a className="nav-link" href="#things-to-do-target">Things to Do</a>
                        <a className="nav-link" href="#hours-target">Hours</a>
                    </div>
                    :
                    <div className="navbar-nav ms-auto">
                        <Link className="nav-link" to="/">Main</Link>
                    </div>
                }       
            </div>
            </div>
        </nav>
    );
}


