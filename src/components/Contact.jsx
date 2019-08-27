import React from 'react';

import facebook from './assets/img/facebook.png';
import email from './assets/img/email.png';
import phone from './assets/img/phone.png';

const Contact = () => {
    return (
        <div className="container">
            {/* <div className="third columns">
                <div className="center">
                    <h3>Facebook</h3>    
                    <a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/rhinowaremx/">
                        <img src={ facebook } alt="purelabs desktop" className="contact"/>
                    </a>
                </div>          
            </div>
            <div className="third columns">
                <div className="center">
                    <h3>Email</h3>
                    <img src={ email } alt="purelabs desktop" className="contact"/>
                    <p>rhinowaremx@gmail.com</p>
                </div>
            </div>
            <div className="third columns">
                <div className="center">
                    <h3>Teléfono</h3>
                    <img src={ phone } alt="purelabs desktop" className="contact"/>
                    <p>(449) 950 5169</p>
                </div>
            </div> */}
            <div className="eight columns socialtext info">
                <h3>Facebook</h3>
            </div>
            <div className="eight columns info">
                <a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/rhinowaremx/">
                        <img src={ facebook } alt="rhinoware facebook" className="contact"/>
                </a>
            </div>
            <div className="eight columns socialtext">
                <h3>Email</h3>
                <p className="pcontact">contacto@rhinoware.com.mx</p>
            </div>
            <div className="eight columns">
                <img src={ email } alt="rhinoware email" className="contact"/>
            </div>
            <div className="eight columns socialtext">
                <h3>Teléfono</h3>
                <p className="pcontact">(449) 950 5169</p>                
            </div>
            <div className="eight columns">
                <img src={ phone } alt="rhinoware email" className="contact"/>
            </div>
        </div>
        
                
    );
};

export default Contact;