import React from 'react';

import { Link } from 'react-router-dom';


class NavbarForm extends React.Component {
    constructor(props) {
        super(props);
        // this.handleNestClick = this.handleNestClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = { processed: false }; 
    }

    // handleNestClick() {
    //     e.preventDefault();
    //     const nest = this.props.nest;
    //     const user = Object.assign({}, this.state);
    //     nest(user);
    //     this.setState({ processed: true });

    // }

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
                    <div className="dropdown">
                        <span className="nav-link" to="/shoes/female">FEMALE</span>     
                        <i class="fas fa-caret-down"></i>
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
                        <i class="fas fa-caret-down"></i>
                        {/* <button className="dropbtn">MALE
                        <i className="fa fa-caret-down"></i>
                        </button> */}
                        <div className="dropdown-content">
                            <Link to="/shoes/male">SHOP ALL BIRDS</Link>
                        </div>
                    </div>

                    <a href="#chicks">KIDS</a>

                </div>  
                    <style>
                        @import url('https://fonts.googleapis.com/css?family=Lobster+Two:400i&display=swap');
                    </style>
                    

                    <Link className="logo" to='/'>birds</Link>

                <div className="nav-right">
                    <a href="#materials">MATERIALS</a>
                    <a href="#branches">BRANCHES</a>
                    <a href="#account"><i class="far fa-user"></i></a>
                    <a href="?"><i class="far fa-question-circle"></i></a>
                    <button onClick={this.handleSubmit("shoe index")}><i class="fas fa-shopping-cart"></i></button>
                </div>
            </div>
        );
    }
}

export default NavbarForm;