import React from 'react';

import SignupFormContainer from './signup_form_container';

import LoginFormContainer from './login_form_container';

import LogoutFormContainer from './logout_form_container';


class AccountForms extends React.Component {
    // const myAccount = () => (
    //     <div className="forms-page">
    //         <div className="my-account-page">
    //             <div className="my-account-page-header">
    //                 <h1>My Account</h1>
    //                 <input type="submit" className="sign-out" value="LOGOUT" onClick={logout} />
    //             </div>
    //             <div className="my-account-page-body">
    //                 <div className="order">You don't have any items in your cart.</div>
    //                 <div className="user-info">
    //                     <div>WELCOME</div>
    //                     <div></div>
    //                 </div>
    //             </div>
    //         </div>
    //         <footer></footer>
    //     </div>
    // )
    
    renderForm() {
        if (this.props.currentUser) {
           return <LogoutFormContainer />
        //    <div className="logout-page">
        //        <h3>MY ACCOUNT</h3>
        //        <div className="logout-button">
        //             <button>LOGOUT</button>
        //        </div>
        //    </div>
        }    
        return (
            <div>
                <LoginFormContainer />
                <SignupFormContainer />
            </div>
        );      
    }
    render() {
        return (
           this.renderForm()
        );
    }
}

export default AccountForms;