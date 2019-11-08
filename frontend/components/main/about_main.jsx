import React from 'react';

import { Link } from 'react-router-dom';

class AboutMain extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="about-main">
                <h2>Natural Comfort Sourced from Natural Materials</h2>
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
        );
    }
}

export default AboutMain;