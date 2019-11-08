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
                        <p></p>
                    </div>

                    <div className='right-image-panel'>

                    </div>
                </div>
            </div>
        );
    }
}

export default MaterialsMain;