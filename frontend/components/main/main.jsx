import React from 'react';

class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="main">
                <div className="hero-img-frame">
                    {/* <img className="hero-img" src="https://www.instagram.com/p/B2qyIVCpTyj/?utm_source=ig_web_button_share_sheet" alt=""/> */}
                    <h1>BETTER SHOES IN A BETTER WAY</h1>
                    <button>Shop Men</button>
                    <button>Shop Women</button>
                </div>
            </div>
        );
    }
}

export default Main;