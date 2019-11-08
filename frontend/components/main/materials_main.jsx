import React from 'react';

import { Link } from 'react-router-dom';

class MaterialsMain extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='materials-main'>
                <div className="images-panel">
                    <div className='left-image-panel'>
                        <h2>WOOL</h2>
                        <p>Warm &amp; Cozy</p>

                        <div className="left-links">
                            <div className="left-link-text">
                                <Link className="left-link" to="/collections/female">SHOP FEMALE</Link>
                            </div>

                            <div className="left-link-text">
                                <Link className="left-link" to="/collections/male">SHOP MALE</Link>
                            </div>
                        </div>
                    </div>

                    <div className='right-image-panel'>
                        <h2>TREE</h2>
                        <p>Light &amp; Breezy</p>

                        <div className="left-links">
                            <div className="left-link-text">
                                <Link className="left-link" to="/collections/female">SHOP FEMALE</Link>
                            </div>

                            <div className="left-link-text">
                                <Link className="left-link" to="/collections/male">SHOP MALE</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MaterialsMain;