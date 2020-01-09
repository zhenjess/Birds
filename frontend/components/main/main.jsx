import React from 'react';

import { Link } from 'react-router-dom';


// import AboutMain from './about_main';

class Main extends React.Component {
    constructor(props) {
        super(props);

        // this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.props.fetchShoeItems()
            .then(() => this.props.fetchAllShoes())
    }

    // handleClick() {

    //     this.props.fetchShoeItems();
    // }

    render() {
        return (
            <div className="main-image">
                <div className="header-text">
                  
                    <p>BETTER SHOES</p>
                    <p>IN A BETTER WAY</p>
                </div>

                <div className="main-links">
                    <div className="link-text">
                        <Link className="main-link" to="/shoes/women">SHOP WOMEN</Link>
                        
                    </div>

                    <div className="link-text">     
                        <Link className="main-link" to="/shoes/men">SHOP MEN</Link>
                    </div>
                </div>
            </div>    
        );
    }
    
}

export default Main;
