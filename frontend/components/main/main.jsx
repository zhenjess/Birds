import React from 'react';

class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="main">
                <div className="hero-img-frame">
                    {/* <img className="hero-img" src="https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2019/11/1024/512/Cat-at-door-iStock.jpg?ve=1&tl=1" alt=""/>  */}
                <h1>BETTER SHOES IN A BETTER WAY</h1>
                <button>Shop Men</button>
                <button>Shop Women</button>
                </div>
            </div>
        );
    }
}

export default Main;