import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <header>
        {/* bg-body-tertiary */}
        <nav className="navbar navbar-expand-lg fixed-top navbar-light navBar">
            <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                
                    
                    <Link to="/" className="navbar-brand mb-0 h1">
                    <h1>Farmacia Ratelli</h1>
                    </Link>
                    
                    
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to="/categoria/capilar" className="nav-link"> Capilar </NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink to="/categoria/solar" className="nav-link"> Solares </NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink to="/categoria/bebe" className="nav-link"> Bebés </NavLink>
                        </li>
                    </ul>

                </div>
                
                <CartWidget></CartWidget>
                
            </div>
        </nav>
    </header>
  )
}

export default NavBar