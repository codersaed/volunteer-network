import React from 'react';
import logo from '../../logos/Group 1329.png'

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container my-3">
                <a className="navbar-brand" href="#"><img style={{height: '50px'}} src={logo} alt=""/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link font-weight-bold mr-1" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link font-weight-bold mr-1" href="#">Donation</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link font-weight-bold mr-1" href="#">Events</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link font-weight-bold mr-1" href="#" >Blog</a>
                        </li>
                    </ul>
                </div>
                <button className="btn btn-primary mr-2">Register</button>
                <button className="btn btn-dark">Admin</button>
            </div>
        </nav>
    );
};

export default Nav;