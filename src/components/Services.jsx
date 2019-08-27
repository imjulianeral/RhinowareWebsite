import React from 'react';
import webdev from './assets/img/web.png';
import mobiledev from './assets/img/mobile.png';
import desktop from './assets/img/desktop.png';

const Services = () => {
    return (
        <div className="container">
            <h2 className="center">Servicios</h2>
            <div className="third columns">
                <h3>Desarrollo Web</h3>
                <p>Desde simples páginas de contacto a Web Apps Modernas realizadas con tecnologías de vanguardia.</p>
                <div className="center">
                    <img src={ webdev } alt="purelabs web" className="info"/>
                </div>
            </div>
            <div className="third columns">
                <h3>Desarrollo Móvil</h3>
                <p>Perfectas para poder hacer llegar sus servicios e ideas a sus clientes o usuarios y tener un alcance masivo.</p>
                <div className="center">
                    <img src={ mobiledev } alt="purelabs mobile" className="info"/>
                </div>
            </div>
            <div className="third columns">
                <h3>Desarrollo Desktop</h3>
                <p>Usualmente soluciones empresariales para automatizar procesos, como lo son los ERP y CRM.</p>
                <div className="center">
                    <img src={ desktop } alt="purelabs desktop" className="info"/>
                </div>
            </div>
        </div>
    );
};

export default Services;