import React from 'react';

const Products = () => {
    return (
        <div className="container">
            <h2 className="center">Productos</h2>
            <section className="gallery">
                <div className="third columns half-fixed item" style={{ background: 'linear-gradient(0deg, rgb(8, 174, 234) 0%, rgb(42, 245, 152) 100%)' }}>
                    <div className="label">CRM Rhino</div>
                    {/* <p>Web App moderna perfecta para aquellos que quieran trabajar con su información en tiempo real. Ideal para pequenas y medianas empresas.</p> */}
                
                </div>
            </section>
            <div className="space"></div>
        </div>
    );
};

export default Products;