import * as APIUtil from '../util/items_api_util';

// import { receiveShoeItems } from '../util/items_api_util';

export const RECEIVE_ITEMS = 'RECEIVE_ITEMS';

// const fetchShoeItems = (items) => {
//     return ({
//         type: RECEIVE_ITEMS, 
//         items: items
//     });
// };

// export const fetchItems = id => dispatch => (
//     receiveShoeItems(id)
//         .then( items => dispatch(fetchShoeItems(items)))
// );

const receiveItems = items => ({
    type: RECEIVE_ITEMS, 
    items: items
});

export const fetchShoeItems = id => dispatch => (
    APIUtil.fetchShoeItems(id)
        .then(items => dispatch(receiveItems(items)))
);