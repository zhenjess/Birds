import { connect } from 'react-redux';
import React from 'react';
import { shoes } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'shoe',
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
        otherForm: (
            <button onClick={() => dispatch(openModal('Nest'))}>
                Nest
      </button>
        ),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NestForm);
