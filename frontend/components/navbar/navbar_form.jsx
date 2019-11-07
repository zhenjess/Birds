import React from 'react';

import { Link } from 'react-router-dom';


class NavbarForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="nav-left">
                <div className="dropdown">
                    <button className="dropbtn">FEMALE
                        <i className="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-content">
                        <a href="#">Shop ALL BIRDS</a>
                    </div>

                </div>
                <div className="dropdown">
                    <button className="dropbtn">MALE
                        <i className="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-content">
                        <a href="#">Shop ALL BIRDS</a>
                    </div>
                </div>
                <a href="#chicks">CHICKS</a>
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
                <a href="nest">NEST</a>
            </div>
        );
    }
}

export default NavbarForm;