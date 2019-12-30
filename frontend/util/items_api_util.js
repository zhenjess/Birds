export const fetchShoeItems = (gender) => {
    return $.ajax({
        url: `/api/items/${gender}`,
        method: 'GET'
    });
};