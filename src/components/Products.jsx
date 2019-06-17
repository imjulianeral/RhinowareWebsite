import React from 'react';
import softstore from './assets/img/softstore.png';

const Products = () => {
    return (
        <div className="container">
            <h2 className="center">Productos</h2>
            <div className="four columns">
                <h3>SoftStore</h3>
                <p>Punto de venta para medianas y pequeñas empresas.</p>
                <div className="center">
                    <img src={ softstore } alt="purelabs mision" className="center"/>
                </div>
            </div>
        </div>
    );
};

export default Products;