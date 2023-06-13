import React from 'react'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (
    <header>
        {/* bg-body-tertiary */}
        <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-white">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1"><h1>Farmacia Ratelli</h1></span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Ofertas</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dermocosmética
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Rostro</a></li>
                                <li><a class="dropdown-item" href="#">Cuerpo</a></li>
                                <li><a class="dropdown-item" href="#">Cabello</a></li>
                                <li><a class="dropdown-item" href="#">Maquillaje</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Solares</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Bebés</a>
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