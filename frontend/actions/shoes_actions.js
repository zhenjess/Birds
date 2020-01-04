import * as APIUtil from '../util/shoes_api_util';

// import { fetchAllShoes, fetchShoe } from '../util/shoes_api_util';

export const RECEIVE_ALL_SHOES = 'RECEIVE_ALL_SHOES';
export const RECEIVE_SHOE = 'RECEIVE_SHOE';

// const receiveAllShoes = payload => ({
//     type: RECEIVE_ALL_SHOES,
//     //don't only have shoes as we have info on materials and shoeMaterials
//     payload
// });

const receiveAllShoes = payload => {
    return (
        {
            type: RECEIVE_ALL_SHOES,
            //don't only have shoes as we have info on materials and shoeMaterials
            payload
        }
    )
}

const receiveShoe = shoe => ({
    type: RECEIVE_SHOE,
    shoe
});

export const fetchAllShoes = () => dispatch => (
    APIUtil.fetchAllShoes()
    //shoe data or payload to consider additional info material and shoeMaterial
        .then(shoeData => {
            return dispatch(receiveAllShoes(shoeData))}
            )
);

export const fetchShoe = shoeId => dispatch => (
    APIUtil.fetchShoe(shoeId)
        .then(shoe => dispatch(receiveShoe(shoe)))
);

export const fetchAllColors = (colorId) => dispatch => (
    APIUtil.fetchAllColors(colorId)
        //shoe data or payload to consider additional info material and shoeMaterial
        .then(shoeData => {
            return dispatch(receiveAllColors(shoeData))
        }
        )
);

// export const fetchAllMaterials = (materialId) => dispatch => (
//     APIUtil.fetchAllMaterials(materialId)
//         //shoe data or payload to consider additional info material and shoeMaterial
//         .then(shoeData => {
//             return dispatch(receiveAllMaterials(shoeData))
//         }
//         )
// );

// export const fetchAllModels = (modelId) => dispatch => (
//     APIUtil.fetchAllModels(modelId)
//         //shoe data or payload to consider additional info material and shoeMaterial
//         .then(shoeData => {
//             return dispatch(receiveAllModels(shoeData))
//         }
//         )
// );