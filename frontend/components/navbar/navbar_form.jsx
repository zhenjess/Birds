import React from 'react';

import { Link } from 'react-router-dom';

class NavbarForm extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            processed: false
        }
    }

    handleSubmit(modal) {
        return (e) => {
            e.preventDefault();
            
            if (this.state.processed) {
                this.setState({ processed: false }, () => this.props.closeModal());
            } else {
                this.setState({ processed: true }, () => this.props.openModal(modal));
            }
        }
    }

    render() {
        return (
            <div className="navbar">
                <div className="nav-left">
                    <div className="dropdown-women">
                        <span className="nav-link" to="/shoes/women">WOMEN</span>
                        <i className="fas fa-angle-down"></i>
                    </div>
                    <div className="dropdown-men">
                        <span className="nav-link" to="/shoes/women">MEN</span>
                        <i className="fas fa-angle-down"></i>
                    </div>
                </div>

                <div className="logo">
                    <style>
                        @import url('https://fonts.googleapis.com/css?family=Lobster+Two:400i&display=swap');
                    </style>
                    <Link className="logo" to='/'>birds</Link>

                </div>

                {/* <div className="nav-right">
                    <a href="#materials" className="nav-materials">MATERIALS</a>
                    <a href="#branches" className="nav-branches">BRANCHES</a>

                </div> */}
                    <div className="nav-icons">
                        <div className="nav-right">
                            <div className="nav-materials">
                                <a href="#materials">MATERIALS</a>
                            </div>
                            <div className="nav-branches">
                                 <a href="#branches">BRANCHES</a>
                            </div>
                        </div>
                        <a href="#account" className="icon-button cart-button" ><i className="far fa-user icon"></i></a>
                        <a href="?" className="icon-button cart-button" ><i className="far fa-question-circle icon"></i></a>
                        <button className="icon-button cart-button" onClick={this.handleSubmit("shoe index")}><i className="fas fa-shopping-cart" /></button>
                    </div>
            </div>
        );
    }
}

export default NavbarForm;