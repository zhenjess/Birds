import * as APIUtil from '../util/session_api_util';

import { fetchAllShoes, fetchShoe } from '../util/shoes_api_util';

export const FETCH_ALL_SHOES = 'FETCH_ALL_SHOES';
export const FETCH_SHOE = "FETCH_SHOE";

const fetchAllShoes = shoes => ({
    type: FETCH_ALL_SHOES,
    shoes
});

const fetchShoe = shoe => ({
    type: FETCH_SHOE,
    shoe
});

export const fetchShoes = () => dispatch => (
    APIUtil.fetchShoes()
        .then(shoes => dispatch(fetchAllShoes(shoes)))
);

export const fetchAShoe = shoeId => dispatch => (
    APIUtil.fetchAShoe(shoeId)
        .then(shoe => dispatch(fetchShoe(shoe)))
);

