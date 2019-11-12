import { connect } from 'react-redux';

import ShoeIndex from './shoe_index';

import { fetchAllShoes } from '../../actions/shoes_actions';

import { selectAllShoes, selectAllShoesByGender } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
    //shoes: Object.values(state.entities.shoes),

    //selector to return an array of shoes with name material and shoe id
    shoes: selectAllShoesByGender(state, ownProps.match.params.gender), //to hard code by gender


});

const mapDispatchToProps = dispatch => ({
    fetchAllShoes: () => dispatch(fetchAllShoes())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoeIndex);