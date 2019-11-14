import React from 'react';

import { Link } from 'react-router-dom';


class NavbarForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleNestClick = this.handleNestClick.bind(this);
    }
    handleNestClick(e) {
        e.preventDefault();
        const nest = this.props.nest;
        const user = Object.assign({}, this.state);
        nest(user);
        this.setState({ processed: true });
    }

    render() {
        return (
            <div className="navbar">
                <div className="nav-left">
                    <div className="dropdown">
                        <span className="nav-link" to="/shoes/female">FEMALE</span>
                        {/* <button className="dropbtn">FEMALE */}
                        {/* <i className="fa fa-caret-down"></i>
                        </button> */}
                        <div className="dropdown-content">
                            <Link to="/shoes/female">SHOP ALL BIRDS</Link>
                            {/* <a href="#">Shop ALL BIRDS</a> */}
                        </div>
                    </div>

                    <div className="dropdown">
                        <span className="nav-link" to="/shoes/male">MALE</span>
                        {/* <button className="dropbtn">MALE
                        <i className="fa fa-caret-down"></i>
                        </button> */}
                        <div className="dropdown-content">
                            <Link to="/shoes/male">SHOP ALL BIRDS</Link>
                        </div>
                    </div>

                    <a href="#chicks">CHICKS</a>

                </div>  
                    <style>
                        @import url('https://fonts.googleapis.com/css?family=Lobster+Two:400i&display=swap');
                    </style>
                    

                    <Link className="logo" to='/'>birds</Link>

                <div className="nav-right">
                    <a href="#materials">MATERIALS</a>
                    <a href="#branches">BRANCHES</a>
                    <a href="#account">ACCOUNT</a>
                    <a href="?">?</a>
                    <button onClick={this.handleNestClick}>NEST</button>
                </div>
            </div>
        );
    }
}

export default NavbarForm;