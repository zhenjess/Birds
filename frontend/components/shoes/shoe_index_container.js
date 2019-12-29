import { connect } from 'react-redux';

import ShoeIndex from './shoe_index';

import { fetchAllShoes, fetchShoe } from '../../actions/shoes_actions';

import { selectAllShoes, selectAllShoesByGender } from '../../reducers/selectors';

import{ addToCart, removeFromCart } from '../../actions/cart_actions';

import { fetchItems } from '../../actions/items_actions';

const mapStateToProps = (state, ownProps) => ({
    //shoes: Object.values(state.entities.shoes),

    //selector to return an array of shoes with name material and shoe id
    shoes: selectAllShoesByGender(state, ownProps.match.params.gender), //to hard code by gender

    return ({
        items: items
    });

});

const mapDispatchToProps = dispatch => ({
    fetchAllShoes: () => dispatch(fetchAllShoes()),
    fetchShoe: (shoeId) => dispatch(fetchShoe(shoeId)),
    fetchItems: (id) => dispatch(fetchItems(id)),
    addToCart: (item, size) => dispatch(addToCart(item, size)),
    removeFromCart: (id, size) => dispatch(removeFromCart(id, size))
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoeIndex);