//import React from 'react';

import { connect } from 'react-redux';

import NavbarForm from './navbar_form';

import { Link, Route } from 'react-router-dom';


const mapStateToProps = state => ({
    currentUser:state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavbarForm);
