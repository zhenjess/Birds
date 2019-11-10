export const fetchShoes = (shoe) => {
    return $.ajax({
        url: '/api/shoes', 
        method: 'GET'
    });
};