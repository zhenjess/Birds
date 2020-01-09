export const fetchShoeItems = () => {
    return $.ajax({
        url: `/api/items`,
        method: 'GET'
    });
};
