import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <nav className="navbar navbar-expand-lg navbar-light bg-light py-4 ">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="./home">Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link active" href="./about">About</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link active" href="./about">Service</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="./about">Contact</a>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    </div>
                </div>
                </nav>

                <div className="hero-area text-center">
                    <h1>Most Famous Scientist in the World</h1>
                    <h5>Get to know the scientists that changed the world as we know it though their contributions and discoveries</h5>
                    <h2>Total Budget $103000</h2>
                </div>
            
        </div>
    );
};

export default Header;