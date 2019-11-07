import React from 'react';

import { Link } from 'react-router-dom';

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
                    <div className="link-items">
                        <div className="main-link" id="female-button">
                            <Link className="link-box" to="/collections/female">SHOP FEMALE</Link>
                        </div>
                    </div>

                    <div className="link-items">
                        <div className="main-link" id="male-button">
                            <Link className="link-box" to="/collections/male">SHOP MALE</Link>
                        </div>
                    </div>
                </div>
                {/* <div className="female-button-text">
                    <button>SHOP FEMALE</button>
                </div>
                <div className="male-button-text">
                    <button>SHOP MALE</button>
                </div> */}
            </div>
        );
    }
}

export default Main;
