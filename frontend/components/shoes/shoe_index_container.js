import { connect } from 'react-redux';

import ShoeIndex from './shoe_index';

import { fetchAllShoes } from '../../actions/shoes_actions';

const mapStateToProps = state => ({
    shoes: Object.values(state.entities.shoes),
    // shoe:selectAllShoes(state),
    // loading: state.ui.loading.indexLoading
});

const mapDispatchToProps = dispatch => ({
    fetchAllShoes: () => dispatch(fetchAllShoes())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoeIndex);