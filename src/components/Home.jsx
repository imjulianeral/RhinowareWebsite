import React from 'react';
import mision from './assets/img/mision.png';
import vision from './assets/img/vision.png';

const Home = () => {
    return (
        <div className="container">
            <div className="eight columns">
                <h2>Misión</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet cumque necessitatibus quia fugiat eos aliquid nobis sed, earum perspiciatis placeat vitae commodi tenetur voluptas, eius velit impedit. Cum, odio voluptates.</p>
                <div className="center">
                    <img src={ mision } alt="purelabs mision" className="center"/>
                </div>
            </div>
            <div className="eight columns">
                <h2>Visión</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis asperiores modi accusantium aspernatur. Placeat quibusdam cumque aperiam. Saepe perspiciatis, delectus rerum quod laborum doloribus modi, omnis quaerat, odio totam voluptas.</p>
                <div className="center">
                    <img src={ vision } alt="purelabs vision" className="center"/>
                </div>
            </div>
        </div>
    );
};

export default Home;