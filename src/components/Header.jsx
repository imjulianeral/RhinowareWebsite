import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class Header extends Component {
    render() {
        return (
            <div className="top-right menu">
                <Link to="/" className="button">Inicio</Link>
                <Link to="/servicios" className="button">Servicios</Link>
                <Link to="/productos" className="button">Productos</Link>
                <Link to="/contacto" className="button">Contacto</Link>
            </div>
        )
    }
}
