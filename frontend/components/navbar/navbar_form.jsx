import React from 'react';

import { Link } from 'react-router-dom';


class NavbarForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="nav-left">
                    <div className="dropdown">
                        <button className="dropbtn">FEMALE
                        <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content">
                            <a href="#">Shop ALL BIRDS</a>
                        </div>

                    </div>
                    <div className="dropdown">
                        <button className="dropbtn">MALE
                        <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content">
                            <a href="#">Shop ALL BIRDS</a>
                        </div>
                    </div>
                    <a href="#kids">KIDS</a>
                </div>

                <div className="logo">
                    <style>
                        @import url('https://fonts.googleapis.com/css?family=Lobster&display=swap');
                </style>
                    <h1>birds</h1>
                </div>

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