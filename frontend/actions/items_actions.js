import * as APIUtil from '../util/items_api_util';

export const RECEIVE_ITEMS = 'RECEIVE_ITEMS';

const receiveItems = items => ({
    type: RECEIVE_ITEMS, 
    items: items
});

export const fetchShoeItems = itemId => dispatch => (
    APIUtil.fetchShoeItems(itemId)
        .then(items => dispatch(receiveItems(items)))
);



