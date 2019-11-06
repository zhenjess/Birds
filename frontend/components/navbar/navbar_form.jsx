// import React from 'react';

// import { Link } from 'react-router-dom';

// class NavbarForm extends React.Component {
//     constructor(props) {
//         super(props);
//     }

//     renderForm() {
        
//         return (
//             <div className="navbar">
//                 <Link className="button" to="/account">Account</Link>
//             </div>
//         );
//     }

//     return (
        
//     );
// }

// export default NavbarForm;

import React from 'react';

import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
    const display = currentUser ? (
        <div>

        </div>
    ) : (
        <div>
            <Link className="button" to="/MEN">MEN</Link>
            <Link className="button" to="/WOMEN">WOMEN</Link>
            <Link className="button" to="/KIDS">KIDS</Link>
            <Link className="button" to="MATERIALS">MATERIALS</Link>
            <Link className="button" to="STORES">STORES</Link>
            <Link className="button" to="ACCOUNT">ACCOUNT</Link>
            <Link className="button" to="?">?</Link>
            <Link className="button" to="CART">Cart</Link>
        </div>
    );

    return (
        <header className="navbar">
            <h1 className="logo">birds</h1>
            <div>
                {display}
            </div>
        </header>
    );
}