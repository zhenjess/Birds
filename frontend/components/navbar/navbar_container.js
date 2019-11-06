//import React from 'react';

import { connect } from 'react-redux';

import NavbarForm from './navbar_form';

import { Link, Route } from 'react-router-dom';

// import BirdsDropDown from './navbar_birds_dropdown';

import { withRouter } from 'react-router-dom';

// // import DropDownButton from './dropdownbutton';


const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(NavbarForm);
