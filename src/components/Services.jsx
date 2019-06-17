import React from 'react';
import webdev from './assets/img/webdev.png';
import mobiledev from './assets/img/mobiledev.jpg';
import desktop from './assets/img/desktop.png';

const Services = () => {
    return (
        <div className="container">
            <h2 className="center">Servicios</h2>
            <div className="third columns">
                <h3>Desarrollo Web</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet cumque necessitatibus quia fugiat eos aliquid nobis sed, earum perspiciatis placeat vitae commodi tenetur voluptas, eius velit impedit. Cum, odio voluptates.</p>
                <div className="center">
                    <img src={ webdev } alt="purelabs web" className="center" height="300"/>
                </div>
            </div>
            <div className="third columns">
                <h3>Desarrollo Móvil</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis asperiores modi accusantium aspernatur. Placeat quibusdam cumque aperiam. Saepe perspiciatis, delectus rerum quod laborum doloribus modi, omnis quaerat, odio totam voluptas.</p>
                <div className="center">
                    <img src={ mobiledev } alt="purelabs mobile" className="center" height="300"/>
                </div>
            </div>
            <div className="third columns">
                <h3>Desarrollo Desktop</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis asperiores modi accusantium aspernatur. Placeat quibusdam cumque aperiam. Saepe perspiciatis, delectus rerum quod laborum doloribus modi, omnis quaerat, odio totam voluptas.</p>
                <div className="center">
                    <img src={ desktop } alt="purelabs desktop" className="center"/>
                </div>
            </div>
        </div>
    );
};

export default Services;