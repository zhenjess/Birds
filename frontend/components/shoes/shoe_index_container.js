import { connect } from 'react-redux';

import ShoeIndex from './shoe_index';

import { fetchAllShoes, fetchShoe } from '../../actions/shoes_actions';

import { selectAllShoes, selectAllShoesByGender, selectItemsByGender } from '../../reducers/selectors';

import{ addToCart, removeFromCart } from '../../actions/cart_actions';

import { fetchShoeItems } from '../../actions/items_actions';

const mapStateToProps = (state, ownProps) => {
    //debugger
        return {
        //shoes: Object.values(state.entities.shoes),

        //selector to return an array of shoes with name material and shoe id
        shoes: selectAllShoesByGender(state, ownProps.match.params.gender), //to hard code by gender

        items: selectItemsByGender(state, ownProps.match.params.gender)
        // items: []

    };
}

const mapDispatchToProps = dispatch => ({
    fetchAllShoes: () => dispatch(fetchAllShoes()),
    fetchShoe: (shoeId) => dispatch(fetchShoe(shoeId)),
    fetchShoeItems: (itemId) => dispatch(fetchShoeItems(itemId)),
    addToCart: (item, size) => dispatch(addToCart(item, size)),
    removeFromCart: (id, size) => dispatch(removeFromCart(id, size))
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoeIndex);