import React, { Component } from 'react'
import Header from './Header';
// Assets
import './assets/css/styles.css';
import logo from './assets/img/logo.png';

export default class Background extends Component {    

    componentDidMount() {
        window.VANTA.WAVES({ el: "#animation", color: 0x828282, zoom: 0.7 });
    }

    render() {
        return (
            <section id="animation" className="wm">
                <Header/>
                <div className="container">
                    <div className="sixteen columns">
                        <img src={ logo } alt="purelabs logo" className="logo"/>
                    </div>
                </div>
            </section>
        )
    }
}
