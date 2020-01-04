export const fetchAllShoes = () => {
    return $.ajax({
        url: '/api/shoes',
        method: 'GET'
    });
};

export const fetchShoe = (shoeId) => {
    return $.ajax({
        url: `/api/shoes/${shoeId}`,
        method: 'GET'
    });
};

export const fetchAllColors = (gender, colorId) => {
    return $.ajax({
        url: `/api/shoes/${gender}/${colorId}`,
        method: 'GET'
    });
};

// export const fetchAllMaterials = (materialId) => {
//     return $.ajax({
//         url: `/api/shoes/${materialId}`,
//         method: 'GET'
//     });
// };

// export const fetchAllModels = (modelId) => {
//     return $.ajax({
//         url: `/api/shoes/${modelId}`,
//         method: 'GET'
//     });
// };

