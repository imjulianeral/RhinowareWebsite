import React from 'react';

import mision from './assets/img/mision.png';
import vision from './assets/img/vision.png';
import info from './assets/img/info.png';

const Home = () => {
    return (
        <div className="container">
            <div className="twelve columns">
                <h2>¿Quienes Somos?</h2>
                <p>Somos un grupo de estudiantes de ingeniería apasionados por el progreso científico y el desarrollo de nuevas tecnologías. El día 6 de febrero de 2019 se nos abrió la oportunidad de trabajar en un nuevo proyecto para un fin académico, sin embargo, decidimos emprender en el campo del desarrollo de software e integración de soluciones tecnologicas.</p>
            </div>
            <div className="four columns">
                <div className="center">
                    <img src={ info } alt="rhinoware mision" className="info"/>
                </div>
            </div>
            <div className="eight columns">
                <h2>Misión</h2>
                <p>Ser una empresa de desarrollo de Software de TI competitivo que esté a la medida de las necesidades del entorno.</p>
                <div className="center">
                    <img src={ mision } alt="rhinoware mision"/>
                </div>
            </div>
            <div className="eight columns">
                <h2>Visión</h2>
                <p>Ser una empresa líder en el ámbito tecnológico y en la sociedad por la innovación y eficacia de la excelencia en nuestros servicios.</p>
                <div className="center">
                    <img src={ vision } alt="rhinoware vision"/>
                </div>
                <div className="space"></div>
            </div>
        </div>
    );
};

export default Home;