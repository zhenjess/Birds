import React from 'react';

class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="main-image">
                <div class="main-text">
                    <style>
                        @import url('https://fonts.googleapis.com/css?family=Merriweather+Sans:800i&display=swap');
                    </style>
                    <h1>BETTER SHOES</h1>
                    <h1>IN A BETTER WAY</h1>
                    <button>SHOP FEMALE</button>
                    <button>SHOP MALE</button>
                </div>
            </div>
        );
    }
}

export default Main;