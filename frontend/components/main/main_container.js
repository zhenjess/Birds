import React from 'react';

import { fetchShoeItems } from '../../actions/items_actions';
import { fetchAllShoes } from '../../actions/shoes_actions';

import Main from './main';

import { connect } from 'react-redux';


const mapDispatchToProps = (dispatch) => ({
    fetchShoeItems: () => dispatch(fetchShoeItems()),
    fetchAllShoes: () => dispatch(fetchAllShoes())
});

export default connect(null, mapDispatchToProps)(Main);