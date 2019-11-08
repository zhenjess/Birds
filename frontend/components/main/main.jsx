import React from 'react';

import { Link } from 'react-router-dom';

import AboutMain from './about_main';

class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="main-image">
                <div className="header-text">
                    <style>
                        @import url('https://fonts.googleapis.com/css?family=Merriweather+Sans:800i&display=swap');
                    </style>
                    <h1>BETTER SHOES</h1>
                    <h1>IN A BETTER WAY</h1>
                </div>

                <div className="main-links">
                    <div className="link-text">
                        <Link className="main-link" to="/collections/female">SHOP FEMALE</Link>
                    </div>

                    <div className="link-text">     
                        <Link className="main-link" to="/collections/male">SHOP MALE</Link>
                    </div>
                </div>
            </div>    
        );
    }
    
}

export default Main;
