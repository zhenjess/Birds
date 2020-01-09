import { connect } from 'react-redux';
import React from 'react';
import { shoes } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import Cart from './cart';
import { removeFromCart } from '../../actions/cart_actions';
import { withRouter } from 'react-router-dom';

// import NestForm from './nest_form';

const mapStateToProps = ( state ) => {
    
    return {
        errors: state.errors.session,
        formType: 'shoe',
        items: Object.values(state.entities.carts)
        // items: Object.values(state.entities.carts)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        removeFromCart: (id, size) => dispatch(removeFromCart(id, size)),
    
        processForm: (user) => dispatch(login(user)),
        otherForm: (
            <button onClick={() => dispatch(openModal('Cart'))}>
                Cart
            </button>
        ),
        // closeModal: () => dispatch(closeModal())
        openModal: () => dispatch(openModal())
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cart));
