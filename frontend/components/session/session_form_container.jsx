import React from 'react';

import { signup, login, logout } from '../../actions/session_actions';

import { connect } from 'react-redux';

import { SignupForm } from './signup_form';

import { LoginForm } from './login_form';

import { LogoutForm } from './logout_form';

const mapStateToProps = (state) => {
    return ({
        currentUser: state.session.id,
        errors: state.errors.session
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        signup: user => dispatch(signup(user)), 
        login: user => dispatch(login(user)),
        logout: () => dispatch(logout())
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm)(LoginForm)(LogoutForm);

