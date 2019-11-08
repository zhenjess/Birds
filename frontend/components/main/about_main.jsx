import React from 'react';

import { Link } from 'react-router-dom';

class AboutMain extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="about-main">
                <div className="about-image"></div>
                <div className="about-text">
                    <style>
                        @import url('https://fonts.googleapis.com/css?family=Merriweather+Sans:700&display=swap');
                    </style>
                    <h2>Natural Comfort Sourced from Natural Materials</h2>
                    <style>
                        @import url('https://fonts.googleapis.com/css?family=Merriweather+Sans&display=swap');
                    </style>
                    <p>It all starts from the finest materials Mother Nature offers.</p>
                    <p>Designed practically and made from sustainable resources.</p>
                    <p>Closing the loop with ZEROING waste because we care about OUR planet.</p>
                    <p>That sounds better, right?</p>
                    <Link className="about-main-link" to={"/collections/male"}>
                        <input 
                            type="submit"
                            value="LEARN MORE ABOUT OUR MATERIALS"
                        />
                    </Link>
                </div>
            </div>
        );
    }
}

export default AboutMain;