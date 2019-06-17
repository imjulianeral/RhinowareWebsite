import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="top-right">
            <Link to="/">Inicio</Link>
            <Link to="/servicios">Servicios</Link>
            <Link to="/productos">Productos</Link>
            <Link to="/productos">Productos</Link>
        </div>
    );
};

export default Header;