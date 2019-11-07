import React from 'react';

import { Link } from 'react-router-dom';

// export default ({ currentUser, logout }) => {
//     const display = currentUser ? (
//         <div>

//         </div>
//     ) : (
//         <div>
//             <Link className="button" to="/MEN">MEN</Link>
//             <Link className="button" to="/WOMEN">WOMEN</Link>
//             <Link className="button" to="/KIDS">KIDS</Link>
//             <Link className="button" to="MATERIALS">MATERIALS</Link>
//             <Link className="button" to="STORES">STORES</Link>
//             <Link className="button" to="ACCOUNT">ACCOUNT</Link>
//             <Link className="button" to="?">?</Link>
//             <Link className="button" to="CART">Cart</Link>
//         </div>
//     );

//     return (
//         <header className="navbar">
//             <h1 className="logo">birds</h1>
//             <div>
//                 {display}
//             </div>
//         </header>
//     );
// }

class NavbarForm extends React.Component {
    render() {
        return(
            <div className="navbar">
                <div className="dropdown">
                    <button className="dropbtn">MALE
                        <i className="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-content">
                        <a href="#">Shop ALL BIRDS</a>
                    </div>
                </div>

                <div className="dropdown">
                    <button class="dropbtn">FEMALE
                        <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-content">
                        <a href="#">Shop ALL BIRDS</a>
                    </div>
                </div>

                <a href="#chicks">CHICKS</a>
                
                <header className="navbar">
                    <h1 className="logo">birds</h1>
                </header>

                <div className="links">
                    <a href="#materials">MATERIALS</a>
                    <a href="#stores">STORES</a>
                    <a href="#account">ACCOUNT</a>
                    <a href="?">?</a>
                    <a href="nest">NEST</a>
                </div>
            </div>
        );
    }
}

export default NavbarForm;