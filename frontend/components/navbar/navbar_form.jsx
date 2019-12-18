// import React from 'react';

// import { Link } from 'react-router-dom';


// class NavbarForm extends React.Component {
//     constructor(props) {
//         super(props);
//         // this.handleNestClick = this.handleNestClick.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this)
//         this.state = { processed: false }; 
//     }

//     // handleNestClick() {
//     //     e.preventDefault();
//     //     const nest = this.props.nest;
//     //     const user = Object.assign({}, this.state);
//     //     nest(user);
//     //     this.setState({ processed: true });

//     // }

//     handleSubmit(modal) {
//         return (e) => {
//             e.preventDefault();
//             if (this.state.processed) {
//                 this.setState({ processed: false }, () => this.props.closeModal());
//             } else {
//                 this.setState({ processed: true }, () => this.props.openModal(modal));
//             }
//         }
//     }

//     render() {
//         return (
//             <div className="navbar">
//                 <div className="nav-left">
//                     <div className="dropdown">
//                         <span className="nav-link" to="/shoes/women">WOMEN</span>     
//                         <i className="fas fa-caret-down icon"></i>
//                         {/* <button className="dropbtn">FEMALE */}
//                         {/* <i className="fa fa-caret-down"></i>
//                         </button> */}
//                         <div className="dropdown-content">
//                             <Link to="/shoes/women">SHOP ALL BIRDS</Link>
//                             {/* <a href="#">Shop ALL BIRDS</a> */}
//                         </div>
//                     </div>

//                     <div className="dropdown">
//                         <span className="nav-link" to="/shoes/men">MEN</span>
//                         <i className="fas fa-caret-down icon"></i>
//                         {/* <button className="dropbtn">MALE
//                         <i className="fa fa-caret-down"></i>
//                         </button> */}
//                         <div className="dropdown-content">
//                             <Link to="/shoes/men">SHOP ALL BIRDS</Link>
//                         </div>
//                     </div>

//                 </div>  
//                     <style>
//                         @import url('https://fonts.googleapis.com/css?family=Lobster+Two:400i&display=swap');
//                     </style>
                    

//                     <Link className="logo" to='/'>birds</Link>

//                 <div className="nav-right">
//                     <a href="#materials">MATERIALS</a>
//                     <a href="#branches">BRANCHES</a>
//                     <a href="#account"><i className="far fa-user icon"></i></a>
//                     <a href="?"><i className="far fa-question-circle icon"></i></a>
//                     {/* <button onClick={this.handleSubmit("shoe index")}><i className="fas fa-shopping-cart icon"></i></button> */}
//                     <button className="icon-button cart-button" onClick={this.handleSubmit("shoe index")}><i className="fas fa-shopping-cart" /></button>
//                 </div>
//             </div>
//         );
//     }
// }

// class NavbarForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             processed: false, 
//             showDropdown: false
//         };
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.showDropdown = this.showDropdown.bind(this);
//         this.closeDropdown = this.closeDropdown.bind(this);
//     }

//     showDropdown(e) {
//         e.preventDefault();
        
//         this.setState({ showDropdown: true }, () => {
//             document.addEventListener('click', this.closeDropdown);
//         });
//     }

//     closeDropdown() {
//         this.setState({ showDropdown: false }, () => {
//             document.removeEventListener('click', this.closeDropdown);
//         });
//     }

//     handleSubmit(modal) {
//         return (e) => {
//             e.preventDefault();
//             if (this.state.processed) {
//                 this.setState({ processed: false }, () => this.props.closeModal());
//             } else {
//                 this.setState({ processed: true }, () => this.props.openModal(modal));
//             }
//         }
//     }

//     render() {
//         return (
//             <div className="navbar">
//                 <div className="nav-left">

//                 </div>

//                 <style>
//                     @import url('https://fonts.googleapis.com/css?family=Lobster+Two:400i&display=swap');
//                 </style>
//                 <Link className="logo" to='/'>birds</Link>

//                 <div className="nav-right">
//                     <div className="nav-right-links">
//                         <a href="#materials">MATERIALS</a>
//                         <a href="#branches">BRANCHES</a>
//                     </div>
//                     <a href="#account"><i className="far fa-user icon"></i></a>
//                     <a href="?"><i className="far fa-question-circle icon"></i></a>
//                     <button className="icon-button cart-button" onClick={this.handleSubmit("shoe index")}><i className="fas fa-shopping-cart" /></button>
//                 </div>
//             </div>
//         );
//     }
// }

// export default NavbarForm;


import React from 'react';

import { Link } from 'react-router-dom';

class NavbarForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            processed: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
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
                        <span className="nav-link" to="/shoes/men">MEN</span>
                        <i className="fas fa-angle-down"></i>
                    </div>
                </div>

                <style>
                    @import url('https://fonts.googleapis.com/css?family=Lobster+Two:400i&display=swap');
                </style>


                <Link className="logo" to='/'>birds</Link>

                <div className="nav-right">
                    
                        <a href="#materials">MATERIALS</a>
                        <a href="#branches">BRANCHES</a>
                    
                    <div className="nav-right-icons">
                        <a className="nav-user" href="#account"><i className="far fa-user icon"></i></a>
                        <a className="nav-question" href="?"><i className="far fa-question-circle icon"></i></a>
                        <button className="icon-button cart-button" onClick={this.handleSubmit("shoe index")}><i className="fas fa-shopping-cart" /></button>
                    </div>
                </div>
            </div>
        );
    }
}

export default NavbarForm;
