import { FC } from "react";
import './Navbar.css';

// Navbar for quick navigation through the application
const Navbar: FC = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <a className="navbar-link navbar-brand" href="#/">Wolf Game: Wool Edition</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" 
                data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" 
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse">
                <div className="navbar-nav">
                    <a className="navbar-link nav-item nav-link" href="#/wolves-sheep">Wolf/Sheep</a>
                    <a className="navbar-link nav-item nav-link" href="#/farmers">Farmers</a>
                    <a className="navbar-link nav-item nav-link" href="#/land">Land</a>
                    <a className="navbar-link nav-item nav-link" href="#/links">Links</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;