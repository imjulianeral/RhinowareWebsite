import React, { Component } from 'react'
import Header from './Header';
// Assets
import './assets/css/styles.css';
import logo from './assets/img/rhinowaresm.png';

export default class Background extends Component {    

    componentDidMount() {
        window.VANTA.WAVES({ el: "#animation", color: 0xc0c0c, zoom: 0.7 });
    }

    render() {
        return (
            <section id="animation" className="wm">
                <Header/>
                <div className="container">
                    <div className="eight columns">
                        <img src={ logo } alt="rhinoware logo" className="logo"/>
                    </div>
                </div>
            </section>
        )
    }
}
