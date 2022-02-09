import React from 'react';
import logoNav from './logoNav.png';
import './NavBar.css';

function Navbar(){
    return(
        <nav>
                <img src={logoNav} className="logoNav" alt="logo" />
                <a className='titulo' href='inicio'>Tienda SAMādhi</a>
                <input type="search" className='buscador' name="busqueda" placeholder="Que estas buscando?"/>
                <a className='carrito' href='carrito'>CARRITO</a>
        </nav>
    )
}
export default Navbar;