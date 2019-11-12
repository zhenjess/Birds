import { connect } from 'react-redux';

import ShoeIndex from './shoe_index';

import { fetchAllShoes } from '../../actions/shoes_actions';

import { selectAllShoes } from '../../reducers/selectors';

const mapStateToProps = state => ({
    //shoes: Object.values(state.entities.shoes),

    //selector to return an array of shoes with name material and shoe id
    shoes: selectAllShoes(state),
});

const mapDispatchToProps = dispatch => ({
    fetchAllShoes: () => dispatch(fetchAllShoes())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoeIndex);