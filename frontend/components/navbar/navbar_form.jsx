import React from 'react';

import { Link } from 'react-router-dom';


class NavbarForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="navbar">
                <div className="nav-left">
                    <div className="dropdown">
                        <span className="nav-link" to="/collections/female">FEMALE</span>
                        {/* <button className="dropbtn">FEMALE */}
                        {/* <i className="fa fa-caret-down"></i>
                        </button> */}
                        <div className="dropdown-content">
                            <Link to="/collections/female">SHOP ALL BIRDS</Link>
                            {/* <a href="#">Shop ALL BIRDS</a> */}
                        </div>
                    </div>

                    <div className="dropdown">
                        <span className="nav-link" to="/collections/male">MALE</span>
                        {/* <button className="dropbtn">MALE
                        <i className="fa fa-caret-down"></i>
                        </button> */}
                        <div className="dropdown-content">
                            <Link to="/collections/male">SHOP ALL BIRDS</Link>
                        </div>
                    </div>

                    <a href="#kids">KIDS</a>

                </div>  
                    <style>
                        @import url('https://fonts.googleapis.com/css?family=Lobster+Two:400i&display=swap');
                    </style>
                    

                    <Link className="logo" to='/'>birds</Link>

                <div className="nav-right">
                    <a href="#materials">MATERIALS</a>
                    <a href="#stores">STORES</a>
                    <a href="#account">ACCOUNT</a>
                    <a href="?">?</a>
                    <a href="cart">CART</a>
                </div>
            </div>
        );
    }
}

export default NavbarForm;